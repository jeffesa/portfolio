<template>
  <div class="projects">
    <section 
      v-for="(project, i) in projects" 
      :key="i"
      :class="[`projects__${project.id}`, project.id === 'projects' ? 'mt-8 md:mt-10' : '']"
      :id="project.id"
    >
      <div>
        <span class="block text-white uppercase pb-1 lg:pb-0 mb-2 block md:hidden text-base font-semibold" v-html="project.title" />
        <Cards 
          :cards="project.cards"
          @overflow="overflowHidden" 
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  export default {
    props: {
      projects: {
        required: true
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

//       scrollHandler(): any {
//         let sections = [...document.getElementsByTagName('section')]
//         let divPortfolio = document.querySelector('.portfolio') as HTMLElement | null
//         if (divPortfolio !== null) {
//           let posFloor = window.pageYOffset + divPortfolio.offsetHeight
//           let menu = this.store.menu
// 
// 
//           let sectionExperiences = sections[0] as HTMLElement | null
//           let sectionProjects = sections[1] as HTMLElement | null
//           let sectionContact = sections[2] as HTMLElement | null
// 
//           if (sectionExperiences !== null && sectionProjects !== null && sectionContact !== null) {
//             if (posFloor <= (sectionExperiences.offsetTop + sectionExperiences.offsetHeight)) {
//               this.menuActive = sectionExperiences.id
//             } 
// 
//             if (posFloor >= sectionProjects.offsetTop && posFloor <= sectionContact.offsetTop) {
//               this.menuActive = sectionProjects.id
//             }
// 
//             if (posFloor >= sectionContact.offsetTop && posFloor >= sectionProjects.offsetTop) {
//               this.menuActive = sectionContact.id
//             }
//           }
//         }
//       },
    },

    mounted () {
      const inBrowser = typeof window !== 'undefined';

      // if (inBrowser) {
      //   window.addEventListener('scroll', this.scrollHandler)
      // }
    },

    destroyed () {
      const inBrowser = typeof window !== 'undefined';

      // if (inBrowser) {
      //   window.removeEventListener('scroll', this.scrollHandler)
      // }
    },
  }
</script>

<style lang="scss" scoped>
  .projects {
    .projects__experiences {
      .projects__experiences__title {
        letter-spacing: 3px;
      }
    }

    .projects__projects {
      .projects__projects__title {
        letter-spacing: 3px;
      }

      :deep() {
        .projects__projects__title {
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
  }
</style>