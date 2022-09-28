<template>
  <div class="profile grid pt-8 md:pt-32" v-if="profile">
    <img alt="" 
      :src="profile.image"
      class="profile__photo" />
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
          :color="network.colors.title"
        >
          {{network.title}}
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

  .profile__photo {
    border-radius: 50%;
  }

  .profile__networks {
    .profile__networks__link {
      // display: grid;
      // grid-template-columns: 16px auto;
      
      .profile__networks__icon {
        @apply mr-0;

        :deep {
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