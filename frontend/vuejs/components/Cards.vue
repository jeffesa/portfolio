<template>
  <div 
    class="cards"
    :class="isActive !== null  ? 'cards__has-modal' : ''"
    v-if="cards"
  >
    <ul class="cards__list">
      <li 
        class="cards__item p-6 md:p-10 my-2"
        :class="i === isActive && (card.link === '' || card.link === null) ? 'cards__item--active' : ''"
        v-for="(card, i) in cards"
        :key="i"
        @click.stop="isActive = i"
        @click="openLink(card.link)"
      >
        <div 
          class="cards__item__title uppercase flex relative"
        >
          <div class="flex flex-row-reverse items-center">
            <Icon 
              class="mr-2"
              :icon="card.icon" v-if="card.icon"
              :color="card.colors.title"
            >
              {{card.title}}
            </Icon>
          </div>
          <button 
            class="cards__item__close"
            @click.stop="isActive = null"
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
  import Icon from './shared/Icon'

  export default {
    components: { 
      Icon
    },

    props: {
      cards: {
        type: Array,
        required: true
      }
    },

    data(): any {
      return{
        isActive: null as any,
      }
    },

    methods: {
      openLink(link: string): any {
        if (link) {
          this.isActive = null
          window.open(link, '_blank')
        } else {
          this.$emit('overflow')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.cards {
  @screen md {
    &:hover {
      .cards__list {
        .cards__item {
          opacity: .4;
        }
      }
    }
  }

  &.cards__has-modal {
    @screen md {
      &:hover {
        .cards__list {
          .cards__item {
            opacity: 1 !important;
          }
        }
      }
    }
  }

  .cards__list {
    .cards__item {
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

      &.cards__item--active {      
        z-index: 10;  
        box-shadow: none !important;
        transform: scale(1) !important;
        transition: none !important;
        cursor: auto !important;

        @apply mt-0 #{!important};

        .cards__item__close {
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

        position: fixed !important;
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
    
      .cards__item__title {
        font-size: 10px;
        letter-spacing: 3px;

        ::v-deep .icon__text {
          letter-spacing: 3px;
          @apply text-xs;
          @apply font-bold #{!important};
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