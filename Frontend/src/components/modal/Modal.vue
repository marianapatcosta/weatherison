<template>
  <div class="modal">
    <div class="modal__overlay">
      <div
        class="modal__content"
        ref="modal"
      >
        <header class="modal__header">
          <h4 class="modal__header--title">{{ header }}</h4>
          <span
            class="modal__header--close"
            role="button"
            tabIndex="0"
            @click="$emit('clear')"
            @keydown="$emit('clear')"
            ><font-awesome-icon icon="times"
          /></span>
        </header>
        <main>
          <p class="modal__body">{{ message }}</p>
        </main>
        <footer class="modal__footer">
          <Button
            ref="button"
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
