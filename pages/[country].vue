<script setup lang="ts">
import type ICountry from "~/pkg/interfaces/country";

const route = useRoute();
const router = useRouter();
const isFetching = ref<boolean>(true);
const country = ref<ICountry | null>(null);

async function getCountry() {
  try {
    const { data } = await useFetch(
      `https://restcountries.com/v3.1/alpha/${route.params.country}?fields=name,flags,cca3,population,borders,maps`,
    );
    country.value = data.value as ICountry;
  } catch (e) {
    console.error(e);
    router.back();
  } finally {
    isFetching.value = false;
  }
}

getCountry();
</script>

<template>
  <div class="country-page">
    <PageCountrySkeleton v-if="isFetching || !country" />

    <PageCountry v-else :country="country" />
  </div>
</template>
