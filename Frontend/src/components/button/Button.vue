<template>
  <button
    class="button"
    :class="{
      'button--small': small,
      'button--active': active,
      'button--icon': icon,
    }"
    :type="type"
    :disabled="disabled"
    @click="handleOnClick"
  >
    <font-awesome-icon v-if="icon" :icon="icon" />
    {{ label }}
  </button>
</template>
<script src="./Button.ts"></script>

<style scoped lang="scss" src="./Button.scss"></style>
