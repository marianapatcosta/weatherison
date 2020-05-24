<template>
  <div class="card" :class="{ 'card--dark': isDarkMode }">
    <div class="card__content" v-if="weatherInfo">
      <div class="card__header">
        <div class="card__weather-main">
          <img
            v-if="apiName === 'open-weather'"
            class="card__weather-main--icon"
            :src="attributeIcon(apiName, weatherInfo.icon)"
            alt="weather icon"
          />
          <img
            v-else
            class="card__weather-main--icon"
            :src="attributeIcon(apiName, weatherInfo.icon)"
            alt="weather icon"
          />
          <div v-if="selectedTime === 'current'" class="card__weather-main--temperature">
            <div
              class="card__weather-main--current-temperature"
            >{{ weatherInfo.temperature | temperatureUnits(isFahrenheit) }}</div>
            <div class="card__weather-main--apparent-temperature">
              <font-awesome-icon icon="thermometer-half" />
              <b>
                <sub>&nbsp;app</sub>
              </b>
              {{ weatherInfo.apparentTemperature | temperatureUnits(isFahrenheit) }}
            </div>
          </div>
          <div v-else class="card__weather-main--temperature">
            <div>
              <font-awesome-icon icon="temperature-low" />
              {{ weatherInfo.temperatureMin | temperatureUnits(isFahrenheit) }}
            </div>
            <div>
              <font-awesome-icon icon="temperature-high" />
              {{ weatherInfo.temperatureMax | temperatureUnits(isFahrenheit) }}
            </div>
          </div>
        </div>
        <div class="card__weather-description">{{ description(weatherInfo.description) }}</div>
      </div>
      <div class="card__weather-details">
        <div>
          <div>
            <font-awesome-icon icon="wind" />
            {{ weatherInfo.windSpeed | windUnits }} {{ weatherInfo.windDirection || '-'}}
          </div>
          <div>
            <span class="fa-layers fa-fw">
              <font-awesome-icon icon="certificate" />
              <span class="fa-layers-text fa-inverse" style="font-size:45%;font-weight:bold">UV</span>
            </span>
            {{ weatherInfo.uvIndex }}
          </div>
          <div v-if="selectedTime !== 'current'">moon {{ weatherInfo.moonPhase || '-'}}</div>
        </div>
        <div>
          <div>
            <font-awesome-icon icon="tint" />
            {{ weatherInfo.humidity | relativeUnits }}
          </div>
          <div>
            <font-awesome-icon icon="cloud-rain" />
            {{ weatherInfo.precipitationIntensity | relativeUnits }}
          </div>
          <div v-if="selectedTime !== 'current'">
            <font-awesome-icon icon="umbrella" />
            <b>?</b>
            {{ weatherInfo.precipitationProbability | relativeUnits }}
          </div>
        </div>
      </div>
      <div class="card__footer">
        <span class="card__footer--text">source</span>
        <img
          class="card__footer--logo"
          :src="require(`../../assets/api-logos/${apiName}.png`)"
          alt="api logo"
        />
      </div>
    </div>
    <div v-else>
      Not available
      <div class="card__footer">
        <span class="card__footer--text">source</span>
        <img
          class="card__footer--logo"
          :src="require(`../../assets/api-logos/${apiName}.png`)"
          alt="api logo"
        />
      </div>
    </div>
  </div>
</template>

<script src="./WeatherCard.ts"></script>

<style scoped lang="scss" src="./WeatherCard.scss"></style>
