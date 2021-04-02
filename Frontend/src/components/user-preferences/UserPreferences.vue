<template>
  <div class="user-preferences">
    <div class="user-preferences__title">
      {{ $t("preferences.settings") }}
    </div>
    <div class="user-preferences__toggle">
      <ToggleSwitch
        :checked="isFahrenheit"
        class="user-preferences__item"
        :label="$t('preferences.temperatureUnit')"
        :leftLabel="$t('preferences.celsius')"
        :rightLabel="$t('preferences.fahrenheit')"
        @toggle="toggleDegrees"
      />
      <ToggleSwitch
        :checked="isPt"
        class="user-preferences__item"
        :label="$t('preferences.language')"
        :leftLabel="$t('preferences.english')"
        :rightLabel="$t('preferences.portuguese')"
        @toggle="toggleLanguage"
      />
    </div>
    <div class="user-preferences__apis">
      <div class="user-preferences__apis-title">
        {{ $t("preferences.weatherSources") }}
      </div>
      <div v-if="!!weatherApis.length">
        <Checkbox
          v-for="(api, index) in weatherApis"
          :key="index"
          class="user-preferences__item"
          :checked="api.selected"
          :label="api.name"
          @change="handleApiSelection($event, index)"
        />
      </div>
      <div class="user-preferences__no-apis" v-else>
        {{ $t("preferences.noApis") }}
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
<script src="./UserPreferences.ts"></script>

<style scoped lang="scss" src="./UserPreferences.scss"></style>
