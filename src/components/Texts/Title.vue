<template>
    <div class="title">
        <!-- <h1>{{ mainTitle }}</h1> -->
        <slot name="mainTitle" >Header</slot>
        <slot name="subTitle">Sub header</slot>
    </div>
</template>

<script>

    export default {
        name: "Title",
    }
</script>