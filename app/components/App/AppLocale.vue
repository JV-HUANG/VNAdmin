
<template>
    <v-icon> mdi-transmission-tower-export </v-icon>
    <!-- {{ $t('hello', { name: 'vue-i18n' }) }} -->
    <form>
    <!-- <label for="locale-select">{{ $t('language') }}: </label> -->
    <select style="background-color: none;border-radius: 4px; padding: 2px" id="locale-select" v-model="$i18n.locale">
      <option value="en">English</option>
      <option value="zh">简体中文</option>
    </select>
  </form>
</template>
