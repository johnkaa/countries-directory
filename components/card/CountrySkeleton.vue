<template>
  <UCard class="country-skeleton">
    <template #header>
      <USkeleton class="country-skeleton__header" />
    </template>
    <template #default>
      <USkeleton class="country-skeleton__default" />
    </template>
    <template #footer>
      <USkeleton class="country-skeleton__footer" />
    </template>
  </UCard>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/card/country-sekeleton";
</style>
