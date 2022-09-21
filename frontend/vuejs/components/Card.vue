<template>
  <div 
    class="card"
    :class="isActive !== false  ? 'card__has-modal' : ''"
    v-if="cards"
  >
    <h2 class="card__title text-xs font-semibold mt-2 uppercase block md:hidden mt-20 mb-8">Projects</h2>
    <ul class="card__list">
      <li 
        class="card__item p-6 md:p-10 my-2"
        :class="i === isActive ? 'card__item--active' : ''"
        v-for="(card, i) in cards"
        :key="i"
        @click.stop="isActive = i"
        @click="$emit('overflow')"
      >
        <div 
          class="card__item__title font-bold uppercase flex relative"
          :style="{color: card.colors.title}"
        >
          <div class="flex flex-row-reverse items-center">
            {{card.title}}
            <vue-js-icon 
              size="2x" 
              class="card__item__icon mr-2"
              v-if="card.icon === 'vue'"
              :style="{fill: card.colors.title}"
            />
            <php-icon 
              size="2x" 
              class="card__item__icon mr-2"
              v-if="card.icon === 'php'"
              :style="{fill: card.colors.title}"
            />
            <react-icon 
              size="2x" 
              class="card__item__icon mr-2"
              v-if="card.icon === 'reactjs'"
              :style="{fill: card.colors.title}"
            />
            <sass-icon
              size="2x" 
              class="card__item__icon mr-2"
              v-if="card.icon === 'sass'"
              :style="{fill: card.colors.title}"
            />
            <type-script-icon
              size="2x" 
              class="card__item__icon mr-2"
              v-if="card.icon === 'typescript'"
              :style="{fill: card.colors.title}"
            />
            <svelte-icon
              size="2x" 
              class="card__item__icon mr-2"
              v-if="card.icon === 'svelte'"
              :style="{fill: card.colors.title}"
            />
            <word-press-icon
              size="2x" 
              class="card__item__icon mr-2"
              v-if="card.icon === 'wordpress'"
              :style="{fill: card.colors.title}"
            />
          </div>
          <button 
            class="card__item__close"
            @click.stop="isActive = false"
            @click="$emit('overflow')"
          />
        </div>
        <p 
          class="project__item__subtitle text-2xl font-semibold mt-2"
          v-html="card.subtitle"
        />
        <p 
          class="project__item__description text-sm mt-2"
          v-html="card.description"
        />
        <p 
          class="project__item__information font-bold mt-2"
          v-html="card.information"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { VueJsIcon, PhpIcon, ReactIcon, SassIcon, TypeScriptIcon, SvelteIcon, WordPressIcon } from 'vue-simple-icons'

  export default {
    components: { VueJsIcon, PhpIcon, ReactIcon, SassIcon, TypeScriptIcon, SvelteIcon, WordPressIcon },

    props: {
      cards: {
        type: Object,
        required: true
      }
    },

    data(): any {
      return{
        isActive: null as any,
      }
    },
  }
</script>

<style lang="scss" scoped>
.card {
  @screen md {
    &:hover {
      .card__list {
        .card__item {
          opacity: .4;
        }
      }
    }
  }

  &.card__has-modal {
    @screen md {
      &:hover {
        .card__list {
          .card__item {
            opacity: 1 !important;
          }
        }
      }
    }
  }

  .card__title {
    letter-spacing: 3px;
  }

  .card__list {
    .card__item {
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

      &.card__item--active {        
        box-shadow: none !important;
        transform: scale(1) !important;
        transition: none !important;
        cursor: auto !important;

        @apply mt-0 #{!important};

        .card__item__close {
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
    
      .card__item__title{
        font-size: 10px;
        letter-spacing: 3px;

        .card__item__icon {
          fill: #fff;
        }
        //remove
        &.card__item__title--vue {
          color: #42b883;
          
          .card__item__icon {
            fill: #42b883;
          }
        }
        
        &.card__item__title--php {
          color: #7a86b8;
          
          .card__item__icon {
            fill: #7a86b8;
          }
        }
        
        &.card__item__title--reactjs {
          color: #61dafb;
          
          .card__item__icon {
            fill: #61dafb;
          }
        }
        
        &.card__item__title--sass {
          color: #bf4080;
          
          .card__item__icon {
            fill: #bf4080;
          }
        }
        
        &.card__item__title--typescript {
          color: #ffd300;
          
          .card__item__icon {
            fill: #ffd300;
          }
        }

        &.card__item__title--svelte {
          color: #ff3e01;
          
          .card__item__icon {
            fill: #ff3e01;
          }
        }
        
        &.card__item__title--wordpress {
          color: #1b769c;
          
          .card__item__icon {
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