<template>
    <div class="stacked-images">
        <slot> Images </slot>
    </div>
</template>

<script>
export default {
    name: "stacked-images"
}
</script>

<style lang="scss" >
.stacked-images{
    display: flex;
    width: 100%;

}

.img-container {
    width: 60px;
    height: 60px;
    background: $primary-color-100;
    border: 3px solid $tertiary-color-200;
    border-radius: 50%;
    overflow: hidden;
    transition: all .2s ease-in-out;

    &:hover{
        margin-top: -10px;
    }

    &:nth-child(n+1):not(:first-child){
        margin-left: -20px;
    }

    @include fitImage(cover);
}
</style>