<script>
export default {
  name: "changeLanguage.component",
  data(){
    return {
      isEnglish: this.$i18n.locale === 'en',
      currentLanguage: this.$i18n.locale.toUpperCase(),
      dropdownVisible: false,
    };
  },
  methods:{
    toggleDropdown(){
      this.dropdownVisible = !this.dropdownVisible;
    },
    setLanguage(lang) {
      this.$i18n.locale = lang;
      this.currentLanguage = this.$i18n.locale.toUpperCase();
      this.dropdownVisible = false;
    }
  }
}
</script>

<template>
  <div class="toolbar-item">
    <i class="fas fa-globe"></i> {{ currentLanguage }}
    <i class="fas fa-caret-down" @click="toggleDropdown"></i>
    <div v-if="dropdownVisible" class="dropdown-menu">
      <div class="dropdown-item" @click="setLanguage('en')">EN</div>
      <div class="dropdown-item" @click="setLanguage('es')">ES</div>
    </div>
  </div>
</template>

<style scoped>

</style>