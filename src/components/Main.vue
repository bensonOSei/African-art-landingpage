<template>
  <main>
    <section class="main-content p-xxxhuge">
      <Header />
      <section class="content">
        <StackedImages>
          <slot>
            <div class="img-container bg-sec-color-400" data-aos="fade-right">
              <Image imgName="Africaan-woman.png" />
            </div>
            <div
              class="img-container bg-alt-color-600"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Image imgName="African-woman2.png" />
            </div>
            <div
              class="img-container"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <Image imgName="Africcan-woman3.png" />
            </div>
          </slot>
        </StackedImages>
        <Title>
          <template #mainTitle>
            <h1 class="fs-xhuge" data-aos="fade-left">
              Art. Restructurng Your Mind.
            </h1>
          </template>
          <template #subTitle>
            <p data-aos="fade-left" data-aos-delay="150">
              To live a creative life, we must lose our fear of being wrong. We
              must never forget that art is not a form of propaganda; it is a
              form of truth. What i dream of is an art of balance.
            </p>
          </template>
        </Title>
        <Button text="Watch Reel" data-aos="fade-up" data-aos-duration="1000" />
      </section>
    </section>
    <aside class="bg-sec-color-100 p-xxhuge">
      <Button text="Request Demo" />
      <div class="content">
        <StackedImages>
          <slot>
            <div class="img-container bg-alt-color-100"></div>
            <div class="img-container bg-sec-color-400 center-me">
              <font-awesome-icon
                icon="fa-solid fa-image"
                class="prim-color-200 fs-xl"
              />
            </div>
          </slot>
        </StackedImages>
        <Title data-aos="fade-right" data-aos-anchor-placement="top-bottom">
          <template #mainTitle>
            <h2>Art! The Future of Historical Moments</h2>
          </template>
          <template #subTitle>
            <p>
              We have streamlined some of our beautiful caramel roll for your
              preview
            </p>
          </template>
        </Title>
        <ImageCard />
      </div>
    </aside>
  </main>
</template>

<script>
import Header from "./Header.vue";
import Title from "./Texts/Title.vue";
import Button from "./Buttons/Button.vue";
import StackedImages from "./Images/StackedImages.vue";
import Image from "./Images/Image.vue";
import ImageCard from "./Images/ImageCard.vue";

export default {
  name: "Main",
  components: { Header, Title, Button, StackedImages, Image, ImageCard },
};
</script>

style:
<style lang="scss" scoped>
main {
  display: flex;
  height: 70%;
  > section {
    width: 60%;
  }

  aside {
    display: flex;
    flex-direction: column;
    width: 40%;
    a {
      align-self: flex-end;
      width: fit-content;
    }
  }
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background: red;
  @include responsiveWidth(50rem);
  height: 100%;

  a {
    width: fit-content;
  }
}

.center-me {
  @include gridCenter;
}

@media screen and (max-width: 75em) {
  main {
    flex-direction: column;
    height: auto;

    > section,
    aside {
      width: 100%;
    }
  }

  .content {
    margin-top: $size-xxxhuge;
  }
}
</style>
