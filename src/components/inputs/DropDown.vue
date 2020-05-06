<template>
  <!--  -->
  <!-- <div class="input-field col" :class="css_class"> -->
  <div class="col" :class="css_class">
    <label>{{ this.level }}</label>
    <select v-on:change="$emit('take-data', name, $event)" :name="name">
      <option value disabled selected>{{ this.selected_text }}</option>
      <option
        v-for="(item, index) in this.list"
        :value="drawValue(item)"
        :key="index"
        >{{ drawText(item) }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  methods: {
    drawText(obj) {
      return obj[this.text];
    },
    drawValue(obj) {
      return obj[this.id];
    },
  },
  props: {
    css_class: {
      type: String,
      default: "s12 m6 l2",
    },
    name: {
      type: String,
      default: null,
    },
    level: {
      type: String,
      default: "Level",
    },
    selected_text: {
      type: String,
      default: "Choose your option",
    },
    list: {
      type: Array,
      default: null,
    },
    id: {
      type: String,
      default: "id",
    },
    text: {
      type: String,
      default: "text",
    },
    change: {
      type: String,
      default: null,
    },
  },
  created() {},
};
</script>
<style scoped>
select {
  display: inline;
  height: 2rem;
  border: 1px solid #d3d1d1;
}
</style>
