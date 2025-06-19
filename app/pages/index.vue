<template>
  <div>
    <h1>Welcome {{ user.name }}</h1>
    <v-btn size="x-large" @click="logout">Logout</v-btn>
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
