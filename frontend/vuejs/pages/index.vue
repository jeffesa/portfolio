<template>
  <div 
    class="portfolio container m-auto relative grid grid-cols-1 lg:grid-cols-2 p-6 lg:p-10 lg:pt-16 xl:p-20 h-full portfolio__lazytransition"
    :class="(Object.keys(projects).length > 0 && Object.keys(contact).length > 0) && (Object.keys(aboutMe).length > 0 && Object.keys(menu).length > 0) ? '' : 'portfolio__lazyload'"
  >
    <Language :language="language" />
    
    <AboutMe 
      :aboutMe="aboutMe" 
      :profile="store.profile"
      :menu="menu" 
      :menuActive="menuActive"
      v-if="Object.keys(aboutMe).length > 0"
    >
      <template v-slot:menu>
        <Menu 
          :menu="menu" 
          :menuActive="menuActive"
          v-if="menu" 
        />
      </template>

      <template v-slot:profile>
        <Profile 
          :profile="profile" 
          v-if="Object.keys(profile).length > 0"
        />
      </template>
    </AboutMe>

    <div class="pb-6 md:pb-20 portfolio__lazytransition">
      <Projects 
        :projects="projects" 
        v-if="Object.keys(projects).length > 0"
        v-scroll="scrollHandler"
      />
      <Contact 
        :contact="contact[0]" 
        v-if="contact[0]"
      />
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
      aboutMe: Object,
      profile: Object,
      projects: Object,
      contact: Object
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

          if (posFloor >= sectionContact.offsetTop + 100 && posFloor >= sectionProjects.offsetTop) {
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

      sortMenu = Object.assign({}, sortMenu)

      return sortMenu
    },

    async getAboutMe() {
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

      return aboutMe.data.professional[0]
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
.portfolio {}
</style>
