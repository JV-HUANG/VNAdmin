<script setup lang="ts">
const name = ref('')
function sayHi() {
  Notify.success(`Hi, ${name.value}!`)
}
function warning() {
  Notify.warning(`How dare you refuse me, ${name.value}.`)
}
definePageMeta({
  icon: 'mdi-smoke-detector-variant-alert',
  title: 'Opinionated Starter',
  drawerIndex: 0,
})
</script>

<template>
  <v-container
    fluid
    class="d-flex align-items-center justify-center fill-height"
  >
    <div class="text-center">
      <v-icon
        icon="custom:vitify-nuxt"
        size="3em"
        color="primary"
        class="mb-4"
      />
      <p>{{ $t('description') }}</p>
      <v-text-field
        v-model="name"
        max-width="300"
        placeholder="Hello World"
        :label="$t('inputLabel')"
        class="mt-8"
      />
      <v-btn :disabled="!name" class="mr-2" color="primary" @click="sayHi">
        {{ $t('confirm') }}
      </v-btn>
      <v-btn :disabled="!name" @click="warning">
        {{ $t('cancel') }}
      </v-btn>
    </div>
  </v-container>
</template>
