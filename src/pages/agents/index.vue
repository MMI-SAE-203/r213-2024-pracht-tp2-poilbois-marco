<script setup lang="ts">
import type { AgenceRecord } from '@/pocketbase-types';
import AgenceCard from '@/components/AgenceCard.vue';

import { allAgencesSorted } from '@/backend';

const agenceListe = await allAgencesSorted();

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <!-- <AgenceCard v-for="uneAgence in agenceListe" :key="uneAgence.nom" v-bind="uneAgence" /> -->
  <ul>
    <li v-for="uneAgence of agenceListe" :v-key="uneAgence.id">
      <RouterLink
        :to="{
          name: '/agents/[id]',
          params: {
            id: uneAgence.id
          }
        }"
        class="text-red-400 hover:text-red-600"
      >
        {{ uneAgence.nom }}
      </RouterLink>
    </li>
  </ul>
</template>
