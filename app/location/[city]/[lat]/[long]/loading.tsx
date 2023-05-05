import { SunIcon } from '@heroicons/react/solid';
import React from 'react';

type Props = {};

const loading = (props: Props) => {
  return (
    <div className="bg-gradient-to-br from-indigo-800 to-blue-500 min-h-screen flex flex-col items-center justify-center text-slate-500">
      <SunIcon
        className="h-24 w-24 animate-bounce text-yellow-500"
        color="yellow"
      />
      <h2 className="text-xl font-bold text-center mb-10 animate-pulse">
        Hold on,we are crunching the numbers &aps; generating an AI summary of
        the Weather!
      </h2>
    </div>
  );
};

export default loading;
