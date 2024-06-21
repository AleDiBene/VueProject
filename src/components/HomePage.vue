<script>
// Utilizza percorsi relativi per importare i componenti
import NavBar from "./NavBar.vue";
import HomeComp from "./HomeComp.vue";
import ProductList from "./ProductList.vue";
import VideoComp from "./VideoComp.vue";
import FooterComp from "./FooterComp.vue";

export default {
  name: "HomePage",
  methods: {
    chiSonoClicked() {
      this.$emit("chiSonoClicked");
    },
  },
 
  components: {
    NavBar,
    HomeComp,
    ProductList,
    VideoComp,
    FooterComp,
  }
}
</script>

<template>
  
  <!-- Utilizza i nomi dei componenti come tag per inserirli nel template -->
  <NavBar />
  <HomeComp />
  <ProductList />
  <VideoComp />
  <FooterComp />
 
</template>

<style > 

</style>
