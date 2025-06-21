<template>
  <div>
    <p class="text-h3">{{ $t('hello') }} {{ user.name }}</p>
    <v-btn size="x-large" prepend-icon="mdi-logout" @click="logout">{{ $t('logout') }}</v-btn>
  </div>
</template>
<script setup lang="ts">
// definePageMeta({
//   redirect: 'homepage',
// })
definePageMeta({
  icon: 'mdi-home',
  title: 'HOME',
  drawerIndex: 0,
  middleware: ['authenticated'],
})

const { user, clear: clearSession } = useUserSession()

async function logout() {
  await clearSession()
  await navigateTo('/login')
}
</script>
