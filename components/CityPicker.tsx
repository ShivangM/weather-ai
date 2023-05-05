import React, { useState } from 'react';
import { Country, City } from 'country-state-city';
import Select from 'react-select';
import { useRouter } from 'next/navigation';
import { GlobeIcon } from '@heroicons/react/solid';

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  lable: country.name,
}));

const CityPicker = () => {
  const [selectedCountry, setselectedCountry] = useState<Option>(null);
  const [selectedCity, setselectedCity] = useState<CityOption>(null);
  const router = useRouter();

  const handleSelectedCountry = (option: Option) => {
    setselectedCountry(option);
    setselectedCity(null);
  };

  const handleSelectedCity = (option: CityOption) => {
    if (!option) return;
    const { longitude, latitude, name } = option?.value;
    setselectedCity(option);
    router.push(`/location/${name}/${latitude}/${longitude}`);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-white/80">
          <GlobeIcon className="h-5 w-5 text-white" />
          <label htmlFor="country">Country</label>
        </div>
        <Select
          className="text-black"
          options={options}
          value={selectedCountry}
          onChange={handleSelectedCountry}
        />
      </div>

      {selectedCountry ? (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white/80">
            <GlobeIcon className="h-5 w-5 text-white" />
            <label htmlFor="city">City</label>
          </div>
          <Select
            className="text-black"
            options={City.getCitiesOfCountry(
              selectedCountry.value.isoCode
            )?.map((state) => ({
              value: {
                latitude: state.latitude,
                longitude: state.longitude,
                countryCode: state.countryCode,
                name: state.name,
                stateCode: state.stateCode,
              },
              lable: state.name,
            }))}
            value={selectedCity}
            onChange={handleSelectedCity}
          />
        </div>
      ) : null}
    </div>
  );
};

export default CityPicker;
