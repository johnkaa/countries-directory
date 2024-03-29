<script setup lang="ts">
import { useCountries } from "~/stores/countries";

const route = useRoute();

const countriesStore = useCountries();

const isFetching = computed(() => countriesStore.isFetching);
const countries = computed(() => countriesStore.countries);

watch(
  () => route.query,
  () => {
    fetchData();
  },
);

async function fetchData() {
  await useAsyncData("countries", () => {
    const querySearchValue = route.query?.searchValue as string;

    if (querySearchValue) {
      return countriesStore.searchCountries(querySearchValue);
    } else {
      return countriesStore.fetchAllCountries();
    }
  });
}

fetchData();
</script>

<template>
  <div class="home">
    <div v-if="isFetching" class="home__countries-skeleton">
      <CardCountrySkeleton v-for="i in 24" :key="i" />
    </div>

    <div v-else-if="countries && countries.length" class="home__countries">
      <CardCountry
        v-for="(country, index) in countries"
        :key="index"
        :country="country"
      />
    </div>

    <h2 v-else class="home__not-found">Ooops... Countries not found!</h2>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/pages/index";
</style>
