<template>
  <div class="portfolio container m-auto relative grid grid-cols-1 lg:grid-cols-2 p-6 lg:p-10 lg:pt-16 xl:p-20 h-full">
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
            class="portfolio__description mt-8"
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
        :class="[`portfolio__${section.id}`, section.id === 'projects' ? 'mt-8 md:mt-10' : '']"
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
      <section 
        v-else
        class="portfolio__contact text-xs mt-8 md:mt-20"
        :id="section.id"
      >
        <span 
          class="portfolio__contact__title block text-white uppercase pb-1 lg:pb-5"
          v-text="section.title"
          v-if="section.title"
        />
        <!-- <span 
          class="portfolio__contact__email block text-white"
          v-text="section.email"
          v-if="section.email"
        />
        <span 
          class="portfolio__contact__phone block text-white pt-1 lg:pt-2"
          v-text="section.phone"
          v-if="section.phone"
        />
        <span 
          class="portfolio__contact__location block pt-1 lg:pt-2" 
          v-text="section.location" 
          v-if="section.location"
        /> -->
        <b-field label="Name">
            <b-input v-model="name"></b-input>
        </b-field>
        <b-field label="Email">
            <b-input v-model="email"></b-input>
        </b-field>
        <b-field label="Message"
            :label-position="labelPosition">
            <b-input maxlength="200" type="textarea"></b-input>
        </b-field>
        <b-button type="is-primary">Enviar</b-button>
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
        menuActive: '' as string,
        name: null,
        email: null,
        labelPosition: null
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
        let sections = [...document.getElementsByTagName('section')]
        let divPortfolio = document.querySelector('.portfolio') as HTMLElement | null
        if (divPortfolio !== null) {
          let posFloor = window.pageYOffset + divPortfolio.offsetHeight
          let menu = this.store.menu


          let sectionExperiences = sections[0] as HTMLElement | null
          let sectionProjects = sections[1] as HTMLElement | null
          let sectionContact = sections[2] as HTMLElement | null

          if (sectionExperiences !== null && sectionProjects !== null && sectionContact !== null) {
            if (posFloor <= (sectionExperiences.offsetTop + sectionExperiences.offsetHeight)) {
              this.menuActive = sectionExperiences.id
            } 

            if (posFloor >= sectionProjects.offsetTop && posFloor <= sectionContact.offsetTop) {
              this.menuActive = sectionProjects.id
            }

            if (posFloor >= sectionContact.offsetTop && posFloor >= sectionProjects.offsetTop) {
              this.menuActive = sectionContact.id
            }
          }
        }
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
      //line-height: 2px;
      
      @apply text-sm;
      @apply leading-6;

      @screen lg {
        max-width: $width_portfolio;
      }

      :deep(a) {
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

    :deep() {
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
          // @apply top-0;
          @apply mt-0;
          @apply mb-2;
          @apply ml-0;

          @screen md {
            @apply ml-1;
            // @apply top-10;
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

  .portfolio__contact {
    :deep {
      .label {
        @apply text-white;
        @apply text-sm;
      }

      .button {
        background: #fff;
        color: #000;
      }

      .input,
      .textarea {
        border: 0;
      }
    }
    
    .portfolio__contact__title {
      @apply text-xs;
      @apply font-semibold;
      @apply leading-6;
      letter-spacing: 3px;

      @screen lg {
        @apply text-lg;
      }
    }

    .portfolio__contact__email {
      color: #fff;
      @apply text-sm;
      @apply font-semibold;
      @apply leading-6;

      @screen lg {
        @apply text-base;
      }
    }

    .portfolio__contact__phone {
      color: #fff;
      @apply text-xs;
      @apply font-semibold;
      @apply leading-4;

      @screen lg {
        @apply text-sm;
      }
    }

    .portfolio__contact__location {
      color: #878788;
      @apply text-xs;
      @apply font-semibold;
      @apply leading-4;
    }
  }
}
</style>
