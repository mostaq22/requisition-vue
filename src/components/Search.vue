<template>
  <div class="col s12 m7 l12">
    <form action method="post">
      <DropDown css_class="l3" v-bind="client" v-on:take-data="setValue" />
      <DropDown css_class="l3" v-bind="department" v-on:take-data="setValue" />
      <DropDown
        css_class="l3"
        :level="this.department.level"
        :selected_text="this.department.selected_text"
        :list="this.department.list"
        :id="this.department.id"
        :text="this.department.text"
      />
      <!-- <ProjectField /> -->
      <!-- <ClientField /> -->
    </form>
  </div>
</template>

<script>
// import ProjectField from "./partials/ProjectField";
// import ClientField from "./partials/ClientField";
import DropDown from "./inputs/DropDown";
import API from "../service";
export default {
  name: "Search",
  components: {
    DropDown,
    // ProjectField,
    // ClientField
  },
  data() {
    return {
      client: {
        name: "client",
        selected_text: "Choose Client",
        level: "Client",
        id: "id",
        text: "name",
        list: null,
        selected: null,
      },
      department: {
        name: "department",
        selected_text: "Choose Department",
        level: "Department",
        id: "id",
        text: "name",
        list: null,
        selected: null,
      },
      project: {
        name: "project",
        selected_text: "Choose Project",
        level: "Project",
        id: "id",
        text: "name",
        list: null,
        selected: null,
      },
      site: {
        name: "site",
        selected_text: "Choose Site",
        level: "Site",
        id: "id",
        text: "name",
        list: null,
        selected: null,
      },
    };
  },
  methods: {
    setValue(name, event) {
      var obj = this[name];
      obj.selected = event.target.value;
    },
    getClient() {
      API.getClient().then((response) => {
        this.client.list = response.data;
      });
    },
    getDepartment() {
      API.getDepartment().then((response) => {
        this.department.list = response.data;
      });
    },
    getProject({ client_id = null, department_id = null } = {}) {
      API.getProject({
        client_id: client_id,
        department_id: department_id,
      }).then((response) => {
        // console.log(response.data);
        this.projects.list = response.data;
      });
    },
    getSite({ project_id = null } = {}) {
      API.getSite({ project_id: project_id }).then((response) => {
        // console.log(response.data);
        this.sites.list = response.data;
      });
    },
  },
  created() {
    this.getClient();
    this.getDepartment();
  },
};
</script>
