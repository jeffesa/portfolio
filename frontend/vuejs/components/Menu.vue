<template>
  <div class="menu mt-16 hidden md:block">
    <nav>
      <ul class="flex flex-row flex-col">
        <li class="md:my-4 menu__item">
          <a class="menu__item__link menu__item__link--active flex items-center" href="">
            <span class="text-xs">01</span>
            <span class="menu__item__line inline-block w-6 mx-4"></span>
            <span class="text-xs uppercase">Projects</span>
          </a>
        </li>
        <li class="md:my-4 menu__item">
          <a class="menu__item__link flex items-center" href="">
            <span class="text-xs">02</span>
            <span class="menu__item__line inline-block w-6 mx-4"></span>
            <span class="text-xs uppercase">Experiences</span>
          </a>
        </li>
        <li class="md:my-4 menu__item">
          <a class="menu__item__link flex items-center" href="">
            <span class="text-xs">03</span>
            <span class="menu__item__line inline-block w-6 mx-4"></span>
            <span class="text-xs uppercase">Interviews</span>
          </a>
        </li>
        <li class="md:my-4 menu__item">
          <a class="menu__item__link flex items-center" href="">
            <span class="text-xs">04</span>
            <span class="menu__item__line inline-block w-6 mx-4"></span>
            <span class="text-xs uppercase">About my portfolio</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
  console.log('blabla')
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
          @apply w-12;
        }
      }
    }
  }
}
</style>