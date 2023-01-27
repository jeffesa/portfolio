<template>
  <section 
    class="contact text-xs mt-8 md:mt-20"
    :id="contact.id"
    v-if="contact !== undefined"
  >
    <span 
      class="contact__title block text-white uppercase pb-1 lg:pb-5"
      v-text="contact.title"
      v-if="contact.title"
    />
    <!-- <span 
      class="contact__email block text-white"
      v-text="contact.email"
      v-if="contact.email"
    />
    <span 
      class="contact__phone block text-white pt-1 lg:pt-2"
      v-text="contact.phone"
      v-if="contact.phone"
    />
    <span 
      class="contact__location block pt-1 lg:pt-2" 
      v-text="contact.location" 
      v-if="contact.location"
    /> -->
    <b-field label="Name">
        <b-input v-model="name"></b-input>
    </b-field>
    <b-field label="Email">
        <b-input v-model="email"></b-input>
    </b-field>
    <b-field label="Message"
        :label-position="labelPosition">
        <b-input maxlength="200" type="textarea"></b-input>
    </b-field>
    <b-button type="is-primary">Enviar</b-button>
  </section>
</template>

<script lang="ts">
export default {
  data(): any {
    return {
      name: null,
      email: null,
      labelPosition: null,
    }
  },

  props: {
    contact: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .contact {
    :deep {
      .label {
        @apply text-white;
        @apply text-sm;
      }

      .button {
        background: #fff;
        color: #000;
      }

      .input,
      .textarea {
        border: 0;
      }
    }
    
    .contact__title {
      @apply text-xs;
      @apply font-semibold;
      @apply leading-6;
      letter-spacing: 3px;

      @screen lg {
        @apply text-lg;
      }
    }

    .contact__email {
      color: #fff;
      @apply text-sm;
      @apply font-semibold;
      @apply leading-6;

      @screen lg {
        @apply text-base;
      }
    }

    .contact__phone {
      color: #fff;
      @apply text-xs;
      @apply font-semibold;
      @apply leading-4;

      @screen lg {
        @apply text-sm;
      }
    }

    .contact__location {
      color: #878788;
      @apply text-xs;
      @apply font-semibold;
      @apply leading-4;
    }
  }
</style>