<template>
  <section 
    class="contact text-xs mt-6 md:mt-8"
    :id="contact.id"
    v-if="contact !== undefined"
  >
    <span 
      class="contact__title block text-white uppercase text-base font-semibold pb-1 lg:pb-0 block md:hidden mb-4"
      v-text="contact.title"
      v-if="contact.title"
    />
    <span 
      class="contact__email block text-white cursor-pointer"
      v-text="language == 'en' ? `Email: ${hideText(contact.email)}` : `Email: ${hideText(contact.email)}`"
      v-if="contact.email"
      @click="showEmail = !showEmail"
    />
    <span 
      class="contact__phone block text-white pt-1 lg:pt-2 cursor-pointer"
      v-text="language == 'en' ? `Phone: ${hideText(contact.phone)}` : `Telefone: ${hideText(contact.phone)}`"
      v-if="contact.phone"
      @click="showPhone = !showPhone"
    />
    <span 
      class="contact__location block pt-1 lg:pt-2" 
      v-text="language == 'en' ? `City: ${contact.location}` : `Cidade: ${contact.location}`"
      v-if="contact.location"
    />
    <!-- <b-field label="Name">
        <b-input v-model="name"></b-input>
    </b-field>
    <b-field label="Email">
        <b-input v-model="email"></b-input>
    </b-field>
    <b-field label="Message"
        :label-position="labelPosition">
        <b-input maxlength="200" type="textarea"></b-input>
    </b-field>
    <b-button type="is-primary">Enviar</b-button> -->
  </section>
</template>

<script lang="ts">
export default {
  data(): any {
    return {
      name: null,
      email: null,
      labelPosition: null,
      showEmail: false,
      showPhone: false
    }
  },

  props: {
    contact: {
      type: Object,
      required: false
    },
    language: {
      type: String,
      required: false
    }
  },

  methods: {
    hideText(text: String): any {
      let textReturn: String

      if (this.isPhoneNumber(text)) {
        textReturn = this.showPhone == false ? `${text.slice(0,10)}...` : text
      } else {
        textReturn = this.showEmail == false ? `${text.substring(0, text.split('@')[0].length + 1)}...` : text
      }

      return textReturn
    },

    isPhoneNumber(phone: String): any {
      return /^[\+]?\d{2,}?[(]?\d{2,}[)]?[-\s\.]?\d{2,}?[-\s\.]?\d{2,}[-\s\.]?\d{0,9}$/im.test(phone.replace('-', '').replace(' ', ''));  
    }

  }
}
</script>

<style lang="scss" scoped>
  .contact {
    :deep() {
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
      // @apply text-xs;
      // @apply font-semibold;
      // @apply leading-6;
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