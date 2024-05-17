<script setup lang="ts">
import type { MaisonRecord } from '@/pocketbase-types';
import MaisonCard from '@/components/MaisonCard.vue';

import { allMaisonsSorted } from '@/backend';

const maisonsListe = await allMaisonsSorted();

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <!-- <MaisonCard v-bind="maisonsListe[0]" /> -->
  <!-- <MaisonCard v-for="uneMaison in maisonsListe" :key="uneMaison.nomMaison" v-bind="uneMaison" /> -->
  <ul>
    <li v-for="uneMaison of maisonsListe" :v-key="uneMaison.id">
      <RouterLink
        :to="{
          name: '/offres/[id]',
          params: {
            id: uneMaison.id
          }
        }"
        class="text-red-400 hover:text-red-600"
      >
        {{ uneMaison.nomMaison }}
      </RouterLink>
    </li>
  </ul>
</template>
