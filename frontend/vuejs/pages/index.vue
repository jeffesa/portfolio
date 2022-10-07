<template>
  <div class="portfolio relative grid grid-cols-1 lg:grid-cols-2 p-6 lg:p-10 lg:pt-16 xl:p-20 h-full">
    <div class="portfolio__language absolute flex text-xs font-normal z-10">
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
      <div class="relative lg:fixed">
        <div class="pt-5 lg:pt-0">
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
          <Menu 
            :menu="store.menu" 
            :menuActive="menuActive"
          />
        </div>
        <Profile :profile="store.profile" />
      </div>
    </div>
    <div class="pb-6 md:pb-20">
      <section 
        v-for="(section, i) in store.sections" 
        :key="i"
        :class="[`portfolio__${section.id}`, section.id === 'projects' ? 'pt-8 md:pt-10' : '']"
        v-if="section.id !== 'contact'"
        :id="section.id"
        v-scroll="scrollHandler"
      >
        <div>
          <h2 
            :class="`portfolio__${section.id}__title text-xs font-semibold mt-2 uppercase mt-20 mb-8 block lg:hidden`"
            v-text="section.title"
          />
          <Cards 
            :cards="section.cards"
            @overflow="overflowHidden" 
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
export default {
    data(): any {
      return {
        store: this.$store.state.data.portfolio.language[0].en as Object,
        language: 'en' as string,
        menuActive: '' as string
      }
    },

    mounted () {
      if(process.browser){
        window.addEventListener('scroll', this.scrollHandler)
      }
    },
    destroyed () {
      if(process.browser){
        window.removeEventListener('scroll', this.scrollHandler)
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
      },

      scrollHandler(): any {
        let sections = [...document.getElementsByTagName('section')];
        let divPortfolio = document.querySelector('.portfolio')
        let posFloor = window.pageYOffset + divPortfolio.offsetHeight
        let menu = this.store.menu

        sections.forEach((el, i) => {
          let sectionCurrent = document.getElementsByTagName('section')[i]
          let sectionNext = document.getElementsByTagName('section')[i + 1]
          if (sectionCurrent !== undefined && sectionNext !== undefined) {
            if (sectionCurrent.offsetTop + sectionCurrent.offsetHeight >= posFloor ) {
              this.menuActive = sectionCurrent.id
            } else {
              this.menuActive = sectionNext.id
            }
          }
        });
      }
    },
  }
</script>

<style lang="scss" scoped>
.portfolio {
  $width_portfolio: 408px; 

  .portfolio__language {
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

    .portfolio__language--active {
      color: #fff;
      text-decoration-line: underline;
    }
  }

  .portfolio__information {
    max-width: 100%;

    @screen lg {
      max-width: $width_portfolio;
    }

    .portfolio__title {
      font-size: 34px;

      @screen lg {
        font-size: 44px;
      }
    }

    .portfolio__subtitle {
      font-size: 22px;
    }

    .portfolio__description {
      max-width: 100%;
      color: #878788;
      line-height: 2;

      @screen lg {
        max-width: $width_portfolio;
      }

      :deep a {
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

    :deep {
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
