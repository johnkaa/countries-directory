<script setup lang="ts">
import type ICountry from "~/pkg/interfaces/country";
import formatNumber from "../../pkg/plugins/formatNumber";

interface Props {
  country: ICountry;
}

const props = defineProps<Props>();
</script>

<template>
  <NuxtLink class="country-card" :to="`/${props.country.cca3}`">
    <UCard>
      <template #header>
        <div class="country-card__header">
          <span class="country-card__name">
            {{ props.country.name.common }}
          </span>
          <div class="country-card__info">
            <span class="country-card__info-title">CCA3:</span>
            <span class="country-card__info-amount">
              {{ props.country.cca3 }}
            </span>
          </div>
        </div>
      </template>
      <template #default>
        <NuxtImg
          is="map"
          :src="props.country.flags.svg"
          :alt="props.country.flags.alt"
          class="country-card__flag"
          loading="lazy"
          width="256"
          height="128"
          decoding="auto"
        />
      </template>
      <template #footer>
        <div class="country-card__info">
          <span class="country-card__info-title">Population:</span>
          <span class="country-card__info-amount">
            {{ formatNumber(props.country.population) }}
          </span>
        </div>
      </template>
    </UCard>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/card/country";
</style>
