<template>
  <section class="projects">
    <div 
      v-for="(project, i) in projects" 
      :key="i"
      :class="[`projects__${project.id}`, project.id === 'projects' ? 'mt-8 md:mt-10' : '']"
      :id="project.id"
      v-scroll="scrollHandler"
    >
      <div>
        <Cards 
          :cards="project.cards"
          @overflow="overflowHidden" 
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  export default {
    props: {
      projects: {
        type: Object,
        required: true
      }
    }
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