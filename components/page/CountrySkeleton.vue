<template>
  <div class="country-skeleton">
    <USkeleton class="country-skeleton__title" />
    <USkeleton class="country-skeleton__flag" />
    <USkeleton v-for="i in 4" :key="i" class="country-skeleton__info-item" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/page/country-skeleton";
</style>
