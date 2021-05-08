<template>
  <Layout>
    <Sidebar
      slot="sidebar"
      :teatrs="teatrsList"
      @change-teatr="handleChangeTeatr"
    />
    <RightBoard slot="rightBoard" :teatr="activeTeatr" />
  </Layout>
</template>

<script>
import Layout from "./components/Layout.vue";
import Sidebar from "./components/Sidebar.vue";
import RightBoard from "./components/RightBoard.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Layout,
    Sidebar,
    RightBoard
  },
  data() {
    return {
      activeTeatrId: null,
      teatrsList: null
    };
  },
  mounted() {
    axios
      .get("http://localhost:2017/public/teatrs")
      .then(response => (this.teatrsList = response.data.teatrs));
  },
  computed: {
    activeTeatr() {
      const fallback = {};
      if (!this.activeTeatrId) {
        return fallback;
      }

      return (
        this.teatrsList.find(({ id }) => id === this.activeTeatrId) || fallback
      );
    }
  },
  methods: {
    handleChangeTeatr({ id }) {
      this.activeTeatrId = id;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #112d32;
  background: var(--ultramarine_80);
}

:root {
  --dark_100: #00ffff; /*#0b0c10; */
  --dark_80: #000;
  --gray: #eae7dc;
  --ultramarine_100: #000;
  --ultramarine_80: #ff0000;
}

html {
  height: 100%;
  /* display: flex; */
}
</style>
