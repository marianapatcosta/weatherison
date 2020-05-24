<template>
  <div class="card-list" :class="{ 'card-list--dark': isDarkMode }">
    <WeatherCard
      v-for="(weatherResponse, index) in weatherResponses"
      :key="index"
      :weatherInfo="weatherResponse.weatherInfo"
      :apiName="weatherResponse.apiName"
      :isFahrenheit="isFahrenheit"
    ></WeatherCard>
  </div>
</template>

<script src="./WeatherCardList.ts"></script>

<style scoped lang="scss" src="./WeatherCardList.scss"></style>
