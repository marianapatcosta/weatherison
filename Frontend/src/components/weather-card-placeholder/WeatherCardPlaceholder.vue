<template>
  <div class="card-placeholder">
    <div class="card-placeholder__content">
      <div class="card-placeholder__header">
        <div class="card-placeholder__weather-main">
          <div class="card-placeholder__weather-main--icon" />
          <div class="card-placeholder__weather-main--temperature">
            <div class="card-placeholder__weather-main--current-temperature" />
            <div class="card-placeholder__weather-main--apparent-temperature" />
          </div>
        </div>
        <div class="card-placeholder__weather-description" />
      </div>
      <div class="card-placeholder__weather-details">
        <div v-for="n in 2" :key="n + Math.random()">
          <div
            v-for="n in 3"
            :key="n + Math.random()"
            class="card-placeholder__weather-details-wrapper"
          >
            <div class="card-placeholder__weather-details-icon" />
            <div class="card-placeholder__weather-details-text" />
          </div>
        </div>
      </div>
    </div>
    <div class="card-placeholder__footer">
      <span class="card-placeholder__footer--text" />
      <div class="card-placeholder__footer--logo" />
    </div>
  </div>
</template>

<script src="./WeatherCardPlaceholder.ts"></script>

<style scoped lang="scss" src="./WeatherCardPlaceholder.scss"></style>
