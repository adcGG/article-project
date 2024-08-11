<template>
  <button @click="nextPage">增加一页</button>
</template>

<script>
import { getGameList } from "../app";
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    nextPage() {
      getGameList();
    },
  },
};
</script>

<style></style>
