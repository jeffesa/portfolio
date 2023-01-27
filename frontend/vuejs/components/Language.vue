<template>
  <div class="language absolute flex text-xs font-normal z-10">
      <span 
        class="pr-2"
        :class="language === 'pt' ? 'language--active' : ''"
        @click="setLanguage('pt')"
      >
        PT
      </span>
      <span 
        :class="language === 'en' ? 'language--active' : ''"
        @click="setLanguage('en')"
      >
        EN
      </span>
    </div>
</template>

<script lang="ts">
  export default {
    props: {
      language: {
        type: String,
        required: true
      }
    },

    methods: {
      setLanguage(lang: string): any {
        this.language = lang
        this.store = lang === 'pt' ? this.$store.state.data.portfolio.language[0].pt : this.$store.state.data.portfolio.language[0].en
      }
    }
  }
</script>

<style lang="scss" scoped>
  .language {
    top: 24px;
    right: 24px;
    color: #878788;
    cursor: pointer;

    @screen lg {
      top: 22px;
      right: 40px;
    }

    @screen xl {
      top: 30px;
      right: 80px;
    }

    .language--active {
      color: #fff;
      text-decoration-line: underline;
    }
  }
</style>