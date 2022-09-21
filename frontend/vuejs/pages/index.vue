<template>
  <div class="portfolio relative grid grid-cols-1 md:grid-cols-2 p-6 md:p-20 h-full">
    <div class="portfolio__language absolute flex md:pr-20 text-xs font-normal">
      <span 
        class="pr-2"
        :class="language === 'pt' ? 'portfolio__language--active' : ''"
        @click="setLanguage('pt')"
      >
        PT
      </span>
      <span 
        :class="language === 'en' ? 'portfolio__language--active' : ''"
        @click="setLanguage('en')"
      >
        EN
      </span>
    </div>
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
          <Menu :menu="store.menu" />
        </div>
        <Profile :profile="store.profile" />
      </div>
    </div>
    <div class="projects__projects">
      <div>
        <h2 
          class="projects__projects__title text-xs font-semibold mt-2 uppercase mt-20 mb-8"
          v-text="store.projects.title"
        />
        <Card 
          :cards="store.projects.cards"
          @overflow="overflowHidden" 
        />
      </div>
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
        store: this.$store.state.data.portfolio.language[0].en,
        language: 'en' as string
      }
    },

    methods: {
      overflowHidden(): any {
        console.log('blabla')
        const body: any =  document.getElementsByTagName('body')[0]
        if (body.style.overflow !== 'hidden') {
          body.style.overflow = "hidden"
        } else {
          body.style.overflow = "auto"
        }
      },
      setLanguage(lang: string): any {
        this.language = lang
        this.store = lang === 'pt' ? this.$store.state.data.portfolio.language[0].pt : this.$store.state.data.portfolio.language[0].en
      }
    }
  }
</script>

<style lang="scss" scoped>
.portfolio {
  $width_portfolio: 408px; 

  .portfolio__language {
    top: 30px;
    right: 0;
    color: #878788;
    cursor: pointer;

    .portfolio__language--active {
      color: #fff;
      text-decoration-line: underline;
    }
  }

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

  .projects__projects {
    .projects__projects__title {
      letter-spacing: 3px;
    }
  }
}
</style>
