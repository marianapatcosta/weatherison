<template>
  <label
    class="toggle-switch"
    :class="{
      'toggle-switch--with-label': label,
      'toggle-switch--disabled': disabled,
    }"
  >
    {{ label }}
    <input
      class="toggle-switch__input"
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      @change="handleToggle"
    />
    <span class="toggle-switch__slider">
      <span
        class="toggle-switch__label"
        :class="{ 'toggle-switch__label--hidden': !checked }"
        >{{ leftLabel }}</span
      >
      <span
        class="toggle-switch__label"
        :class="{ 'toggle-switch__label--hidden': checked }"
        >{{ rightLabel }}</span
      >
    </span>
  </label>
</template>
<script src="./ToggleSwitch.ts"></script>

<style scoped lang="scss" src="./ToggleSwitch.scss"></style>
