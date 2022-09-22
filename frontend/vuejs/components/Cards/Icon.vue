<template>
  <div class="icon-title flex flex-row-reverse items-center">
    <slot />
    <vue-js-icon 
      size="2x" 
      class="icon-title__language mr-2"
      :style="{fill: color}"
      v-if="icon === 'vue'"
    />
    <php-icon 
      size="2x" 
      class="icon-title__language mr-2"
      :style="{fill: color}"
      v-if="icon === 'php'"
    />
    <react-icon 
      size="2x" 
      class="icon-title__language mr-2"
      :style="{fill: color}"
      v-if="icon === 'reactjs'"
    />
    <sass-icon
      size="2x" 
      class="icon-title__language mr-2"
      :style="{fill: color}"
      v-if="icon === 'sass'"
    />
    <type-script-icon
      size="2x" 
      class="icon-title__language mr-2"
      :style="{fill: color}"
      v-if="icon === 'typescript'"
    />
    <svelte-icon
      size="2x" 
      class="icon-title__language mr-2"
      :style="{fill: color}"
      v-if="icon === 'svelte'"
    />
    <word-press-icon
      size="2x" 
      class="icon-title__language mr-2"
      :style="{fill: color}"
      v-if="icon === 'wordpress'"
    />
  </div>
</template>

<script lang="ts">
  import { 
    VueJsIcon, 
    PhpIcon, 
    ReactIcon, 
    SassIcon, 
    TypeScriptIcon, 
    SvelteIcon, 
    WordPressIcon 
  } from 'vue-simple-icons'

  export default {
    components: { 
      VueJsIcon, 
      PhpIcon, 
      ReactIcon, 
      SassIcon, 
      TypeScriptIcon, 
      SvelteIcon, 
      WordPressIcon 
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
  .icon-title {
    .icon-title__language {
      fill: #fff;
    }
  }
</style>