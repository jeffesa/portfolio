<template>
  <div class="portfolio grid grid-cols-1 md:grid-cols-2 p-6 md:p-20 h-full">
    <div class="portfolio__information flex flex-col justify-start relative">
      <div class="relative md:fixed">
        <div>
          <h1 
            class="portfolio__title font-bold leading-tight lg:text-4xl lg:leading-none text-zenith"
            v-text="store.title"
          />
          <h2 
            class="portfolio__subtitle mt-2 sm:text-2xl font-semibold leading-tight text-sunrise"
            v-text="store.subtitle"
          />
          <div 
            class="portfolio__description text-sm mt-8"
            v-html="store.description"
          />
          <Menu />
        </div>
        <Profile />
      </div>
    </div>
    <div>
      <Projects @overflow="overflowHidden" />
      <div>experience</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
    data(): any {
      return {
        store: this.$store.state.data.portfolio
      }
    },

    methods: {
      overflowHidden() {
        console.log('blabla')
        const body: any =  document.getElementsByTagName('body')[0]
        if (body.style.overflow !== 'hidden') {
          body.style.overflow = "hidden"
        } else {
          body.style.overflow = "auto"
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.portfolio {
  $width_portfolio: 408px; 
  .portfolio__information {
    max-width: $width_portfolio;

    .portfolio__title {
      font-size: 34px;

      @screen md {
        font-size: 44px;
      }
    }

    .portfolio__subtitle {
      font-size: 22px;
    }

    .portfolio__description {
      max-width: $width_portfolio;
      color: #878788;
      line-height: 2;

      ::v-deep a {
        color: #fff;
        text-decoration-line: underline;
      }
    }
  }
}
</style>
