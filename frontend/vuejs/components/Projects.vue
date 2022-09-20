<template>
  <div 
    class="projects" @click="$emit('overflow') "
    :class="isActive !== false  ? 'projects__has-modal' : ''"
  >
    <h2 class="projects__title text-xs font-semibold mt-2 uppercase block md:hidden mt-20">Projects</h2>
    <ul class="projects__list">
      <li 
        class="projects__item p-6 md:p-10 my-2"
        :class="i === isActive ? 'projects__item--active' : ''"
        v-for="(project, i) in store.projects"
        :key="i"
        @click.stop="isActive = i"
      >
        <div class="projects__item__language font-bold uppercase flex relative">
          <div class="flex flex-row-reverse items-center">
            {{project.name}}
            <vue-js-icon 
              size="2x" 
              class="projects__item__icon mr-2"
              v-if="project.id === 'vue'"
            />
            <php-icon 
              size="2x" 
              class="projects__item__icon mr-2"
              v-if="project.id === 'php'"
            />
            <react-icon 
              size="2x" 
              class="projects__item__icon mr-2"
              v-if="project.id === 'reactjs'"
            />
            <sass-icon
              size="2x" 
              class="projects__item__icon mr-2"
              v-if="project.id === 'sass'"
            />
            <type-script-icon
              size="2x" 
              class="projects__item__icon mr-2"
              v-if="project.id === 'typescript'"
            />
            <svelte-icon
              size="2x" 
              class="projects__item__icon mr-2"
              v-if="project.id === 'svelte'"
            />
            <word-press-icon
              size="2x" 
              class="projects__item__icon mr-2"
              v-if="project.id === 'wordpress'"
            />
          </div>
          <button 
            class="projects__item__close"
            @click.stop="isActive = false"
          />
          
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

    props: {},

    data(): any {
      return{
        store: this.$store.state.data.portfolio,
        isActive: null as any,
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

  &.projects__has-modal {
    @screen md {
      &:hover {
        .projects__list {
          .projects__item {
            opacity: 1 !important;
          }
        }
      }
    }

    .projects__list {
      .projects__item {
        &:not(.projects__item--active) {
          @screen md {
            &:hover {
              transform: scale(1) !important;
            }
          }
        }
      }
    }
  }

  .projects__title {
    letter-spacing: 3px;
  }

  .projects__list {
    .projects__item {
      width: auto;

      &:not(.projects__item--active) {
        transition: all .2s ease-in-out;

        @screen md {
          &:hover {
            transform: scale(1.1);
          }
        }
      }

      &.projects__item--active {
        //variable
        $decrease: 80px;
        
        box-shadow: none !important;
        cursor: auto !important;
        @apply mt-0;

        .projects__item__close {
          position: absolute;
          right: -26px;
          top: -15px;
          cursor: pointer;

          &:after{
            font-size: 30px;
            font-weight: 200;
            display: inline-block;
            content: "×";
            line-height: 0;
          }
        }

        position: fixed;
        width: calc(100% - 160px);
        left: 80px;
        height: calc(100% - 160px);
        top: calc(0px + 80px);
      }
    }
    
    .projects__item {
      z-index: 1;
      background: #201f22;
      
      &:first-child {
        @apply mt-8;

        @screen md {
          @apply mt-0;
        }
      }
    
      @screen md {
        &:hover {
          box-shadow: 0px 0px 20px rgb(21, 21, 21);
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