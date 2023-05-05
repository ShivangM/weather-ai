type Option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };

  lable: string;
} | null;

type CityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };

  lable: string;
} | null;
