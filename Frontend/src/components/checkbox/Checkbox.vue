<template>
  <div class="checkbox">
    <div
      class="checkbox__label"
      :class="{ 'checkbox__label--disabled': disabled }"
      @click="handleCheck"
    >
      {{ label }}
    </div>
    <div
      class="checkbox__toggle"
      :class="{
        'checkbox__toggle--disabled': disabled,
        'checkbox__toggle--dark': isDarkMode
      }"
      @click="handleCheck"
    >
      <img
        v-if="checked"
        class="checkbox__toggle--tick"
        :class="{ 'checkbox__toggle--tick--disabled': disabled }"
        alt="checkbox tick"
        src="../../assets/icons/tick.svg"
      />
    </div>
  </div>
</template>

<script src="./Checkbox.ts"></script>

<style scoped lang="scss" src="./Checkbox.scss"></style>
