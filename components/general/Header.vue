<script setup lang="ts">
const router = useRouter();

const searchState = reactive({
  searchValue: "",
});

async function submitSearch() {
  await router.push({
    path: "/",
    query: {
      searchValue: searchState.searchValue,
    },
  });
}
</script>

<template>
  <header class="header">
    <nuxt-link class="header__logo" to="/">COUNTRIES DIRECTORY</nuxt-link>
    <UForm class="header__form" :state="searchState" @submit="submitSearch">
      <UInput
        v-model="searchState.searchValue"
        class="header__form-input"
        placeholder="Search by name or cca3"
      />

      <UButton class="header__form-button" type="submit">Search</UButton>
    </UForm>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/general/header";
</style>
