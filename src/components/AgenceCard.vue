<script setup lang="ts">
  import type { AgenceResponse } from '@/pocketbase-types'

  defineProps<AgenceResponse>()
</script>
<template>
    <div class="w-[352px] h-[168px]">
        <div
          class="w-[352px] h-[168px] absolute left-[280.25px] top-[-82.75px] rounded-lg bg-white border-[1.5px] border-indigo-100"
        ></div>
        <p
          class="w-[137px] h-7 absolute left-[296px] top-[-63px] text-2xl font-bold text-left text-black"
        >
          <!-- Celli -->
          {{ nom }}
        </p>
        <p
          class="w-[220px] h-7 absolute left-[296px] top-[-26px] text-4xl font-bold text-left text-black"
        >
          <!-- Gaston -->
          {{ prenom }}
        </p>
        <svg
          width="110"
          height="2"
          viewBox="0 0 110 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-[295.25px] top-[29.25px]"
          preserveAspectRatio="xMidYMid meet"
        >
        <line y1="1.25" x2="110" y2="1.25" stroke="#E0E7FF" stroke-width="1.5"></line>
        </svg>
        <p class="w-[184px] h-7 absolute left-[296px] top-[41px] text-base text-left text-black">
          <!-- gastoncelli@outlook.fr -->
          {{ email }}
        </p>
    </div>
</template>