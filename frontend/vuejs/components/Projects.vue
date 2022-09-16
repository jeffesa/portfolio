<template>
  <div class="projects">
    <h2 class="projects__title text-xs font-semibold mt-2 uppercase block md:hidden mt-20">Projects</h2>
    <ul class="projects__list">
      <li class="projects__item p-6 md:p-10 my-2">
        <div class="projects__item__language font-bold uppercase flex">
          <div class="flex flex-row-reverse items-center">
            VueJs
            <vue-js-icon size="2x" class="projects__item__icon mr-2"></vue-js-icon>
          </div>
        </div>
        <p class="project__item__name text-2xl font-semibold mt-2">dinerojs/dinero.js</p>
        <p class="project__item__description text-sm mt-2">Create, calculate, and format money in JavaScript and TypeScript.</p>
        <p class="project__item__date font-bold mt-2">01 Jan 2022</p>
      </li>
      <li class="projects__item p-6 md:p-10 my-2">
        <div class="projects__item__language font-bold uppercase flex">
          <div class="flex flex-row-reverse items-center">
            PHP
            <php-icon size="2x" class="projects__item__icon mr-2"></php-icon>
          </div>
        </div>
        <p class="project__item__name text-2xl font-semibold mt-2">dinerojs/dinero.js</p>
        <p class="project__item__description text-sm mt-2">Create, calculate, and format money in JavaScript and TypeScript.</p>
        <p class="project__item__date font-bold mt-2">01 Jan 2022</p>
      </li>
      <li class="projects__item p-6 md:p-10 my-2">
        <div class="projects__item__language font-bold uppercase flex">
          <div class="flex flex-row-reverse items-center">
            ReactJs
            <react-icon size="2x" class="projects__item__icon mr-2"></react-icon>
          </div>
        </div>
        <p class="project__item__name text-2xl font-semibold mt-2">dinerojs/dinero.js</p>
        <p class="project__item__description text-sm mt-2">Create, calculate, and format money in JavaScript and TypeScript.</p>
        <p class="project__item__date font-bold mt-2">01 Jan 2022</p>
      </li>
      <li class="projects__item p-6 md:p-10 my-2">
        <div class="projects__item__language font-bold uppercase flex">
          <div class="flex flex-row-reverse items-center">
            Sass
            <sass-icon size="2x" class="projects__item__icon mr-2"></sass-icon>
          </div>
        </div>
        <p class="project__item__name text-2xl font-semibold mt-2">dinerojs/dinero.js</p>
        <p class="project__item__description text-sm mt-2">Create, calculate, and format money in JavaScript and TypeScript.</p>
        <p class="project__item__date font-bold mt-2">01 Jan 2022</p>
      </li>
      <li class="projects__item p-6 md:p-10 my-2">
        <div class="projects__item__language font-bold uppercase flex">
          <div class="flex flex-row-reverse items-center">
            TypeScript
            <type-script-icon size="2x" class="projects__item__icon mr-2"></type-script-icon>
          </div>
        </div>
        <p class="project__item__name text-2xl font-semibold mt-2">dinerojs/dinero.js</p>
        <p class="project__item__description text-sm mt-2">Create, calculate, and format money in JavaScript and TypeScript.</p>
        <p class="project__item__date font-bold mt-2">01 Jan 2022</p>
      </li>
      <li class="projects__item p-6 md:p-10 my-2">
        <div class="projects__item__language font-bold uppercase flex">
          <div class="flex flex-row-reverse items-center">
            Svelte
            <svelte-icon size="2x" class="projects__item__icon mr-2"></svelte-icon>
          </div>
        </div>
        <p class="project__item__name text-2xl font-semibold mt-2">dinerojs/dinero.js</p>
        <p class="project__item__description text-sm mt-2">Create, calculate, and format money in JavaScript and TypeScript.</p>
        <p class="project__item__date font-bold mt-2">01 Jan 2022</p>
      </li>
      <li class="projects__item p-6 md:p-10 my-2">
        <div class="projects__item__language font-bold uppercase flex">
          <div class="flex flex-row-reverse items-center">
            Wordpress
            <word-press-icon size="2x" class="projects__item__icon mr-2"></word-press-icon>
          </div>
        </div>
        <p class="project__item__name text-2xl font-semibold mt-2">dinerojs/dinero.js</p>
        <p class="project__item__description text-sm mt-2">Create, calculate, and format money in JavaScript and TypeScript.</p>
        <p class="project__item__date font-bold mt-2">01 Jan 2022</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { VueJsIcon, PhpIcon, ReactIcon, SassIcon, TypeScriptIcon, SvelteIcon, WordPressIcon } from 'vue-simple-icons'

  export default {
    components: { VueJsIcon, PhpIcon, ReactIcon, SassIcon, TypeScriptIcon, SvelteIcon, WordPressIcon },

    data(){
    return{
      isActive: false as boolean,
    }
  },
  }
</script>

<style lang="scss" scoped>
.projects {
  @screen md {
    &:hover {
      .projects__list {
        .projects__item {
          opacity: .4;
        }
      }
    }
  }

  .projects__title {
    letter-spacing: 3px;
  }

  .projects__list {
    .projects__item {
      background: #201f22;
      transition: all .2s ease-in-out;
      
      
        &:first-child {
          @apply mt-8;

          @screen md {
            @apply mt-0;
          }
        }
    
      @screen md {
        &:hover {
          box-shadow: 0px 0px 20px rgb(21, 21, 21);
          transform: scale(1.1);
          cursor: pointer;
          opacity: 1 !important;
        }
      }
    
      .projects__item__language{
        font-size: 10px;
        letter-spacing: 3px;

        .projects__item__icon {
          fill: #fff;
        }
      }
    
      .project__item__name {}
    
      .project__item__description {
        color: #949495;
      }
    
      .project__item__date {
        color: #949495;
        letter-spacing: 1px;
        font-size: 10px;
      }
    }
  }
}
</style>