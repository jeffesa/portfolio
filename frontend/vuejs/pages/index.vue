<template>
  <div class="portfolio">
    <div 
      :class="[
        'progress-bar', 
        {hidden: !visible}
      ]"
    >
      <div class="progress-bar__progress"></div>
    </div>

    <div class="container m-auto relative grid grid-cols-1 lg:grid-cols-2 p-5 lg:p-10 lg:pt-16 xl:p-20 h-full">
      <Language :language="language" @setLanguage="emitSetLanguage" />
      
      <AboutMe 
        :aboutMe="aboutMeResult" 
        :profile="store.profile"
        :menuActive="menuActive"
        v-if="(typeof aboutMeResult !== 'function')"
      >
        <template v-slot:menu>
          <Menu 
            :menu="menuResult" 
            :menuActive="menuActive"
            v-if="menuResult" 
          />
        </template>

        <template v-slot:profile>
          <Profile 
            :profile="profile" 
            v-if="(typeof profile !== 'function')"
          />
        </template>
      </AboutMe>

      <div class="pb-6 md:pb-20 portfolio__lazytransition">
        <Projects 
          :projects="projectsResult" 
          v-if="(typeof projectsResult !== 'function')"
          v-scroll="scrollHandler"
        />
        <Contact 
          :contact="contact[0]" 
          :language="language"
          v-if="contact[0]"
        />
      </div>
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
      menu: Object,
      menuResult: Object,
      aboutMe: Object,
      aboutMeResult: Object,
      profile: Object,
      projects: Object,
      projectsResult: Object,
      contact: Object
    }
  },

  computed: {
    visible() {
      if (
          typeof this.projects !== 'function' && 
          typeof this.aboutMe !== 'function' && 
          typeof this.menu !== 'function' &&
          typeof this.contact !== 'function' && 
          typeof this.profile !== 'function'
        ) {
        return false
      } 
      return true
    }
  },

  // created () {
  //   (async () => {
  //     this.menu = await this.getMenus()
  //     this.aboutMe = await this.getAboutMe()
  //     this.profile = await this.getProfile()
  //     this.projects = await this.getProjects()
  //     this.contact = await this.getContact()
  //   })()
  // },

  mounted () {
    if(typeof window !== 'undefined'){
      window.addEventListener('scroll', this.scrollHandler)
    }

    (async () => {
      this.menu = await this.getMenus()
      this.aboutMe = await this.getAboutMe()
      this.profile = await this.getProfile()
      this.projects = await this.getProjects()
      this.contact = await this.getContact()
    })()
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

    emitSetLanguage(lang: string): any {
      this.language = lang
      this.getAboutMe()
      this.getMenus()
      this.getProjects()
    },

    scrollHandler(): any {
      let sections = [...document.getElementsByTagName('section')]
      let divPortfolio = document.querySelector('.portfolio') as HTMLElement | null

      if (divPortfolio !== null) {
        let posFloor = Math.abs(window.pageYOffset + window.innerHeight)
        let menu = this.store.menu

        let sectionExperiences = sections[0] as HTMLElement | null
        let sectionProjects = sections[1] as HTMLElement | null
        let sectionContact = sections[2] as HTMLElement | null


        if (sectionExperiences !== null && sectionProjects !== null && sectionContact !== null) {
          if (posFloor <= sectionProjects.offsetTop) {
            this.menuActive = sectionExperiences.id
          }

          if (posFloor <= sectionContact.offsetTop && posFloor >= sectionProjects.offsetTop && posFloor >= sectionExperiences.offsetTop) {
            this.menuActive = sectionProjects.id
          }

          if (!(posFloor <= sectionProjects.offsetTop) && !(posFloor <= sectionContact.offsetTop + 100 && posFloor >= sectionProjects.offsetTop && posFloor >= sectionExperiences.offsetTop)) {
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

      newMenu = newMenu.map((m: { id: string; name: any }) => {
        if (m.id === 'experiences') sortMenu[0] = { id: m.id, name: m.name}
        if (m.id === 'projects') sortMenu[1] = { id: m.id, name: m.name}
        if (m.id === 'contact') sortMenu[2] = { id: m.id, name: m.name}
      })

      this.menuResult = Object.assign({}, sortMenu)

      sortMenu = this.menuResult

      return sortMenu
    },

    async getAboutMe(lang: string) {
      let aboutMe: any

      const getAboutMe = gql`
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

      aboutMe = await this.$apollo.query({
        fetchPolicy: "no-cache",
        query: getAboutMe,
        variables: {
          type: String
        }
      })

      this.aboutMeResult = aboutMe.data.professional[0]

      return this.aboutMeResult
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
          cards: cards_projects_1(where: {language: {_eq: "${this.language}"}}, order_by: {order: asc}) {
            color
            description
            icon
            id
            image
            information
            link
            project_id
            subtitle
            title,
            detach
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

      this.projectsResult = projects.data.projects

      return this.projectsResult
    },

    async getContact() {
      let contact: any

      const getContact = gql`
        query {
            contact: contact {
              email
              id
              location
              phone
              title
            }
          }
      `

      contact = await this.$apollo.query({
        fetchPolicy: "no-cache",
        query: getContact,
        variables: {
          type: String
        }
      })

      return contact.data.contact
    }
  },
}
</script>

<style lang="scss" scoped>

.portfolio__lazytransition {
    transition: filter 0.1s;
    opacity: 1;
  }
  .portfolio__lazyload {
    filter: blur(40px);
    opacity: 0;
  }
.portfolio {
  .progress-bar {
    position: fixed;
    left: 0;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: #151515;
    overflow: hidden;
    z-index: 99999;
  }

  .progress-bar__progress {
    background-color: #fff;
    position: absolute;
    bottom: 0;
    top: 0;
    width: 50%;
    height: 5px;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: progress-bar;
  }

  @keyframes progress-bar {
      from {
          left: -50%;
      }
      to {
          left: 100%;
      }
  }
}
</style>
