<template>
  <div class="app">
    <Header />
    <main class="app__main" role="main">
      <!--  <router-view /> -->
      <WeatherCompare />
    </main>
    <footer class="app__footer">
      <p>
        {{ `©2021 - ${$t("footer.developedBy")} ${$t("footer.authorName")}` }}
      </p>
      <a
        class="app__footer-link"
        :href="$t('footer.github')"
        :aria-label="`go to ${$t('footer.authorName')}'s Github`"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <font-awesome-icon
          :icon="['fab', 'github']"
          :style="{ color: '#555555' }"
        />
      </a>
      <a
        class="app__footer-link"
        :href="$t('footer.linkedin')"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <font-awesome-icon
          :icon="['fab', 'linkedin']"
          :style="{ color: '#555555' }"
        />
      </a>
    </footer>
  </div>
</template>

<script src="./App.ts"></script>

<style lang="scss" src="./App.scss"></style>
