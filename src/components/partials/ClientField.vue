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
  name: "ClientField",
  props: {
    css_class: {
      type: String,
      default: "s12 m6"
    },
    level: {
      type: String,
      default: "Client"
    },
    selected: {
      type: String,
      default: "Choose Client"
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
    getClient() {
      fetch("http://127.0.0.1:8000/clients/")
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
    this.getClient();
  }
};
</script>