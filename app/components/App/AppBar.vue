<script setup lang="ts">
import { mergeProps } from 'vue'

import FullScreen from './AppFullScreen.vue'
import Locale from './AppLocale.vue'

const theme = useTheme()
const drawer = useState('drawer')
const route = useRoute()
const breadcrumbs = computed(() => {
  return route!.matched
    .filter((item) => item.meta && item.meta.title)
    .map((r) => ({
      title: r.meta.title!,
      disabled: r.path === route.path || false,
      to: r.path,
    }))
})
const isDark = computed({
  get() {
    return theme.global.name.value === 'dark' ? true : false
  },
  set(v) {
    theme.global.name.value = v ? 'dark' : 'light'
  },
})
const { loggedIn, clear, user } = useUserSession()
</script>

<template>
  <v-app-bar elevate-on-scroll flat>
    <v-btn rounded="0" variant="text" elevation="1" fab small style="z-index: 1" @click="drawer = !drawer">
      <v-icon variant="text">
        {{ drawer ? 'mdi-menu-open' : 'mdi-menu-close' }}
      </v-icon>
    </v-btn>
    <v-breadcrumbs :items="breadcrumbs" />
    <v-spacer />
    <div id="app-bar" />
    <FullScreen />
    <Locale />
    <v-btn
      icon
      href="https://github.com/JV-HUANG/VNAdmin"
      size="small"
      class="ml-2"
      target="_blank"
    >
      <v-icon size="30" icon="mdi-github" />
    </v-btn>
    <v-switch
      v-model="isDark"
      color=""
      hide-details
      density="compact"
      inset
      false-icon="mdi-white-balance-sunny"
      true-icon="mdi-weather-night"
      class="opacity-80"
    />
    <v-menu location="bottom">
      <template #activator="{ props: menu }">
        <v-tooltip location="bottom">
          <template #activator="{ props: tooltip }">
            <v-btn icon v-bind="mergeProps(menu, tooltip)" class="ml-1">
              <v-icon v-if="!loggedIn" icon="mdi-account-circle" size="36" />
              <v-avatar v-else color="primary" size="36">
                <v-img :src="user?.avatar_url" />
              </v-avatar>
            </v-btn>
          </template>
          <span>{{ loggedIn ? user!.login : 'User' }}</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item
          v-if="!loggedIn"
          title="Login"
          prepend-icon="mdi-github"
          href="/api/auth/github"
        />
        <v-list-item
          v-else
          title="Logout"
          prepend-icon="mdi-logout"
          @click="clear"
        />
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
