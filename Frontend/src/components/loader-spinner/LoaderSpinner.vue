<template>
  <div class="loader__overlay" :class="{ 'loader__overlay--dark': isDarkMode }">
    <div
      class="loader__spinner"
      :class="{ 'loader__spinner--dark': isDarkMode }"
    ></div>
  </div>
</template>

<script src="./LoaderSpinner.ts"></script>

<style scoped lang="scss" src="./LoaderSpinner.scss"></style>
