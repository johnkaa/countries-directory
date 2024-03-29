import { defineStore } from "pinia";
import type ICountry from "~/pkg/interfaces/country";

export type CountriesState = {
  countries: ICountry[];
  isFetching: boolean;
};

export const useCountries = defineStore("countries", {
  state: () =>
    ({
      countries: [],
      isFetching: true,
    }) as CountriesState,

  actions: {
    async fetchAllCountries() {
      this.isFetching = true;

      try {
        const { data } = await useFetch(
          `https://restcountries.com/v3.1/all?fields=name,flags,cca3,population`,
        );
        this.countries = data.value as ICountry[];
      } catch (e) {
        console.error(e);
      } finally {
        this.isFetching = false;
      }
    },
    async searchCountries(searchValue: string) {
      this.isFetching = true;

      try {
        const { data } = await useFetch(
          `https://restcountries.com/v3.1/all?fields=name,flags,cca3,population`,
        );
        const fetchedCountries = data.value as ICountry[];

        const byName = fetchedCountries.filter((country) =>
          country.name.common.toLowerCase().includes(searchValue.toLowerCase()),
        );
        const byCode = fetchedCountries.filter((country) =>
          country.cca3.toLowerCase().includes(searchValue.toLowerCase()),
        );

        this.countries = [...byName, ...byCode];
      } catch (e) {
        console.error(e);
      } finally {
        this.isFetching = false;
      }
    },
  },
});
