<template>
  <button
    class="button"
    :class="{
      'button--dark': isDarkMode,
      'button--small': small,
      'button--active': active,
      'button--icon': icon
    }"
    :type="type"
    :disabled="disabled"
    @click="handleOnClick"
    ref="button"
  >
    <font-awesome-icon v-if="icon" :icon="icon" class="button__icon" />
    {{ label }}
  </button>
</template>
<script src="./Button.ts"></script>

<style scoped lang="scss" src="./Button.scss"></style>
