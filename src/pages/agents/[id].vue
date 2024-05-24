<script setup lang="ts">
  import AgenceCard from '@/components/AgenceCard.vue'
  import { allAgenceMaisonbyId } from '@/backend';

  import { useRoute } from 'vue-router/auto'

  const route = useRoute('/agents/[id]')
  console.log('id :', route.params.id)

//   const uneAgence = await allAgenceMaisonbyId(route.params.id)
</script>
<template>
  <div>
    <h1 class="text-xl">Une agence</h1>
    <!-- <AgenceCard v-bind="uneAgence"/> -->
  </div>
</template>