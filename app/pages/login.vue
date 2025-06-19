<script setup lang="ts">
const { loggedIn, user, fetch: refreshSession } = useUserSession()
const credentials = reactive({
  email: 'admin@admin.com',
  password: 'iamtheadmin',
})
async function login() {
  $fetch('/api/login', {
    method: 'POST',
    body: credentials
  })
  .then(async () => {
    // Refresh the session on client-side and redirect to the home page
    await refreshSession()
    await navigateTo('/')
  })
  .catch(() => alert('Bad credentials'))
}

const visible = ref(false)
</script>

<template>
  <form @submit.prevent="login">
    <v-responsive class="mx-auto" max-width="320">

      <div class="text-subtitle-1 text-medium-emphasis">Account</div>
      <v-text-field
        density="compact"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        v-model="credentials.email"
        type="email"
        placeholder="Email" />
      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password
        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?</a>
      </div>
      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
        v-model="credentials.password"
        type="password"
        placeholder="Password" />
      <v-btn
        size="x-large"
        type="submit"
        color="blue"
        variant="tonal"
        block>
        Login
      </v-btn>
    </v-responsive>
  </form>
</template>
