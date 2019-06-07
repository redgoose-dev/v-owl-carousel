<template>
  <div>
    <h1>v-owl-carousel component</h1>
    <p>for development area</p>
    <ul>
      <li>vue component: <a href="https://github.com/93gaurav93/v-owl-carousel" target="_blank">https://github.com/93gaurav93/v-owl-carousel</a></li>
      <li>owl-carousel: <a href="https://owlcarousel2.github.io/OwlCarousel2/" target="_blank">https://owlcarousel2.github.io/OwlCarousel2/</a></li>
    </ul>

    <h2>Demo</h2>
    <div class="demo">
      <Carousel :items="1">
        <div>
          <img src="https://images.unsplash.com/photo-1559863345-02eae058c2c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" alt="">
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1559695684-0d4e0e7b8799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="">
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1559806137-efe000d2728d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2553&q=80" alt="">
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1559662780-c3bab6f7e00b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt="">
        </div>
      </Carousel>
    </div>
  </div>
</template>

<script>
import Carousel from '../src/Carousel.vue';

export default {
  components: {
    Carousel,
  },
}
</script>

<style scoped>
  .demo {
    border: 1px solid #eee;
    box-sizing: border-box;
    padding: 30px;
  }
</style>
