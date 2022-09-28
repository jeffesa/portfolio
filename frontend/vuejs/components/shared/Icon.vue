<template>
  <div class="icon flex flex-row-reverse items-center">
    <span class="icon__text text-sm font-medium" :style="{color: color}">
      <slot />
    </span>
    <vue-js-icon 
      size="2x" 
      class="icon__language mr-2"
      :style="{fill: color}"
      v-if="icon === 'vue'"
    />
    <php-icon 
      size="2x" 
      class="icon__language mr-2"
      :style="{fill: color}"
      v-if="icon === 'php'"
    />
    <react-icon 
      size="2x" 
      class="icon__language mr-2"
      :style="{fill: color}"
      v-if="icon === 'reactjs'"
    />
    <sass-icon
      size="2x" 
      class="icon__language mr-2"
      :style="{fill: color}"
      v-if="icon === 'sass'"
    />
    <type-script-icon
      size="2x" 
      class="icon__language mr-2"
      :style="{fill: color}"
      v-if="icon === 'typescript'"
    />
    <svelte-icon
      size="2x" 
      class="icon__language mr-2"
      :style="{fill: color}"
      v-if="icon === 'svelte'"
    />
    <word-press-icon
      size="2x" 
      class="icon__language mr-2"
      :style="{fill: color}"
      v-if="icon === 'wordpress'"
    />
    <git-hub-icon
      size="2x" 
      class="icon__language mr-2"
      :style="{fill: color}"
      v-if="icon === 'github'"
    />
    <linked-in-icon
      size="2x" 
      class="icon__language mr-2"
      :style="{fill: color}"
      v-if="icon === 'linkedin'"
    />
  </div>
</template>

<script lang="ts">
  //@ts-ignore
  import { VueJsIcon, PhpIcon, ReactIcon, SassIcon, TypeScriptIcon, SvelteIcon, WordPressIcon, LinkedInIcon, GitHubIcon } from 'vue-simple-icons'

  export default {
    components: { 
      VueJsIcon, 
      PhpIcon, 
      ReactIcon, 
      SassIcon, 
      TypeScriptIcon, 
      SvelteIcon, 
      WordPressIcon,
      LinkedInIcon,
      GitHubIcon
    },

    props: {
      icon: String,
      color: String
    },

    data(): any {
      return{}
    },
  }
</script>

<style lang="scss" scoped>
  .icon {
    .icon__language {
      fill: #fff;
    }
  }
</style>