<script setup lang="ts">
import type ICountry from "~/pkg/interfaces/country";

interface Props {
  country: ICountry | null;
}

const props = defineProps<Props>();
</script>

<template>
  <div v-if="props.country" class="country">
    <h1 class="country__title">
      {{ props.country.name.official }}
    </h1>

    <NuxtImg
      is="map"
      :src="props.country.flags.svg"
      :alt="props.country.flags.alt"
      class="country__flag"
      loading="lazy"
      width="256"
      height="128"
      decoding="auto"
    />

    <ul class="country__info">
      <li class="country__info-item">
        <span class="country__info-title">Population: </span>
        <span class="country__info-value">{{ props.country.population }}</span>
      </li>

      <li class="country__info-item">
        <span class="country__info-title">CCA3: </span>
        <span class="country__info-value">{{ props.country.cca3 }}</span>
      </li>
      <li
        v-if="props.country.borders && props.country.borders.length"
        class="country__info-item"
      >
        <span class="country__info-title">Bordering countries CCA3: </span>
        <nuxt-link
          v-for="(cca3, index) in props.country.borders"
          :key="index"
          class="country__info-value"
          :to="`/${cca3}`"
        >
          <span class="country__info-value_link">{{ cca3 }}</span>
          <span>
            {{ index < props.country.borders.length - 1 ? ", " : "." }}
          </span>
        </nuxt-link>
      </li>

      <li class="country__info-item">
        <span class="country__info-title">Google maps: </span>
        <a
          class="country__info-value country__info-value_link"
          :href="props.country.maps.googleMaps"
        >
          {{ props.country.maps.googleMaps }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/page/country";
</style>
