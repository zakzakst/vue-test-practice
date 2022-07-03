<template>
  <transition name="v-fade">
    <div v-if="show" class="flex bg-gray-100 px-6 py-4 rounded border border-gray-700" :class="classes">
      <div v-if="$slots.icon" class="flex-shrink-0 mr-4">
        <slot name="icon" />
      </div>
      <div class="self-center">
        <slot />
      </div>
      <button
        v-if="dismissible"
        type="button"
        class="absolute top-4 right-4 w-4 h-4 flex justify-center items-center fill-gray-700 hover:fill-gray-400 transition"
        aria-label="閉じる"
        @click="onClickDismiss"
      >
        <!-- <svg class="w-full h-full">
          <use xlink:href="~/bootstrap-icons/bootstrap-icons.svg#x-lg"/>
        </svg> -->
        <svg
          width="16"
          height="16"
          class="w-full h-full"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </button>
    </div>
  </transition>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'VAlert',

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      validator: function (value) {
        const colors = [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
        ];
        return colors.indexOf(value) !== -1;
      },
    },
    dismissible: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['clickDismiss'],

  setup(props, { emit }) {
    props = reactive(props);

    return {
      classes: computed(() => {
        const result = {
          'relative pr-12': props.dismissible,
        };
        if (props.color) {
          result[`--color-${props.color}`] = true;
        }
        return result;
      }),
      onClickDismiss() {
        emit('clickDismiss');
      },
    };
  },
};
</script>

<style scoped>
/* 色 */
div.--color-primary {
  @apply
    bg-primary-light
    border-primary-border;
}
div.--color-secondary {
  @apply
    bg-secondary-light
    border-secondary-border;
}
div.--color-success {
  @apply
    bg-success-light
    border-success-border;
}
div.--color-danger {
  @apply
    bg-danger-light
    border-danger-border;
}
div.--color-warning {
  @apply
    bg-warning-light
    border-warning-border;
}
div.--color-info {
  @apply
    bg-info-light
    border-info-border;
}
</style>
