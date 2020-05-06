<template>
  <Layout>
    <template v-slot:content>
      <!-- Advance form Section -->
      <div class="section">
        <div class="row">
          <div class="col s12">
            <Search></Search>
          </div>
        </div>
      </div>
      <!-- List Section-->
      <div class="section">
        <div class="row">
          <div class="col s12">
            <List></List>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "../Layout";
import List from "./List";
import Search from "./Search";
export default {
  name: "HomePage",
  props: {},
  components: {
    Layout,
    List,
    Search
  }
};
</script>

<style scoped>
</style>
