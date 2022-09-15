<template>
  <div class="projects">
    <ul class="projects__list">
      <li class="projects__item p-10 my-2">
        <p class="projects__item__language font-bold uppercase">TypeScript</p>
        <p class="project__item__name text-2xl font-semibold mt-2">dinerojs/dinero.js</p>
        <p class="project__item__description text-sm mt-2">Create, calculate, and format money in JavaScript and TypeScript.</p>
        <p class="project__item__date font-bold mt-2">01 Jan 2022</p>
      </li>
      <li class="projects__item p-10 my-2">
        <p class="projects__item__language font-bold uppercase">TypeScript</p>
        <p class="project__item__name text-2xl font-semibold mt-2">dinerojs/dinero.js</p>
        <p class="project__item__description text-sm mt-2">Create, calculate, and format money in JavaScript and TypeScript.</p>
        <p class="project__item__date font-bold mt-2">01 Jan 2022</p>
      </li>
      <li class="projects__item p-10 my-2">
        <p class="projects__item__language font-bold uppercase">TypeScript</p>
        <p class="project__item__name text-2xl font-semibold mt-2">dinerojs/dinero.js</p>
        <p class="project__item__description text-sm mt-2">Create, calculate, and format money in JavaScript and TypeScript.</p>
        <p class="project__item__date font-bold mt-2">01 Jan 2022</p>
      </li>
      <li class="projects__item p-10 my-2">
        <p class="projects__item__language font-bold uppercase">TypeScript</p>
        <p class="project__item__name text-2xl font-semibold mt-2">dinerojs/dinero.js</p>
        <p class="project__item__description text-sm mt-2">Create, calculate, and format money in JavaScript and TypeScript.</p>
        <p class="project__item__date font-bold mt-2">01 Jan 2022</p>
      </li>
      <li class="projects__item p-10 my-2">
        <p class="projects__item__language font-bold uppercase">TypeScript</p>
        <p class="project__item__name text-2xl font-semibold mt-2">dinerojs/dinero.js</p>
        <p class="project__item__description text-sm mt-2">Create, calculate, and format money in JavaScript and TypeScript.</p>
        <p class="project__item__date font-bold mt-2">01 Jan 2022</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.projects {
  &:hover {
    .projects__list {
      .projects__item {
        opacity: .4;
      }
    }
  }

  .projects__list {
    .projects__item {
      background: #201f22;
      transition: all .2s ease-in-out;
    
      &:hover {
        box-shadow: 0px 0px 20px rgb(21, 21, 21);
        transform: scale(1.1);
        cursor: pointer;
        opacity: 1 !important;
      }
    
      .projects__item__language{
        font-size: 10px;
        letter-spacing: 3px;
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