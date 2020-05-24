<template>
  <header class="header" :class="{ 'header--dark': isDarkMode }">
    <!--       <div class="header__up"> -->
    <h4 class="header__up--title">
      <!-- COMPAREATHER/ -->
      <span>WEA</span>
      <font-awesome-icon icon="umbrella" />
      <span>HER</span>
      <font-awesome-icon icon="bolt" />
      <span>S</span>
      <font-awesome-icon icon="sun" />
      <span>N</span>
    </h4>
    <div class="header__up--location">{{ selectedLocation | location }}</div>
    <!--    </div> 
    <div class="header__down">-->
    <InputField
      v-model="location"
      @blur="defineLocation"
      @clear="clearLocation"
      class="header__down--input"
      :placeholder="$t('header.locationPlaceholder')"
    ></InputField>
    <!--  <font-awesome-icon :icon="false ? ['far', 'star'] : 'star'" /> -->
    <Button
      :label="$t('header.yourLocation')"
      type="button"
      icon="search-location"
      @click="defineCurrentPosition"
    />
    <!-- <span v-if="hover">{{$t('header.yourLocation')}}</span>
        <Button
          @mouseover.native="hover = true"
          @mouseleave.native="hover = false"
          type="button"
          icon="map-marker-alt"
          @click="defineCurrentPosition"
    />-->
    <!--    <select class="header__down--selection" @change="fetchFavouriteLocation()">
          <option
            class="header__down--selection-placeholder"
            value
            disabled
            selected
          >Favourite locations</option>
          <option value="Coimbra, Portugal">Coimbra, Portugal</option>
    </select>-->
    <span class="header__preferences-icon" ref="kebabMenuIcon" @click="handleUserPreferences">
      <font-awesome-icon icon="ellipsis-v" />
    </span>
    <!--     </div> -->
  </header>
</template>

<script src="./Header.ts"></script>

<style scoped lang="scss" src="./Header.scss"></style>
