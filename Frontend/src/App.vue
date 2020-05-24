<template>
  <div class="app" :class="{ 'app--dark': isDarkMode }">
    <Header @user-preferences="toggleUserPreferences" ref="header"></Header>
    <main role="main">
      <router-view />
    </main>
    <div ref="userPreferences">
      <UserPreferences
        class="app__user-preferences"
        v-show="isUserPreferencesVisible"
      ></UserPreferences>
    </div>
  </div>
</template>

<script src="./App.ts"></script>

<style lang="scss" src="./App.scss"></style>
