<template>
  <div>
    <div class="weather-compare" v-show="!showDetails">
      <div class="weather-compare__spacer">&nbsp;</div>
      <div>
        <div class="weather-compare__header">
          <h1 v-if="selectedLocation" class="weather-compare__heading">
            {{ selectedLocation | location }}
          </h1>
          <div v-else class="weather-compare__heading--placeholder" />
          <div class="weather-compare__nav">
            <Button
              v-for="(time, index) in $t('weatherCompare.timesToSelect')"
              :key="index"
              class="weather-compare__nav--button"
              :label="time"
              :active="activeButton === index"
              @click="onSelectTime(index), (activeButton = index)"
            />
          </div>
        </div>
        <div class="weather-compare__spacer--large">&nbsp;</div>
        <div
          v-if="!isLoading && weatherInfoForSelectedTime.length"
          class="weather-compare__cards"
        >
          <WeatherCard
            v-for="(weatherData, index) in weatherInfoForSelectedTime"
            :key="index + Math.random()"
            :weatherInfo="weatherData.weatherInfo"
            :apiName="weatherData.apiName"
            :isFahrenheit="isFahrenheit"
            :selectedTime="selectedTime"
            :isClickable="true"
            @click="handleCardClick(index)"
          />
        </div>

        <div v-else-if="showNoData" class="weather-compare--not-available">
          <img :src="require(`@/assets/weather-icons/error.svg`)" />
          <div>{{ $t("weatherCard.notAvailable") }}</div>
        </div>
        <div v-else-if="!selectedWeatherApis.length" class="weather-compare__cards">
          <WeatherCardPlaceholder
            v-for="(api, index) in 3"
            :key="index + Math.random()"
          />
        </div>
        <div v-else class="weather-compare__cards">
          <WeatherCardPlaceholder
            v-for="(api, index) in selectedWeatherApis"
            :key="index + Math.random()"
          />
        </div>
      </div>
    </div>
    <div class="weather-compare" v-show="showDetails">
      <div class="weather-compare__spacer">&nbsp;</div>
      <div class="weather-compare__header">
        <a
          class="weather-compare__link"
          role="link"
          tabIndex="0"
          :aria-label="$t('weatherCompare.backAria')"
          @click="handleBackClick"
          @keydown.enter="handleBackClick"
          @keydown.space="handleBackClick"
          ><font-awesome-icon
            icon="chevron-left"
            :style="{ marginRight: '0.3rem' }"
          />{{ $t("weatherCompare.back") }}</a
        >
        <h1 class="weather-compare__heading">
          {{ selectedLocation | location }}
        </h1>
      </div>
      <div class="weather-compare__spacer">&nbsp;</div>
      <div class="weather-compare__cards">
        <div
          v-for="(weather, index) in weatherDetailsData"
          :key="index + Math.random()"
        >
          <div class="weather-compare__date">
            {{ weather.time | date(lang) }}
          </div>
          <WeatherCard
            :weatherInfo="weather"
            :apiName="apiForDetails"
            :isFahrenheit="isFahrenheit"
          />
        </div>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <Modal
        v-if="errorMessage"
        @clear="closeModal"
        :header="$t('modal.errorHeader')"
        :label="$t('modal.ok')"
        :message="errorMessage"
      ></Modal>
    </transition>
  </div>
</template>

<script src="./WeatherCompare.ts"></script>
<style scoped lang="scss" src="./WeatherCompare.scss"></style>
