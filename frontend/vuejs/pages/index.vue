<template>
  <div class="portfolio container m-auto relative grid grid-cols-1 lg:grid-cols-2 p-6 lg:p-10 lg:pt-16 xl:p-20 h-full">
    <!-- {{ projects }}
    <br>
    <br>
    <br> -->
    <!-- {{ store.sections }} -->
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

    <Professional 
      :professional="professional" 
      :profile="store.profile"
      :menu="menu" 
      :menuActive="menuActive"
      :class="(Object.keys(professional).length > 0 && Object.keys(menu).length > 0) ? '' : 'portfolio__lazyload'"
      class="portfolio__lazytransition"
    >
      <template v-slot:menu>
        <Menu 
          :menu="menu" 
          :menuActive="menuActive"
          v-if="menu" 
        />
      </template>

      <template v-slot:profile>
        <Profile :profile="profile" />
      </template>
    </Professional>

    <div class="pb-6 md:pb-20">
      <Projects :projects="projects" />
      <!-- <section 
        v-else
        class="portfolio__contact text-xs mt-8 md:mt-20"
        :id="section.id"
      >
        <span 
          class="portfolio__contact__title block text-white uppercase pb-1 lg:pb-5"
          v-text="section.title"
          v-if="section.title"
        /> -->
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
        <!-- <b-field label="Name">
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
      </section> -->
    </div>
  </div>
</template>

<script lang="ts">
import gql from 'graphql-tag'

export default {
  data(): any {
    return {
      store: this.$store.state.data.portfolio.language[0].en as Object,
      language: 'en' as string,
      menuActive: '' as string,
      name: null,
      email: null,
      labelPosition: null,
      menu: null,
      professional: Object,
      profile: Object,
      projects: Object,
    }
  },

  created () {
    (async () => {
      this.menu = await this.getMenus()
      this.professional = await this.getProfessional()
      this.profile = await this.getProfile()
      this.projects = await this.getProjects()
    })()
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
    },

    async getMenus() {
      let menu: any

      const getMenus = gql`
        query {
            menu: menu (order_by: {id: asc}, where: {language: {_eq: "${this.language}"}}) {
              id,
              name
            }
          }
      `

      menu = await this.$apollo.query({
        fetchPolicy: "no-cache",
        query: getMenus,
        variables: {
          type: String
        }
      })

      let newMenu = JSON.parse(JSON.stringify(menu.data.menu))
      let sortMenu: any = []

      newMenu = newMenu.map((m) => {
        if (m.id === 'experiences') sortMenu[0] = { id: m.id, name: m.name}
        if (m.id === 'projects') sortMenu[1] = { id: m.id, name: m.name}
        if (m.id === 'contact') sortMenu[2] = { id: m.id, name: m.name}
      })

      sortMenu = Object.assign({}, sortMenu)

      return sortMenu
    },

    async getProfessional() {
      let professional: any

      const getProfessional = gql`
        query {
            professional: professional (where: {language: {_eq: "${this.language}"}}) {
              id,
              name,
              career,
              description,
              language
            }
          }
      `

      professional = await this.$apollo.query({
        fetchPolicy: "no-cache",
        query: getProfessional,
        variables: {
          type: String
        }
      })

      return professional.data.professional[0]
    },

    async getProfile() {
      let profile: any

      const getProfile = gql`
        query {
            profile: profile {
              id
              image
              networks: networks_profile_1 {
                id
                name,
                icon,
                title,
                link,
                color,
                profile_id
              }
            }
          }
      `

      profile = await this.$apollo.query({
        fetchPolicy: "no-cache",
        query: getProfile,
        variables: {
          type: String
        }
      })

      return profile.data.profile[0]
    },

    async getProjects() {
      let projects: any

      const getProjects = gql`
        query {
            projects: projects {
              title
              id
              cards: cards_projects_1 {
                color
                description
                icon
                id
                image
                information
                link
                project_id
                subtitle
                title
              }
            }
          }
      `

      projects = await this.$apollo.query({
        fetchPolicy: "no-cache",
        query: getProjects,
        variables: {
          type: String
        }
      })

      return projects.data.projects
    }
  },
}
</script>

<style lang="scss" scoped>
.portfolio {

  .portfolio__lazytransition {
    transition: filter 0.5s,
  }
  .portfolio__lazyload {
    filter: blur(40px);
  }

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
