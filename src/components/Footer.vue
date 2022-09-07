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
    <div class="footnote bg-prim-color-300 ter-color-400 fs-xxs">
        <p>Developed by <a href="https://www.github.com/bensonOSei">Benson</a></p>
        <p>Designed by <a href="https://twitter.com/akinbami_elijah">Akinbami Akinsola Elijah</a></p>
    </div>
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

.footnote {
    display:flex;
    flex-direction: column;
    text-align: center;
    padding: $size-s;

    a {
        color: $tertiary-color-500;
        font-style: italic;

        &:hover {
            text-decoration: underline;
        }
    }
    p{
        margin: 0.125rem;
    }
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