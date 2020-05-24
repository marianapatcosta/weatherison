<template>
  <div class="modal">
    <div class="modal__overlay">
      <div class="modal__content" :class="{ 'modal__content--dark': isDarkMode }" ref="modal">
        <header class="modal__header">
          <h4 class="modal__header--title">{{ header }}</h4>
          <font-awesome-icon icon="times" class="modal__header--close" @click="$emit('clear')" />
        </header>
        <main>
          <p class="modal__body">{{ message }}</p>
        </main>
        <footer class="modal__footer">
          <Button
            ref="focusedButton"
            type="button"
            :label="label"
            :small="true"
            @click="$emit('clear')"
          />
        </footer>
      </div>
    </div>
  </div>
</template>

<script src="./Modal.ts"></script>

<style scoped lang="scss" src="./Modal.scss"></style>
