const weatherCodeToString: {
  [key: number]: {
    icon: string;
    lable: string;
  };
} = {
  0: {
    icon: 'c01d',
    lable: 'Clear sky',
  },
  1: {
    icon: 'c02d',
    lable: 'Mainly clear',
  },
  2: {
    icon: 'c03d',
    lable: 'Partly clear',
  },
  3: {
    icon: 'c04d',
    lable: 'Overcast',
  },
  45: {
    icon: 's05d',
    lable: 'Fog',
  },
  48: {
    icon: 's05d',
    lable: 'Deposit rime fog',
  },
  51: {
    icon: 'd01d',
    lable: 'Drizzle',
  },
  53: {
    icon: 'd01d',
    lable: 'Drizzle',
  },
  55: {
    icon: 'd01d',
    lable: 'Drizzle',
  },
  56: {
    icon: 'd01d',
    lable: 'Freezing Drizzle',
  },
  57: {
    icon: 'd01d',
    lable: 'Freezing Drizzle',
  },
  61: {
    icon: 'r01d',
    lable: 'Rain',
  },
  63: {
    icon: 'r01d',
    lable: 'Rain',
  },
  65: {
    icon: 'r01d',
    lable: 'Rain',
  },
  66: {
    icon: 'r01d',
    lable: 'Freezing Rain',
  },
  67: {
    icon: 'r01d',
    lable: 'Freezing Rain',
  },
  71: {
    icon: 's02d',
    lable: 'Snow',
  },
  73: {
    icon: 's02d',
    lable: 'Snow',
  },
  75: {
    icon: 's02d',
    lable: 'Snow',
  },
  77: {
    icon: 's02d',
    lable: 'Snow Grains',
  },
  80: {
    icon: 'r02d',
    lable: 'Rain Showers',
  },
  81: {
    icon: 'r02d',
    lable: 'Rain Showers',
  },
  82: {
    icon: 'r02d',
    lable: 'Rain Showers',
  },
  85: {
    icon: 's01d',
    lable: 'Snow Showers',
  },
  86: {
    icon: 's01d',
    lable: 'Snow Showers',
  },
  95: {
    icon: 't04d',
    lable: 'Thunderstrom',
  },
  96: {
    icon: 't04d',
    lable: 'Thunderstrom',
  },
  99: {
    icon: 't04d',
    lable: 'Thunderstrom',
  },
};

export default weatherCodeToString;
