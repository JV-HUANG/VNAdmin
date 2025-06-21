<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <v-btn @click="toggle">
    <v-icon>
      {{ isFullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen' }}
    </v-icon>
  </v-btn>
</template>
