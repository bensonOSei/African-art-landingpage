<template>
  <nav>
    <LinkIcon linktext="Webinar" linkicon="fa-solid fa-chevron-down" />
    <NavLink text="Gallery" />
    <NavLink text="Bookings" />
    <NavLink text="About us" />
    <NavLink text="Contact us" />
    <div class="closeNav" @click="closeNav">
      <font-awesome-icon icon="fa-solid fa-xmark" class="fs-xxxl prim-color-100" />
    </div>
  </nav>
</template>

<script>
import NavLink from "./NavLink.vue";
import LinkIcon from "./LinkIcon.vue";

export default {
  name: "Nav",
  components: { NavLink, LinkIcon },
  methods: {
    closeNav() {
      document.querySelector('nav').classList.remove('open')
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  transition: width .2s ease-in-out;
}

.closeNav {
  color: $tertiary-color-100;
  display: none;
  

  @media screen and (max-width: 50em) {
    display: block;
    position: absolute;
    top: 20px;
    right: 50px;
  }
}

</style>
