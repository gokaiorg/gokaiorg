<template>

  <section id="front-banner"
           class="w-full relative overflow-hidden px-4 py-16 md:pt-4 md:pb-0 md:px-16 z-10 m-auto text-white">

    <div class="container max-w-screen-xl px-4 mx-auto items-center relative z-10 flex flex-row">
      <div
        data-aos="fade-up"
        data-aos-delay="4000"
        class="hidden md:block bg-contain bg-no-repeat bg-center h-96 w-96 aos-init aos-animate"
        style="background-image: url('beni-hero.png')">
      </div>
      <div
        class="flex-1 lg:max-w-2xl">
        <h1
          class="mb-4 text-4xl md:text-5xl font-bold aos-init aos-animate"
          data-aos="fade-up">
          {{ $t('index.title') }}
        </h1>
        <p
          class="mt-6 mb-4 text-xl aos-init aos-animate"
          data-aos="fade-up">
          {{ $t('index.p1') }}
        </p>
        <a
          href="#ghosts"
          class="my-8 inline-block text-xl bg-white hover:bg-blue-button px-8 py-4 rounded-full text-black cursor-pointer">
          {{ $t('index.seemore') }}
        </a>
      </div>
    </div>

    <div
      data-aos-easing="ease-out-back" data-aos-duration="1000" data-aos-delay="0"
      class="absolute top-0 left-0 z-0 bg-cover h-full w-full bg-fixed"
      style="background-image: url('banner-landing.jpg')">
    </div>
    <div class="absolute top-0 left-0 z-0 bg-cover h-full w-full" style="background:rgba(0,0,0,0.4)"></div>

  </section>

</template>

<script>
  export default {
    name: 'FrontBanner',
  };
</script>
