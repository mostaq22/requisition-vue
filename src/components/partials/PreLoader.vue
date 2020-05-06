<template>
  <div>
    <div class="progress" v-if="!this.content">
      <div class="indeterminate"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PreLoader",
  props: {
    content: {
      required: true
    }
  }
};
</script>