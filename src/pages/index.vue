<script setup lang="ts">
import type { MaisonRecord} from '@/pocketbase-types';
import MaisonCard from '@/components/MaisonCard.vue';

import { allMaisonsFavori } from '@/backend';

const maisonsListe = await allMaisonsFavori()

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <!-- <MaisonCard v-bind="maisonsListe[0]" /> -->
  <MaisonCard v-for="MaisonRecord in maisonsListe" :key="MaisonRecord.id" v-bind="MaisonRecord" />
</template>
