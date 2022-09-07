<template>
    <div>
        <NavLink :text="linktext" />
        <font-awesome-icon :icon="linkicon" class="m-l-s prim-color-100" />
    </div>
</template>

<script>
import NavLink from './NavLink.vue';

    export default {
    name: "LinkIcon",
    props: {
        linktext: String,
        linkicon: String
    }
    ,
    components: { NavLink }
}
</script>
