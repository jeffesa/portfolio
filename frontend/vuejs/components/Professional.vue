<template>
  <div class="professional flex flex-col justify-start relative">
      <div class="relative lg:fixed">
        <div class="pt-5 lg:pt-0">
          <h1 
            class="professional__title font-bold leading-tight lg:text-4xl lg:leading-none text-zenith"
            v-text="professional.name"
          />
          <h2 
            class="professional__subtitle mt-2 sm:text-2xl font-semibold leading-tight text-sunrise"
            v-text="professional.career"
          />
          <div 
            class="professional__description mt-8"
            v-html="professional.description"
          />
          <Menu 
            :menu="menu" 
            :menuActive="menuActive"
          />
        </div>
        <Profile :profile="profile" />
      </div>
    </div>
</template>

<script lang="ts">
  export default {
    props: {
      professional: {
        type: Object,
        required: true
      },
      profile: {
        type: Object,
        required: true
      },
      menu: {
        type: null,
        required: true
      },
      menuActive: {
        type: String,
        required: true
      },
    }
  }
</script>

<style lang="scss" scoped>
.professional {
    max-width: 100%;
    $width_portfolio: 408px; 

    @screen lg {
      max-width: $width_portfolio;
    }

    .professional__title {
      font-size: 34px;

      @screen lg {
        font-size: 44px;
      }
    }

    .professional__subtitle {
      font-size: 22px;
    }

    .professional__description {
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