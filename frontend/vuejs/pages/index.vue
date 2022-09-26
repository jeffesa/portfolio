<template>
  <div class="portfolio relative grid grid-cols-1 md:grid-cols-2 p-6 md:p-20 h-full">
    <div class="portfolio__language absolute flex pr-6 md:pr-20  text-xs font-normal z-10">
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
    <div class="pb-6 md:pb-20">
      <div class="portfolio__experiences">
        <div>
          <h2 
            class="portfolio__experiences__title text-xs font-semibold mt-2 uppercase mt-20 mb-8 block md:hidden"
            v-text="store.experiences.title"
          />
          <Cards 
            :cards="store.experiences.cards"
            @overflow="overflowHidden" 
          />
        </div>
      </div>
      <div class="portfolio__projects pt-8 md:pt-10">
        <div>
          <h2 
            class="portfolio__projects__title text-xs font-semibold mt-2 uppercase mt-20 mb-8 block md:hidden"
            v-text="store.experiences.title"
          />
          <Cards 
            :cards="store.projects.cards"
            @overflow="overflowHidden" 
          />
        </div>
      </div>
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
        store: this.$store.state.data.portfolio.language[0].en as Object,
        language: 'en' as string
      }
    },

    methods: {
      overflowHidden(): any {
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

  .portfolio__experiences {
    .portfolio__experiences__title {
      letter-spacing: 3px;
    }
  }

  .portfolio__projects {
    .portfolio__projects__title {
      letter-spacing: 3px;
    }

    ::v-deep {
      .portfolio__projects__title {
        @apply mt-0;
      }

      .cards__list {
        display: grid;
        grid-template-columns: 100%;

        @screen md {
          grid-template-columns: 50% 50%;
        }

        .cards__item:nth-child(2n + 1) {
          //background: red !important;
          @apply mt-0;
          @apply mb-2;
          @apply mr-0;

          @screen md {
            @apply mr-1 #{!important};
          }
        }

        .cards__item:nth-child(2n + 2) {
          //background: blue !important;
          @apply relative;
          @apply top-0;
          @apply mt-0;
          @apply mb-2;
          @apply ml-0;

          @screen md {
            @apply ml-1;
            @apply top-10;
          }
        }

        .cards__item__subtitle {
          color: #949495;
          @apply text-base;
        }

        .cards__item__description {
          color: #fff;
          @apply text-lg;
          @apply font-semibold;
          @apply leading-6;
        }
      }
    }
  }
}
</style>
