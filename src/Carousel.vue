<template>
<div class="v-owl-carousel" ref="body" :class="['owl-carousel', 'owl-theme']">
  <slot/>
</div>
</template>

<script>
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

export default {
  name: 'v-owl-carousel',
  props: {
    items : { default: 3 },
    margin : { default: 0 },
    loop : { default: false },
    center : { default: false },
    nav : { default: true },
    autoplay : { default: false },
    autoplaySpeed : { default: false },
    rewind : { default: true },
    mouseDrag : { default: true },
    touchDrag: { default: true },
    pullDrag: { default: true },
    freeDrag: { default: false },
    stagePadding: { default: 0 },
    autoWidth: { default: false },
    autoHeight: { default: false },
    dots: { default: true },
    autoplayTimeout: { default: 5000 },
    autoplayHoverPause: { default: false },
    responsive: { default() { return {} } },
  },
  mounted() {
    const owl = $(this.$refs.body).owlCarousel({
      items: this.items,
      margin: this.margin,
      loop: this.loop,
      center: this.center,
      nav: this.nav,
      autoplay: this.autoplay,
      autoplaySpeed: this.autoplaySpeed,
      rewind: this.rewind,
      mouseDrag: this.mouseDrag,
      touchDrag: this.touchDrag,
      pullDrag: this.pullDrag,
      freeDrag: this.freeDrag,
      stagePadding: this.stagePadding,
      autoWidth: this.autoWidth,
      autoHeight: this.autoHeight,
      dots: this.dots,
      autoplayTimeout: this.autoplayTimeout,
      autoplayHoverPause: this.autoplayHoverPause,
      responsive: this.responsive,
      onInitialize: (carousel) => { this.$emit('init', carousel, $(carousel.currentTarget)); },
      onInitialized: (carousel) => { this.$emit('initd', carousel, $(carousel.currentTarget)); },
      onResize: (carousel) => { this.$emit('resize', carousel, $(carousel.currentTarget)); },
      onResized: (carousel) => { this.$emit('resized', carousel, $(carousel.currentTarget)); },
      onChange: (carousel) => { this.$emit('change', carousel, $(carousel.currentTarget)); },
      onChanged: (carousel) => { this.$emit('changed', carousel, $(carousel.currentTarget)); },
      onTranslate: (carousel) => { this.$emit('translate', carousel, $(carousel.currentTarget)); },
      onTranslated: (carousel) => { this.$emit('translated', carousel, $(carousel.currentTarget)); },
    });
  },
}
</script>
