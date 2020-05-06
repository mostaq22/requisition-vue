<template>
  <DropDown
    :css_class="css_class"
    :level="this.level"
    :selected="this.selected"
    :list="list"
    :id="this.id"
    :text="this.text"
  />
</template>

<script>
import DropDown from "../inputs/DropDown";
export default {
  name: "SiteField",
  props: {
    css_class: {
      type: String,
      default: "s12 m6"
    },
    level: {
      type: String,
      default: "Site"
    },
    selected: {
      type: String,
      default: "Choose Site"
    },
    id: {
      type: String,
      default: "id"
    },
    text: {
      type: String,
      default: "name"
    }
  },
  data() {
    return {
      list: null
    };
  },
  methods: {
    getSite() {
      fetch("http://127.0.0.1:8000/sites/")
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.list = data;
        });
    }
  },
  components: {
    DropDown
  },
  created() {
    this.getSite();
  }
};
</script>