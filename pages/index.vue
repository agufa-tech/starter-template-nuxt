<template lang="pug">
div(class="elevation-5")
  NuxtWelcome
div(class="border p-5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-lg")
  p(class="border shadow-lg") {{ filtersList }}
  IconXmark
</template>

<script setup lang="ts">
import IconXmark from "~icons/fa6-solid/xmark";

import { useFiltersStore } from "~/stores/filters";

const filtersStore = useFiltersStore();
const filtersList = filtersStore.filtersList;
</script>
