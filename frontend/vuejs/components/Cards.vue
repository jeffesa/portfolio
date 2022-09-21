<template>
  <div 
    class="projects"
    :class="isActive !== false  ? 'projects__has-modal' : ''"
  >
    <h2 class="projects__title text-xs font-semibold mt-2 uppercase block md:hidden mt-20 mb-8">Projects</h2>
    <ul class="projects__list">
      <li 
        class="projects__item p-6 md:p-10 my-2"
        :class="i === isActive ? 'projects__item--active' : ''"
        v-for="(project, i) in store.projects"
        :key="i"
        @click.stop="isActive = i"
        @click="$emit('overflow')"
      >
        <div 
          class="projects__item__title font-bold uppercase flex relative"
          :style="{color: project.colors.title}"
        >
          <div class="flex flex-row-reverse items-center">
            {{project.title}}
            <vue-js-icon 
              size="2x" 
              class="projects__item__icon mr-2"
              v-if="project.icon === 'vue'"
              :style="{fill: project.colors.title}"
            />
            <php-icon 
              size="2x" 
              class="projects__item__icon mr-2"
              v-if="project.icon === 'php'"
              :style="{fill: project.colors.title}"
            />
            <react-icon 
              size="2x" 
              class="projects__item__icon mr-2"
              v-if="project.icon === 'reactjs'"
              :style="{fill: project.colors.title}"
            />
            <sass-icon
              size="2x" 
              class="projects__item__icon mr-2"
              v-if="project.icon === 'sass'"
              :style="{fill: project.colors.title}"
            />
            <type-script-icon
              size="2x" 
              class="projects__item__icon mr-2"
              v-if="project.icon === 'typescript'"
              :style="{fill: project.colors.title}"
            />
            <svelte-icon
              size="2x" 
              class="projects__item__icon mr-2"
              v-if="project.icon === 'svelte'"
              :style="{fill: project.colors.title}"
            />
            <word-press-icon
              size="2x" 
              class="projects__item__icon mr-2"
              v-if="project.icon === 'wordpress'"
              :style="{fill: project.colors.title}"
            />
          </div>
          <button 
            class="projects__item__close"
            @click.stop="isActive = false"
            @click="$emit('overflow')"
          />
        </div>
        <p 
          class="project__item__subtitle text-2xl font-semibold mt-2"
          v-html="project.subtitle"
        />
        <p 
          class="project__item__description text-sm mt-2"
          v-html="project.description"
        />
        <p 
          class="project__item__information font-bold mt-2"
          v-html="project.information"
        />
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
        store: this.$store.state.data.portfolio.language[0].pt,
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
  }

  .projects__title {
    letter-spacing: 3px;
  }

  .projects__list {
    .projects__item {
      width: auto;
      z-index: 1;
      background: #201f22;
      transform: scale(1);
      transition: all .2s ease-in-out;

      @screen md {
        &:hover {
          box-shadow: 0px 0px 20px rgb(21, 21, 21);
          cursor: pointer;
          opacity: 1 !important;
          transform: scale(1.1);
          transition: all .2s ease-in-out;
        }
      }

      &:first-child {
        @apply mt-0;
      }

      &.projects__item--active {        
        box-shadow: none !important;
        transform: scale(1) !important;
        transition: none !important;
        cursor: auto !important;

        @apply mt-0 #{!important};

        .projects__item__close {
          position: absolute;
          cursor: pointer;
          right: -8px;
          top: 0px;
          color: #fff;

          @screen md {
            right: -26px;
            top: -15px;
          }

          &:after{
            font-size: 30px;
            font-weight: 200;
            display: inline-block;
            content: "×";
            line-height: 0;
          }
        }

        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;

        @screen md {
          width: calc(100% - 160px);
          height: calc(100% - 160px);
          left: 80px;
          top: calc(0px + 80px);
        }
      }
    
      .projects__item__title{
        font-size: 10px;
        letter-spacing: 3px;

        .projects__item__icon {
          fill: #fff;
        }
        //remove
        &.projects__item__title--vue {
          color: #42b883;
          
          .projects__item__icon {
            fill: #42b883;
          }
        }
        
        &.projects__item__title--php {
          color: #7a86b8;
          
          .projects__item__icon {
            fill: #7a86b8;
          }
        }
        
        &.projects__item__title--reactjs {
          color: #61dafb;
          
          .projects__item__icon {
            fill: #61dafb;
          }
        }
        
        &.projects__item__title--sass {
          color: #bf4080;
          
          .projects__item__icon {
            fill: #bf4080;
          }
        }
        
        &.projects__item__title--typescript {
          color: #ffd300;
          
          .projects__item__icon {
            fill: #ffd300;
          }
        }

        &.projects__item__title--svelte {
          color: #ff3e01;
          
          .projects__item__icon {
            fill: #ff3e01;
          }
        }
        
        &.projects__item__title--wordpress {
          color: #1b769c;
          
          .projects__item__icon {
            fill: #1b769c;
          }
        }
      }
    
      .project__item__subtitle {}
    
      .project__item__description {
        color: #949495;
      }
    
      .project__item__information {
        color: #949495;
        letter-spacing: 1px;
        font-size: 10px;
      }      
    }
  }
}
</style>