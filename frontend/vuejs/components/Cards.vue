<template>
  <div 
    class="cards"
    :class="modalActive !== null  ? 'cards__has-modal' : ''"
    v-if="cards"
  >
    <ul class="cards__list">
      <li 
        class="cards__item p-6 md:p-10 my-2"
        :class="i === modalActive && (card.link === '' || card.link === null) ? 'cards__item--active' : ''"
        v-for="(card, i) in cards"
        :key="i"
        @click.stop="modalActive = i"
        @click="openLink(card.link)"
      >
        <div 
          class="cards__item__title uppercase flex relative z-10"
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
            @click.stop="(modalActive = null, isModalOpen = false)"
            @click="$emit('overflow')"
          />
        </div>
        <p 
          class="cards__item__subtitle text-2xl font-semibold mt-2 relative z-10"
          v-html="card.subtitle"
          :style="{color: card.colors.subtitle}"
        />
        <p 
          class="cards__item__description text-sm mt-2 relative z-10"
          v-html="card.description"
          :style="{color: card.colors.description}"
        />
        <p 
          class="cards__item__information font-bold mt-2 relative z-10"
          v-html="card.information"
          :style="{color: card.colors.information}"
        />
        <div class="cards__item__detach flex">
          <img :src="card.image" class="cards__item__image hidden relative z-10 h-full" />
        </div>
      </li>
    </ul>
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
      cards: {
        type: Array,
        required: true
      }
    },

    data(): any {
      return{
        modalActive: null as any,
        isModalOpen: false as boolean
      }
    },

    methods: {
      openLink(link: string): any {
        if (link) {
          this.modalActive = null
          window.open(link, '_blank')
          console.log('open')
        } else {
          if (this.isModalOpen !== true) {
            this.isModalOpen = true
            this.$emit('overflow')
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.cards {
  $card_decrease_size: 200px;
  $card_margin: 20px;
  $card_width: 960px;

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
      .cards__list {
        .cards__item {
          &:hover {
            opacity: 1 !important;
          }

          &.cards__item--active {
            &::before {
              content: "";
              position: absolute;
              width: calc(100vw + $card_width);
              height: calc(100vw + $card_width);
              background: rgba(#fff, .4);
              top: - $card_decrease_size;
              left: calc((-100vw + $card_width)/2);

              @screen md {
                left: calc((-100vw + $card_width - 200px)/2)
              }

              @screen lg {
                left: calc((-100vw + $card_width)/2)
              }
            }

            &::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 100%;
              background: #201f22;
              left: 0;
              top: 0;
            }
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
        position: fixed !important;
        z-index: 10;  
        box-shadow: none !important;
        transform: scale(1) !important;
        transition: none !important;
        max-width: $card_width;
        @apply cursor-auto #{!important};
        @apply mb-0 #{!important};
        @apply mt-0 #{!important};
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;

        @screen md {
          width: $card_width - 200px;
          height: calc(100% - $card_decrease_size - 100px);
          left: calc((100% - ($card_width - 200px))/2);
          top: calc($card_decrease_size/2) + calc(100px/2);
        }

        @screen lg {
          width: $card_width;
          height: calc(100% - $card_decrease_size);
          left: calc((100% - $card_width)/2);
          top: calc($card_decrease_size/2);
        }

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

        .cards__item__detach {
          //height: calc(100% - $card_decrease_size + 2.5rem + $card_margin/2);
          height: auto;
          margin-top: $card_margin;

          @screen md {
            height: calc(100% - 151px);
          }

          .cards__item__image {
            @apply block #{!important};
          }
        }
      }
    
      .cards__item__title {
        font-size: 10px;
        letter-spacing: 3px;

        :deep(.icon__text) {
          letter-spacing: 3px;
          @apply text-xs;
          @apply font-bold #{!important};
        }
      }
    
      .cards__item__subtitle {}
    
      .cards__item__description {
        color: #949495;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    
      .cards__item__information {
        color: #949495;
        letter-spacing: 1px;
        font-size: 10px;
      }      
    }
  }
}
</style>