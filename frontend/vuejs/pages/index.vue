<template>
  <div class="portfolio grid grid-cols-1 md:grid-cols-2 p-6 md:p-20 h-full">
    <div class="portfolio__information flex flex-col justify-start relative">
      <div class="relative md:fixed">
        <div>
          <h1 class="hidden">Hello, my name is {{$store.state.store.user.name}}</h1>
          <h1 class="portfolio__title font-bold leading-tight lg:text-4xl lg:leading-none text-zenith">Jefferson Santos</h1>
          <h2 class="portfolio__subtitle mt-2 sm:text-2xl font-semibold leading-tight text-sunrise">Staff Software Engineer</h2>
          <div class="portfolio__description text-sm mt-8">
            <p>I build open-source front-end libraries at <a href="#">Algolia</a> and host two tech podcasts: <a href="#">Developer Experience</a> and Entre Devs.</p>
            <p>On my spare time, I share what I learn on my blog and speak at <a href="#">tech conferences</a> around the world.</p>
          </div>
          <Menu />
        </div>
        <Profile />
      </div>
    </div>
    <div>
      <Projects />
      <div>experience</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(["user"])
    }
}
</script>

<style lang="scss" scoped>
.portfolio {
  $width_portfolio: 408px; 
  .portfolio__information {
    max-width: $width_portfolio;

    .portfolio__title {
      font-size: 34px;

      @screen md {
        font-size: 44px;
      }
    }

    .portfolio__subtitle {
      font-size: 22px;
    }

    .portfolio__description {
      max-width: $width_portfolio;
      color: #878788;
      line-height: 2;

      a {
        color: #fff;
        text-decoration-line: underline;
      }
    }
  }
}
</style>
