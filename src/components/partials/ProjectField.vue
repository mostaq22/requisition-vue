<template>
  <DropDown
    :css_class="css_class"
    :level="this.level"
    :selected="this.selected"
    :list="list"
    :id="this.id"
    :text="this.text"
    v-on:take-data="loadSite"
  />
</template>

<script>
import DropDown from "../inputs/DropDown";
export default {
  name: "ProjectField",
  props: {
    css_class: {
      type: String,
      default: "s12 m6",
    },
    level: {
      type: String,
      default: "Project",
    },
    selected: {
      type: String,
      default: "Choose Project",
    },
    id: {
      type: String,
      default: "id",
    },
    text: {
      type: String,
      default: "name",
    },
  },
  data() {
    return {
      list: null,
    };
  },
  components: {
    DropDown,
  },
  methods: {
    getProject() {
      fetch("http://127.0.0.1:8000/projects/")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.list = data;
        });
    },
    loadSite(name, event) {
      console.log(event.target.value);
    },
  },
  created() {
    this.getProject();
  },
};
</script>
