<template>
  <div 
    class="profile flex justify-center lg:justify-start pt-8 lg:pt-32 pb-8 lg:pb-0" 
    v-if="profile"
  >
    <div class="profile__container__photo">
      <nuxt-img 
        :src="profile.image" 
        v-if="typeof profile.image === 'string' && profile.image != ''" 
        class="profile__photo" 
        loading="lazy" 
      />
    </div>
    <div class="flex profile__networks">
      <a 
        class="flex items-center profile__networks__link pl-7" 
        :href="network.link" 
        target="_blank"
        v-for="(network, i) in profile.networks"
        :key="i"
      >
        <Icon 
          class="mr-2 profile__networks__icon"
          :icon="network.icon" v-if="network.icon"
          :color="network.color"
        >
          {{ network.title }}
        </Icon>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
  //@ts-ignore
  import Icon from './shared/Icon'

  export default {
    components: { 
      Icon
    },

    props: {
      profile: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
.profile {
  grid-template-columns: 50px 1fr;
  .profile__container__photo {
    position: relative;

    .profile__photo {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(100%);

      &::after {
        content: 'dddd';
        width: 100px;
        height: 100px;
        background: red;
      }
    }
  }

  .profile__networks {
    .profile__networks__link {
      .profile__networks__icon {
        @apply mr-0;
        font-size: 8px;

        :deep() {
          .icon__language {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }
}
</style>