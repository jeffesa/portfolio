<template>
  <div class="projects">
    <section 
      v-for="(project, i) in projects" 
      :key="i"
      :class="[
        `projects__${project.id}`, 
        project.id === 'projects' ? 'mt-8 md:mt-10' : ''
      ]"
      :id="project.id"
    >
      <div>
        <span 
          :class="[
            `projects__${project.id}__title`, 
            'block text-white uppercase py-2 lg:pb-0 m-0 block md:hidden text-base font-semibold sticky top-0 z-40'
          ]" 
          v-html="project.title" 
        />
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
          body.style.overflow = "initial"
        }
      },
    },

    mounted () {
      const inBrowser = typeof window !== 'undefined';
    },

    destroyed () {
      const inBrowser = typeof window !== 'undefined';
    },
  }
</script>

<style lang="scss" scoped>
  .projects {
    .projects__experiences {
      .projects__experiences__title {
        background: #151515;
        letter-spacing: 3px;
      }
    }

    .projects__projects {
      .projects__projects__title {
        background: #151515;
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
            @apply mt-0;
            @apply mb-2;
            @apply mr-0;

            @screen md {
              @apply mr-1 #{!important};
            }
          }

          .cards__item:nth-child(2n + 2) {
            @apply relative;
            @apply mt-0;
            @apply mb-2;
            @apply ml-0;

            @screen md {
              @apply ml-1;
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