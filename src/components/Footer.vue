<template>
    <footer class="p-xxxl">
        <FooterCard 
          data-aos="zoom-in"
          data-aos-duration="900"
          header="Dive of Creativity" 
          sub="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias." 
        />        
        <FooterCard 
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-delay="300"
          header="Art is Balance" 
          sub="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias." 
        />        
        <FooterCard 
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-delay="400"
          header="Amazing Historical Designs" 
          sub="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias." 
        />        
    </footer>
</template>

<script>
import FooterCard from './Footer/FooterCard.vue';

    export default {
        name: "Footer",
        components: { FooterCard}
    }
</script>


style:<style lang="scss" scoped>

footer {
    display: flex;
    align-items: center;
    background: $primary-color-200;
    width: 100%;
    height: 30%;
    border-top: 5px solid $secondary-color-500;
    gap: 1rem;

}

@media screen and (max-width: 75em) {
    footer {
        height: auto;
    }
}

@media screen and (max-width: 50em) {
    footer {
        flex-direction: column;
    }
}
</style>