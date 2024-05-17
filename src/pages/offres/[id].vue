<script setup lang="ts">
  import { allMaisonsSorted } from '@/backend';
  import MaisonCard from '@/components/MaisonCard.vue'
  import { oneID } from '@/backend';


  import { useRoute } from 'vue-router/auto'

  const route = useRoute('/offres/[id]')
  console.log('id :', route.params.id)

  const uneMaison = await oneID(route.params.id);
</script>
<template>
  <div>
    <h1 class="text-xl">Résultat de votre recherche</h1>
    <MaisonCard v-bind="uneMaison" />
  </div>
</template>