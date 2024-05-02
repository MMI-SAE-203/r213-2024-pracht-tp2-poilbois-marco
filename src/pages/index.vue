<script setup lang="ts">
const maisonListe: {
    adresse: string;
    collectionId: string;
    collectionName: string;
    created: string;
    favori: boolean;
    id: string;
    images: string;
    nbChambres: number;
    nbSdb: number;
    nomMaison: string;
    prix: number;
    surface: number;
    updated: string;
}[] = [
  {
    "adresse": "24 avenue du patriote",
    "collectionId": "tdfafccu8qg1y69",
    "collectionName": "maison",
    "created": "2024-04-12 14:28:18.166Z",
    "favori": true,
    "id": "aa7hxq7mow9w9og",
    "images": "maison_blanche_4o7KTwSrKI.jpg",
    "nbChambres": 2,
    "nbSdb": 1,
    "nomMaison": "Maison Blanche",
    "prix": 220000,
    "surface": 90,
    "updated": "2024-05-02 06:39:32.758Z"
  },
  {
    "adresse": "2 rue de l'impasse",
    "collectionId": "tdfafccu8qg1y69",
    "collectionName": "maison",
    "created": "2024-04-12 14:33:34.881Z",
    "favori": true,
    "id": "90juvpg2lknq1wd",
    "images": "foret_noire_3Tg9rozMji.jpg",
    "nbChambres": 2,
    "nbSdb": 1,
    "nomMaison": "Forêt Noire",
    "prix": 197000,
    "surface": 96,
    "updated": "2024-05-02 06:37:27.304Z"
  },
  {
    "adresse": "88 boulevard du prince des voleurs",
    "collectionId": "tdfafccu8qg1y69",
    "collectionName": "maison",
    "created": "2024-04-12 14:41:13.109Z",
    "favori": false,
    "id": "o7q2cjuebbe3n91",
    "images": "robin_wood_nIRPretUUX.jpg",
    "nbChambres": 1,
    "nbSdb": 1,
    "nomMaison": "Robin Wood",
    "prix": 360000,
    "surface": 132,
    "updated": "2024-05-02 06:37:22.523Z"
  },
  {
    "adresse": "3 avenue de la Conté",
    "collectionId": "tdfafccu8qg1y69",
    "collectionName": "maison",
    "created": "2024-04-12 19:41:39.611Z",
    "favori": false,
    "id": "zt5mesq3z9b4b7w",
    "images": "toa_heftiba_ww_18_ti24_zo_unsplash_hZ7uORC9Oc.jpg",
    "nbChambres": 1,
    "nbSdb": 1,
    "nomMaison": "Bilbon House",
    "prix": 327000,
    "surface": 160,
    "updated": "2024-05-02 06:37:18.056Z"
  },
  {
    "adresse": "14 boulevard Chester Bennington",
    "collectionId": "tdfafccu8qg1y69",
    "collectionName": "maison",
    "created": "2024-04-12 19:51:39.352Z",
    "favori": false,
    "id": "ld2isfv9206pgmr",
    "images": "castle_of_glass_fbmqhbFIwB.jpg",
    "nbChambres": 4,
    "nbSdb": 2,
    "nomMaison": "Castle of Glass",
    "prix": 880000,
    "surface": 320,
    "updated": "2024-05-02 06:37:05.856Z"
  }
]

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
</template>
