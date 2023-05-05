import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import CityPicker from './CityPicker';
import weatherCodeToString from '@/lib/weatherCodeToString';
import Image from 'next/image';

type Props = {
  city: string;
  lat: string;
  long: string;
  results: Root;
};

const InformationPanel = (props: Props) => {
  const { city, lat, long, results } = props;
  const { current_weather, daily } = results;
  const { temperature, weathercode } = current_weather;
  const { sunrise, sunset } = daily;

  return (
    <div className="bg-gradient-to-br text-white from-indigo-800 to-blue-500 p-10">
      <div className="pb-5">
        <h1 className="text-6xl font-bold">{decodeURI(city)}</h1>
        <p className="text-xs text-gray-400">
          Long/Lat: {long}, {lat}
        </p>
      </div>

      <CityPicker />

      <hr className="my-10" />

      <div className="mt-5 flex items-center justify-between space-x-10 mb-5">
        <div>
          <p className="text-xl">
            {new Date().toLocaleDateString('en-GB', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          <p className="font-extralight">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>

        <p className="text-xl font-bold uppercase">
          {new Date().toLocaleTimeString('en-GB', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </p>
      </div>

      <hr className="my-10" />

      <div className="flex items-center justify-between">
        <div className="">
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${weatherCodeToString[weathercode].icon}.png`}
            alt={weatherCodeToString[weathercode].lable}
            width={75}
            height={75}
          />

          <div className="flex items-center justify-between space-x-10">
            <p className="text-6xl font-semibold">
              {temperature.toFixed(1)}&deg;C
            </p>
            <p className="text-right font-extralight text-lg">
              {weatherCodeToString[weathercode].lable}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2 py-5">
        <div className="flex items-center space-x-2 px-4 py-3 border border-slate-400 rounded-md bg-slate-600">
          <SunIcon className="h-10 2-10 text-gray-400" />

          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight">Sunrise</p>
            <p>
              {new Date(sunrise[0]).toLocaleTimeString('en-GB', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 px-4 py-3 border border-slate-400 rounded-md bg-slate-600">
          <MoonIcon className="h-10 2-10 text-gray-400" />

          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight">Sunset</p>
            <p>
              {new Date(sunset[0]).toLocaleTimeString('en-GB', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPanel;
