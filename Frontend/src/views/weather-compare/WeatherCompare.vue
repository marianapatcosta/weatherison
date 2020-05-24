<template>
  <div class="weather-compare">
    <div class="weather-compare__spacer">&nbsp;</div>
    <div class="weather-compare__header">
      <span class="weather-compare__nav">
        <h4 class="weather-compare__heading">Forecast:</h4>
        <Button
          v-for="(time, index) in $t('weatherCompare.timesToSelect')"
          :key="index"
          class="weather-compare__nav--button"
          :label="time"
          :active="activeButton === index"
          @click="onSelectTime(time), activeButton = index"
        />
      </span>
    </div>
    <WeatherCardList v-if="!isLoading" :weatherResponses="weatherInfoForSelectedTime"></WeatherCardList>
    <transition name="fade" mode="out-in">
      <Modal
        v-if="errorMessage"
        @clear="closeModal"
        :header="$t('modal.errorHeader')"
        :label="$t('modal.ok')"
        :message="errorMessage"
      ></Modal>
    </transition>
    <transition name="fade" mode="out-in">
      <LoaderSpinner v-if="isLoading"></LoaderSpinner>
    </transition>
  </div>
</template>

<script src="./WeatherCompare.ts"></script>
<style scoped lang="scss" src="./WeatherCompare.scss"></style>
