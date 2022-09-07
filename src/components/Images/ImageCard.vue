<template>
    <div class="image-cards">
        <div class="image-card bg-prim-color-400" data-aos="fade-up" data-aos-duration="700" >
            <Image imgName="Africaan-woman.png" />
        </div>
        <div class="image-card bg-prim-color-100" data-aos="fade-in">
            <Image imgName="Africcan-woman3.png" />
        </div>
    </div>
</template>

<script>
import Image from './Image.vue';
export default {
    name: "ImageCard",
    components: { Image }
}
</script>


<style lang="scss" scoped>

.image-cards{
    display: flex;
    
}

.image-card{
    width: 180px;
    height: 230px;
    overflow: hidden;
    transition: all .2s ease-in-out;

    @include fitImage(cover);

    &:first-child{
        margin-top: 20px;
        z-index: 1;
        animation: wobble-ver-left 5.5s infinite both;

    }

    &:nth-child(2){
        margin-left: -20px;
        animation: wobble-hor-bottom 5s ease-in-out infinite both;

        &:hover {
        z-index: 1000;
    }


    }

}
</style>