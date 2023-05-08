import { getClient } from '@/apollo-client';
import CalloutCard from '@/components/CalloutCard';
import HumidityChart from '@/components/HumidityChart';
import InformationPanel from '@/components/InformationPanel';
import RainChart from '@/components/RainChart';
import StatCard from '@/components/StatCard';
import TempChart from '@/components/TempChart';
import fetchWeatherQuery from '@/graphql/queries/fetchWeatherQueries';
import React from 'react';
import cleanData from '@/lib/cleanData';
import getBasePath from '@/lib/getBasePath';

export const revalidate = 60;

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

const WeatherPage = async ({ params: { city, lat, long } }: Props) => {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: 'true',
      longitude: long,
      latitude: lat,
      timezone: 'GMT',
    },
  });

  const results: Root = data.myQuery;
  const dataToSend = cleanData(results, city);
  const { current_weather, timezone, daily } = results;
  const { time, windspeed, winddirection } = current_weather;
  const { temperature_2m_max, temperature_2m_min, uv_index_max } = daily;

  const res = await fetch(`${getBasePath()}/api/getWeatherSummary`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      weatherData: dataToSend,
    }),
  });

  const GPTData = (await res?.json()) || null;
  const content = GPTData
    ? GPTData.content
    : 'Sorry unable to generate AI based summary at current time.';

  return (
    <div>
      <div className="">
        <InformationPanel city={city} lat={lat} long={long} results={results} />

        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Todays Overview</h2>
            <p className="text-sm text-gray-400">
              Last Updated at: {new Date(time).toLocaleString()} &#40;{timezone}
              &#41;
            </p>
          </div>

          <div className="m-2 mb-10">
            <CalloutCard message={content} warning={!GPTData} />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 m-2">
            <StatCard
              title="Maximum Temperature"
              metric={`${temperature_2m_max[0].toFixed(1)}°`}
              color="yellow"
            />
            <StatCard
              title="Minimum Temperature"
              metric={`${temperature_2m_min[0].toFixed(1)}°`}
              color="green"
            />

            <div className="">
              <StatCard
                title="UV Index"
                metric={uv_index_max[0].toFixed(1)}
                color="rose"
              />
              {Number(uv_index_max[0].toFixed(1)) > 5 ? (
                <CalloutCard
                  message="The UV is high today, be sure to wear SPF!"
                  warning
                />
              ) : null}
            </div>

            <div className="flex space-x-3">
              <StatCard
                title="Wind Speed"
                metric={`${windspeed.toFixed(1)}m/s`}
                color="cyan"
              />

              <StatCard
                title="Wind Direction"
                metric={`${winddirection.toFixed(1)}°`}
                color="violet"
              />
            </div>
          </div>
        </div>

        <hr className="mb-5" />

        <div className="space-y-3">
          <TempChart results={results} />
          <RainChart results={results} />
          <HumidityChart results={results} />
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
