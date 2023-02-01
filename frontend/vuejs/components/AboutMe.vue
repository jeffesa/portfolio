<template>
  <div class="about-me flex flex-col justify-start relative">
      <div class="relative lg:fixed">
        <div class="pt-5 lg:pt-0">
          <h1 
            class="about-me__title font-bold leading-tight lg:text-4xl lg:leading-none text-zenith"
            v-text="aboutMe.name"
            v-if="aboutMe.name !== null || aboutMe.name !== '' || typeof aboutMe !== 'undefined'"
          />
          <h2 
            class="about-me__subtitle mt-2 sm:text-2xl font-semibold leading-tight text-sunrise"
            v-text="aboutMe.career"
            v-if="aboutMe.career"
          />
          <div 
            class="about-me__description mt-8"
            v-html="aboutMe.description"
            v-if="aboutMe.description"
          />
          <slot />
          <slot name="menu" />
        </div>
        <slot name="profile" />
      </div>
    </div>
</template>

<script lang="ts">
  export default {
    props: {
      aboutMe: {
        type: Object,
        required: true
      },
      profile: {
        type: Object,
        required: true
      },
    }
  }
</script>

<style lang="scss" scoped>
.about-me {
    max-width: 100%;
    $width_portfolio: 408px; 

    @screen lg {
      max-width: $width_portfolio;
    }

    .about-me__title {
      font-size: 34px;

      @screen lg {
        font-size: 44px;
      }
    }

    .about-me__subtitle {
      font-size: 22px;
    }

    .about-me__description {
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
</style>