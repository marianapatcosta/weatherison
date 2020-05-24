<template>
  <div class="user-preferences" :class="{ 'user-preferences--dark': isDarkMode }">
    <div class="user-preferences__title">Configurations</div>
    <div class="user-preferences__toggle">
      <ToggleSwitch
        :checked="false"
        :disabled="false"
        :label="$t('preferences.temperatureUnit')"
        :leftLabel="$t('preferences.fahrenheit')"
        :rightLabel="$t('preferences.celsius')"
        @toggle="toggleDegrees"
      ></ToggleSwitch>
      <ToggleSwitch
        :checked="false"
        :disabled="false"
        :label="$t('preferences.language')"
        :leftLabel="$t('preferences.english')"
        :rightLabel="$t('preferences.portuguese')"
        @toggle="toggleLanguage"
      ></ToggleSwitch>
      <!-- <ToggleSwitch
        :checked="false"
        :disabled="false"
        :label="$t('preferences.darkMode')"
        :leftLabel="$t('preferences.on')"
        :rightLabel="$t('preferences.off')"
        @toggle="toggleDarkMode"
      ></ToggleSwitch> -->
    </div>
    <div class="user-preferences__apis">
      <div class="user-preferences__apis--title">weather APIs</div>
      <Checkbox
        v-for="(api, index) in weatherApis"
        :key="index"
        :checked="api.selected"
        :label="api.name"
        @click="handleApiSelection($event, index)"
      ></Checkbox>
    </div>

    <transition name="fade" mode="out-in">
      <Modal
        v-if="errorMessage"
        @clear="closeModal"
        :header="$t('modal.errorheader')"
        :label="$t('modal.ok')"
        :message="errorMessage"
      ></Modal>
    </transition>
  </div>
</template>
<script src="./UserPreferences.ts"></script>

<style scoped lang="scss" src="./UserPreferences.scss"></style>
