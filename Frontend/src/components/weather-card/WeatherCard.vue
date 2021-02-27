<template>
  <div
    class="card"
    :class="{'card--clickable': isClickable}"
    :role="isClickable ? 'button' : ''"
    :tabIndex="isClickable ? '0' : '-1'"
    :aria-label="isClickable ? $t('card.clickCard', {api: apiName}) : ''"
    @click="isClickable ? handleOnClick() : () => null"
    @keydown.enter="isClickable ? handleOnClick() : () => null"
    @keydown.space="isClickable ? handleOnClick() : () => null"
  >
    <div class="card__content" v-if="weatherInfo">
      <div class="card__header">
        <div class="card__weather-main">
          <img
            class="card__weather-main--icon"
            :src="attributeIcon(apiName, weatherInfo.icon)"
            alt="weather icon"
          />
          <div
            v-if="selectedTime === 'current'"
            class="card__weather-main--temperature"
          >
            <div class="card__weather-main--current-temperature">
              {{ weatherInfo.temperature | temperatureUnits(isFahrenheit) }}
            </div>
            <div
              class="card__weather-main--apparent-temperature card__tooltip-wrapper"
              @mouseover="showTooltip = $t('weatherCard.apparentTemp')"
              @mouseleave="showTooltip = ''"
            >
              <font-awesome-icon icon="thermometer-half" />
              <b>
                <sub>&nbsp;{{ $t("weatherCard.app") }}</sub>
              </b>
              {{
                weatherInfo.apparentTemperature | temperatureUnits(isFahrenheit)
              }}
              <Tooltip
                :label="$t('weatherCard.apparentTemp')"
                v-show="showTooltip === $t('weatherCard.apparentTemp')"
              />
            </div>
          </div>
          <div v-else class="card__weather-main--temperature">
            <div
              class="card__tooltip-wrapper card__tooltip-wrapper--margin"
              @mouseover="showTooltip = $t('weatherCard.tMin')"
              @mouseleave="showTooltip = ''"
            >
              <font-awesome-icon
                icon="temperature-low"
                :style="{ color: 'blue', opacity: 0.7 }"
              />
              {{ weatherInfo.temperatureMin | temperatureUnits(isFahrenheit) }}
              <Tooltip
                :label="$t('weatherCard.tMin')"
                v-show="showTooltip === $t('weatherCard.tMin')"
              />
            </div>
            <div
              class="card__tooltip-wrapper"
              @mouseover="showTooltip = $t('weatherCard.tMax')"
              @mouseleave="showTooltip = ''"
            >
              <font-awesome-icon
                icon="temperature-high"
                :style="{ color: '#b33030', opacity: 0.7 }"
              />
              {{ weatherInfo.temperatureMax | temperatureUnits(isFahrenheit) }}
              <Tooltip
                :label="$t('weatherCard.tMax')"
                v-show="showTooltip === $t('weatherCard.tMax')"
              />
            </div>
          </div>
        </div>
        <div class="card__weather-description">
          {{ description(weatherInfo.description) }}
        </div>
      </div>
      <div class="card__weather-details">
        <div>
          <div
            class="card__tooltip-wrapper"
            @mouseover="showTooltip = $t('weatherCard.wind')"
            @mouseleave="showTooltip = ''"
          >
            <font-awesome-icon icon="wind" />
            {{ weatherInfo.windSpeed | windUnits }}
            {{ weatherInfo.windDirection || "-" }}
            <Tooltip
              :label="$t('weatherCard.wind')"
              v-show="showTooltip === $t('weatherCard.wind')"
            />
          </div>
          <div
            class="card__tooltip-wrapper"
            @mouseover="showTooltip = $t('weatherCard.uv')"
            @mouseleave="showTooltip = ''"
          >
            <span class="fa-layers fa-fw">
              <font-awesome-icon icon="certificate" />
              <span
                class="fa-layers-text fa-inverse"
                style="font-size: 45%; font-weight: bold"
                >UV</span
              >
            </span>
            {{ weatherInfo.uvIndex | uvValue }}
            <Tooltip
              :label="$t('weatherCard.uv')"
              v-show="showTooltip === $t('weatherCard.uv')"
            />
          </div>
          <div
            class="card__tooltip-wrapper"
            @mouseover="showTooltip = $t('weatherCard.moon')"
            @mouseleave="showTooltip = ''"
          >
            <font-awesome-icon icon="moon" />
            {{ weatherInfo.moonPhase | moonPhase }}
            <Tooltip
              :label="$t('weatherCard.moon')"
              v-show="showTooltip === $t('weatherCard.moon')"
            />
          </div>
        </div>
        <div>
          <div
            class="card__tooltip-wrapper"
            @mouseover="showTooltip = $t('weatherCard.humidity')"
            @mouseleave="showTooltip = ''"
          >
            <font-awesome-icon icon="tint" />
            {{ weatherInfo.humidity | relativeUnits }}
            <Tooltip
              :label="$t('weatherCard.humidity')"
              v-show="showTooltip === $t('weatherCard.humidity')"
            />
          </div>
          <div
            class="card__tooltip-wrapper"
            @mouseover="showTooltip = $t('weatherCard.precipIntensity')"
            @mouseleave="showTooltip = ''"
          >
            <font-awesome-icon icon="cloud-rain" />
            {{ weatherInfo.precipitationIntensity | relativeUnits }}
            <Tooltip
              class="card__tooltip"
              :label="$t('weatherCard.precipIntensity')"
              v-show="showTooltip === $t('weatherCard.precipIntensity')"
            />
          </div>
          <div
            class="card__tooltip-wrapper"
            @mouseover="showTooltip = $t('weatherCard.precipProbability')"
            @mouseleave="showTooltip = ''"
          >
            <font-awesome-icon icon="umbrella" />
            <b>?</b>
            {{ weatherInfo.precipitationProbability | relativeUnits }}
            <Tooltip
              class="card__tooltip"
              :label="$t('weatherCard.precipProbability')"
              v-show="showTooltip === $t('weatherCard.precipProbability')"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="card__content card__content--not-available" v-else>
      <img :src="require(`@/assets/weather-icons/error.svg`)" />
      <div>{{ $t("weatherCard.notAvailable") }}</div>
    </div>
    <div class="card__footer">
      <span class="card__footer--text">{{ $t("weatherCard.source") }}</span>
      <div
        class="card__tooltip-wrapper card__tooltip-wrapper--footer"
        @mouseover="showTooltip = apiName"
        @mouseleave="showTooltip = ''"
      >
        <img
          class="card__footer--logo"
          :src="require(`@/assets/api-logos/${apiName}.png`)"
          :alt="`${apiName} logo`"
        />
        <Tooltip
          class="card__tooltip"
          :label="apiName.replace(/[-_.]/g, '')"
          v-show="showTooltip === apiName"
        />
      </div>
    </div>
  </div>
</template>

<script src="./WeatherCard.ts"></script>

<style scoped lang="scss" src="./WeatherCard.scss"></style>
