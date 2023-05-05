'use client';

import { Card, AreaChart, Title } from '@tremor/react';

type Props = {
  results: Root;
};

const TempChart = ({ results }: Props) => {
  const {
    hourly: { time, uv_index, temperature_2m },
  } = results;

  const hourly = time
    .map((time) =>
      new Date(time).toLocaleString('en-US', {
        hour: 'numeric',
        hour12: false,
      })
    )
    .slice(0, 24);

  const data = hourly.map((hour, i) => ({
    time: Number(hour),
    'UV Index': uv_index[i],
    'Temprature (C)': temperature_2m[i],
  }));

  const dataFormatter = (number: Number) => `${number} °C`;

  return (
    <Card>
      <Title>Temprature &amp; UV Index</Title>
      <AreaChart
        className="mt-6"
        data={data}
        showLegend
        index="time"
        categories={['Temprature (C)', 'UV Index']}
        colors={['yellow', 'rose']}
        minValue={0}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default TempChart;
