<template>
  <div class="toggle-switch__wrapper">
    <label
      class="toggle-switch"
      :class="{ 'toggle-switch--with-label': label }"
    >
      <span
        v-if="label"
        class="toggle-switch__label"
        :class="{ 'toggle-switch__label--disabled': disabled }"
        >{{ label }}</span
      >
      <input
        class="toggle-switch__input"
        type="checkbox"
        :checked="checked"
        :disabled="disabled"
        @click="handleToggle"
      />
      <span
        class="toggle-switch__slider"
        :class="{
          'toggle-switch__slider--disabled': disabled,
          'toggle-switch__slider--dark': isDarkMode
        }"
      >
        <span
          class="toggle-switch__label toggle-switch__label-left"
          :class="{ 'toggle-switch__label--disabled': disabled }"
          >{{ leftLabel }}</span
        >

        <span
          class="toggle-switch__label toggle-switch__label-right"
          :class="{ 'toggle-switch__label--disabled': disabled }"
          >{{ rightLabel }}</span
        >
      </span>
    </label>
  </div>
</template>
<script src="./ToggleSwitch.ts"></script>

<style scoped lang="scss" src="./ToggleSwitch.scss"></style>
