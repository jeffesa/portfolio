<template>
  <div 
    class="menu mt-16 hidden lg:block" 
    v-if="menu"
  >
    <nav>
      <ul class="flex flex-row flex-col">
        <li 
          class="md:my-4 menu__item"
          v-for="(item, i) in menu"
          :key="i"
        >
          <a 
            :href="`#${item.id}`"
            :class="[
              'menu__item__link flex items-center', 
              {'menu__item__link--active': (i == 0 && menuActive === '') || (item.id === isActive && isActive === 0) || menuActive === item.id}
            ]"
            @click="isActive = item.id"
          >
            <span 
              class="text-xs"
              v-text="`0${parseInt(i) + 1}`"
            />
            <span class="menu__item__line inline-block w-6 mx-4"></span>
            <span 
              class="text-xs uppercase"
              v-text="item.name"
            />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
  export default {
    props: {
      menu: {
        type: Object,
        required: true
      },
      menuActive: {
        type: String,
        required: true
      }
    },

    data(): any {
      return {
        isActive: 0 as number
      }
    },
  }
</script>

<style lang="scss" scoped>
.menu {
  .menu__item {
    .menu__item__link {
      width: fit-content;

      &:hover {
        .menu__item__line {
          @apply w-12;
        }
        .menu__item__line {
          background: #fff;
        }
        .text-xs {
          color: #fff;
        }
      }
      .menu__item__line {
        transition: all .2s ease-in-out;
        height: 1px;
        background: #949495;
      }
      .text-xs {
        transition: all .2s ease-in-out;
        color: #949495;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 2px;
      }
      &.menu__item__link--active {
        .menu__item__line {
          background: #fff;
        }
        .text-xs {
          color: #fff;
        }
        .menu__item__line {
          @apply w-12 #{!important};
        }
      }
    }
  }
}
</style>