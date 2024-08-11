<template>
  <div>
    <div class="example" @scroll="handleScroll">
      <div>({{ mouseX }}, {{ mouseY }})</div>
      <ul>
        <li v-for="game in gameList" :key="game.id">
          <pre>
          {{ game }}
        </pre
          >
        </li>
      </ul>
    </div>
    <div>
      <nextPage />
      <test></test>
    </div>
  </div>
</template>

<script>
import { gameList, getGameList, mouseX, mouseY, mouseMixins } from "./app.js";
import nextPage from "./components/nextPage.vue";

export default {
  components: {
    nextPage,
  },
  props: {},
  mixins: [mouseMixins],
  data() {
    return {
      gameList,
      mouseX,
      mouseY,
    };
  },
  created() {
    getGameList();
  },
  methods: {
    handleScroll(event) {
      const el = event.target;
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight;
      const clientHeight = el.clientHeight;
      if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
        getGameList();
      }
    },
  },
};
</script>

<style>
.example {
  height: 500px;
  overflow: hidden;
  overflow-y: scroll;
}
</style>

