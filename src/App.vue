<template>
  <Main />
  <Footer />
</template>

<script>
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import { onMounted } from "vue";
import AOS from "aos";

export default {
  name: "App",
  components: {
    Main,
    Footer,
  },
  setup() {
    onMounted(() => {
      AOS.init();
    });
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;

  
}
</style>
