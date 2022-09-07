<template>
    <header>
        <div class="logo-container">
            <h1>Logo</h1>
        </div>
        <Nav />
        <div class="openMenu fs-xxl" @click="openNav">
            <font-awesome-icon icon="fa-slid fa-bars" />
        </div>
    </header>
</template>

<script>
import Nav from './Navs/Nav.vue';
import Image from './Images/Image.vue';

    export default {
    name: "Header",
    components: { Nav, Image },
    methods: {
        openNav(){
            let nav = document.querySelector('header nav');
            nav.classList.add('open');
        }
    }
}
</script>

<style lang="scss" scoped>

header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .openMenu {
        display: none;
    }

}

@media screen and (max-width: 50em) {
    header .openMenu{
        display: block;
    }

    nav {
        position: fixed;
        top: 0;
        right: 0;
        width: 0;
        height: 100%;
        flex-direction: column;
        align-items: flex-start;
        // justify-content: center;
        padding-top: $size-xxxhuge;
        background-color: $primary-color-600;
        overflow: hidden;
        z-index: 1000;
    &.open {
            width: 70%;
        }
    }

}

</style>