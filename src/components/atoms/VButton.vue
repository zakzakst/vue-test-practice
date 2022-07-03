<template>
  <button
    type="button"
    :class="classes"
    :disabled="disabled"
    @click="onClick"
  >{{ label }}</button>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'VButton',

  props: {
    label: {
      type: String,
      required: true,
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
    size: {
      type: String,
      validator: function (value) {
        const sizes = [
          'small',
          'large',
        ];
        return sizes.indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);

    return {
      classes: computed(() => {
        const result = {
          '--outlined': props.outlined,
          'rounded-full': props.rounded,
        };
        if (props.color) {
          result[`--color-${props.color}`] = true;
        }
        if (props.size) {
          result[`--size-${props.size}`] = true;
        }
        return result;
      }),
      onClick() {
        emit('click');
      },
    };
  },
};
</script>