<template>
  <div class="input">
    <!-- v-model="value" -->
    <input
      class="input__field"
      :class="{ 'input__field--dark': isDarkMode }"
      type="name"
      :value="value"
      :placeholder="placeholder"
      @input="handleInput"
      @keyup.enter="handleBlur"
      ref="inputLocation"
    />
    <span
      class="input__icon"
      :class="{ input__icon: isDarkMode }"
      v-if="value !== ''"
      @click="handleClear"
    >x</span>
  </div>
</template>

<script src="./InputField.ts"></script>

<style scoped lang="scss" src="./InputField.scss"></style>
