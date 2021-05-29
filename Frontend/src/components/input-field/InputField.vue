<template>
  <div class="input" >
    <!-- v-model="value" -->
    <input
      class="input__field"
      type="name"
      :value="value"
      :placeholder="placeholder"
      @input="handleInput"
      @keydown.enter="handleBlur"
      ref="inputLocation"
    />
    <span
      v-if="value"
      class="input__icon"
      @click="handleClear"
      >x</span
    >
  </div>
</template>

<script src="./InputField.ts"></script>

<style scoped lang="scss" src="./InputField.scss"></style>
