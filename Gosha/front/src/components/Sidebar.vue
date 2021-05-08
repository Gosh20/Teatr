<template>
  <div class="sidebar">
    <SidebarRow
      v-for="(teatr, index) in teatrs"
      :key="teatr.id"
      :id="teatr.id"
      :row-number="index + 1"
      :title="teatr.shortName"
      @change-teatr="$emit('change-teatr', $event)"
    />
  </div>
</template>

<script>
import SidebarRow from "./SidebarRow.vue";

export default {
  name: "Sidebar",
  components: {
    SidebarRow
  },
  props: {
    teatrs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.sidebar {
  overflow-y: auto;
  height: 100%;
  background: var(--dark_100);
  border-right: 1px solid var(--ultramarine_80);
}
</style>
