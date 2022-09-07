<template>
  <div>
    <div class="icon">
      <div class="inner">
        <font-awesome-icon icon="fa-solid fa-check" />
      </div>
    </div>
    <Title>
      <template #mainTitle>
        <h3 class="fw-heavy m-h-xxxs">{{ header }}</h3>
      </template>

      <template #subTitle>
        <p class="m-0 p-0">{{ sub }}</p>
      </template>
    </Title>
  </div>
</template>

<script>
import Title from "../Texts/Title.vue";

export default {
  name: "FooterCard",
  props: {
    header: String,
    sub: String,
  },
  components: { Title },
};
</script>

<style lang="scss" scoped>
div {
  color: $tertiary-color-100;
}

.icon {
  width: 50px;
  height: 50px;
  background-color: $tertiary-color-100;
  border-radius: 50%;
  color: $primary-color-400;
  @include gridCenter;

  .inner {
    @extend .bg-prim-color-200;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    @include gridCenter;
    position: relative;
    isolation: isolate;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        width: 90%;
        height: 100%;
        background: inherit;
        border-radius: 5px;
        z-index: -2;
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        width: 90%;
        height: 100%;
        background: inherit;
        transform: rotate(45deg);
        border-radius: 5px;
        z-index: -2;
    }
  }
}
</style>
