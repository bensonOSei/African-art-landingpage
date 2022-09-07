<template>
  <a href="#" class=" m-l-xxxl fw-normal">{{ text }}</a>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
a {
    color: $alt-color-100;
    transition: color .2s ease-in-out;

    &:hover {
    //  font-weight: bold;
     color: $secondary-color-400;
    }
}


@media screen and (max-width: 50rem) {

    a{
        color: $tertiary-color-300;
        margin-top: $size-xxxl;
    }
    
}
</style>
