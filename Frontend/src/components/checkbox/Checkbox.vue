<template>
  <label class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      :name="name || label"
      :checked="checked"
      :disabled="disabled"
      @change="handleCheck($event)"
    />
    <div
      class="checkbox__toggle"
    >
      <img
        v-if="checked"
        class="checkbox__toggle--tick"
        alt="checkbox tick"
        src="../../assets/icons/tick.svg"
      />
    </div>
    {{ label }}
  </label>
</template>

<script src="./Checkbox.ts"></script>

<style scoped lang="scss" src="./Checkbox.scss"></style>
