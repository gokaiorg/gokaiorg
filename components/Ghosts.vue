<template>

  <section
    :id="`${$t('ghosts.name')}`"
    class="bg-gray-100 pb-0 pt-6 pb-8 md:py-20"
  >

    <div class="container max-w-screen-xl px-8 mx-auto my-12">

      <h2
        data-aos="fade-up"
        class="w-full mb-4 text-3xl font-bold leading-tight text-black">
        {{ $t('ghosts.title') }}
      </h2>

      <p
        data-aos="fade-up"
        class="mb-4"
      >
        {{ $t('ghosts.description') }}
      </p>

      <a
        href="#ghosts"
        class="my-8 inline-block text-xl bg-black hover:bg-blue-button px-8 py-4 rounded-full text-white cursor-pointer">
        {{ $t('ghosts.seemore') }}
      </a>

      <div class="flex flex-col md:flex-row mt-12">

        <div
          v-for="client in images"
          class="flex flex-wrap w-full md:w-4/12 md:mr-8"
        >
          <div
            data-aos="fade-up"
            class="bg-cover bg-no-repeat bg-center h-96 w-96"
            :style="{ backgroundImage: `url(${client.pathLong})` }">
          </div>
        </div>

      </div>

    </div>

  </section>

</template>

<script>
  export default {
    name: "Discover",
    data() {
      return {
        images: [],
      };
    },

    mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()

        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      }),
      this.importAll(require.context('static/ghosts/', true, /\.png$/));
    },

    methods: {
      importAll(r) {
        r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
      },
    },
  }
</script>
