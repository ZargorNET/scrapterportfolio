<template>
  <div
      class="px-6 py-2 rounded-3xl cursor-pointer select-none transition-colors flex child:flex-shrink-0 w-fit items-center relative"
      :class="themeClasses"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  theme: "blurple" | "bglight" | "red";
}>();

const themeClasses = computed(() => {
  switch (props.theme) {
    case "blurple":
      return "bg-blurple hover:bg-blurplelight";
    case "bglight":
      return "bg-bglight hover:bg-bglighter";
    case "red":
      return "bg-red hover:bg-redlight";
    default:
      return "";
  }
});
</script>
