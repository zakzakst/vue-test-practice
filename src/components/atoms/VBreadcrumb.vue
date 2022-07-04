<template>
  <nav v-if="items.length" class="flex">
    <ol class="inline-flex items-center space-x-1 text-sm">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="inline-flex items-center"
      >
        <svg
          v-if="index !== 0"
          class="w-6 h-6 fill-gray-400"
          viewBox="0 0 20 20"
        >
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
        </svg>
        <component
          :is="item.link ? 'a' : 'span'"
          :href="item.link"
          class="inline-flex items-center text-gray-700 fill-gray-700"
          :class="{'hover:text-gray-400 hover:fill-gray-400 transition': item.link}"
        >
          <svg
            v-if="index === 0"
            class="mr-2 w-4 h-4"
            viewBox="0 0 20 20"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
          {{ item.label }}
        </component>
      </li>
    </ol>
  </nav>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'VBreadcrumb',

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    props = reactive(props);
  },
};
</script>
