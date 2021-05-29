<template>
  <div>
    <header class="header">
      <div class="header__items">
        <span
          role="button"
          tabindex="0"
          :aria-label="$t('header.toggleMenu')"
          ref="hamburgerMenu"
          class="header__menu-icon"
          @keydown.enter="toggleIsMenuOpened"
          @keydown.space="toggleIsMenuOpened"
          @keydown.escape="isMenuOpened = false"
          @click="toggleIsMenuOpened"
        >
          <font-awesome-icon icon="bars" />
        </span>
        <h1 class="header__title" translate="no">
          <span>WEA</span>
          <font-awesome-icon icon="umbrella" />
          <span>HER</span>
          <font-awesome-icon icon="bolt" />
          <span>S</span>
          <font-awesome-icon icon="sun" :style="{ color: '#f5ce42' }" />
          <span>N</span>
        </h1>
      </div>
      <div
        ref="sideMenu"
        class="header__side-menu"
        :class="{ 'header__side-menu--opened': isMenuOpened }"
      >
        <div class="header__items">
          <InputField
            v-model="location"
            @blur="defineLocation"
            @clear="clearLocation"
            class="header__input"
            :placeholder="$t('header.locationPlaceholder')"
          />
          <div class="header__tooltip-wrapper">
            <Button
              :aria-label="$t('header.yourLocation')"
              type="button"
              icon="search-location"
              @mouseover.native="showTooltip = $t('header.yourLocation')"
              @mouseleave.native="showTooltip = ''"
              @click="defineCurrentPosition"
            >
            </Button>
            <Tooltip
              class="header__tooltip"
              v-show="showTooltip === $t('header.yourLocation')"
              :label="$t('header.yourLocation')"
            />
          </div>
        </div>
        <UserPreferences class="header__settings" :apis="apis" />
      </div>
      <div class="header__items header__content">
        <InputField
          v-model="location"
          @blur="defineLocation"
          @clear="clearLocation"
          class="header__input"
          :placeholder="$t('header.locationPlaceholder')"
        />
        <div class="header__tooltip-wrapper">
          <Button
            @mouseover.native="showTooltip = $t('header.yourLocation')"
            @mouseleave.native="showTooltip = ''"
            type="button"
            icon="search-location"
            @click="defineCurrentPosition"
          >
          </Button>
          <Tooltip
            class="header__tooltip"
            v-show="showTooltip === $t('header.yourLocation')"
            :label="$t('header.yourLocation')"
          />
        </div>
        <span
          role="button"
          tabindex="0"
          :aria-label="$t('header.togglePreferences')"
          class="header__preferences-icon"
          ref="kebabMenu"
          @keydown.enter="toggleIsUserPreferencesOpened"
          @keydown.space="toggleIsUserPreferencesOpened"
          @keydown.escape="isUserPreferencesOpened = false"
          @click="toggleIsUserPreferencesOpened"
        >
          <font-awesome-icon icon="ellipsis-v" />
        </span>
      </div>
    </header>
    <transition name="fade" mode="out-in">
      <Modal
        v-if="errorMessage"
        @clear="closeModal"
        :header="$t('modal.errorHeader')"
        :label="$t('modal.ok')"
        :message="errorMessage"
      />
    </transition>
    <transition name="fade" mode="out-in">
      <div ref="userPreferences" v-show="isUserPreferencesOpened">
        <UserPreferences class="header__user-preferences" :apis="apis" />
      </div>
    </transition>
  </div>
</template>

<script src="./Header.ts"></script>

<style scoped lang="scss" src="./Header.scss"></style>
