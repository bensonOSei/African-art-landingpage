<template>
  <img :src="resoleImageSour(imgName)" :alt="altText" />
</template>

<script>
export default {
  name: "Image",
  props: {
    imgName: String,
    altText: String,
  },
  methods: {
    resoleImageSour(path) {
      let images = require.context("./", false, /\.(png|jpe?g|svg)$/);
      return images("./" + path);
    },
  },
};
</script>
