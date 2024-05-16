<script setup lang="ts">
import type { MaisonRecord } from '@/pocketbase-types';
import MaisonCard from '@/components/MaisonCard.vue';

const maisonsListe:MaisonRecord[] = [
  {
    "adresse": "24 avenue du patriote",
    "collectionId": "tdfafccu8qg1y69",
    "collectionName": "maison",
    "created": "2024-04-12 14:28:18.166Z",
    "favori": true,
    "id": "aa7hxq7mow9w9og",
    "image": "maison_blanche_4o7KTwSrKI.jpg",
    "nbChambres": 2,
    "nbSdb": 1,
    "nomMaison": "Maison Blanche",
    "prix": 220000,
    "surface": 90,
    "updated": "2024-05-02 20:45:18.408Z"
  },
  {
    "adresse": "2 rue de l'impasse",
    "collectionId": "tdfafccu8qg1y69",
    "collectionName": "maison",
    "created": "2024-04-12 14:33:34.881Z",
    "favori": true,
    "id": "90juvpg2lknq1wd",
    "image": "foret_noire_3Tg9rozMji.jpg",
    "nbChambres": 2,
    "nbSdb": 1,
    "nomMaison": "Forêt Noire",
    "prix": 197000,
    "surface": 96,
    "updated": "2024-05-02 20:45:02.863Z"
  },
  {
    "adresse": "88 boulevard du prince des voleurs",
    "collectionId": "tdfafccu8qg1y69",
    "collectionName": "maison",
    "created": "2024-04-12 14:41:13.109Z",
    "favori": false,
    "id": "o7q2cjuebbe3n91",
    "image": "robin_wood_nIRPretUUX.jpg",
    "nbChambres": 1,
    "nbSdb": 1,
    "nomMaison": "Robin Wood",
    "prix": 360000,
    "surface": 132,
    "updated": "2024-05-02 20:44:41.981Z"
  },
  {
    "adresse": "3 avenue de la Conté",
    "collectionId": "tdfafccu8qg1y69",
    "collectionName": "maison",
    "created": "2024-04-12 19:41:39.611Z",
    "favori": false,
    "id": "zt5mesq3z9b4b7w",
    "image": "toa_heftiba_ww_18_ti24_zo_unsplash_hZ7uORC9Oc.jpg",
    "nbChambres": 1,
    "nbSdb": 1,
    "nomMaison": "Bilbon House",
    "prix": 327000,
    "surface": 160,
    "updated": "2024-05-02 20:44:28.089Z"
  },
  {
    "adresse": "14 boulevard Chester Bennington",
    "collectionId": "tdfafccu8qg1y69",
    "collectionName": "maison",
    "created": "2024-04-12 19:51:39.352Z",
    "favori": false,
    "id": "ld2isfv9206pgmr",
    "image": "castle_of_glass_fbmqhbFIwB.jpg",
    "nbChambres": 4,
    "nbSdb": 2,
    "nomMaison": "Castle of Glass",
    "prix": 880000,
    "surface": 320,
    "updated": "2024-05-02 20:44:10.261Z"
  }
]

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <!-- <MaisonCard v-bind="maisonsListe[0]" /> -->
  <MaisonCard v-for="uneMaison in maisonsListe" :key="uneMaison.nomMaison" v-bind="uneMaison" />
</template>
