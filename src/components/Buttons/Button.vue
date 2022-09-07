<template>
    <a 
    class="bg-prim-color-100-hover ter-color-100 p-s"
    href="#"
    >
        {{ text }}
    </a>    
</template>

<script>
export default {
    name: "Button",
    props: {
        text: String,
    }
}
</script>