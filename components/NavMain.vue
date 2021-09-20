<template>

  <nav role="navigation">
    <div
      class="
        hidden
        lg:flex
        lg:items-center
        lg:w-auto
        bg-white"
      id="nav-content">
      <ul class="font-semibold mt-8 md:mt-0 lg:flex justify-end flex-1 items-center">
        <li data-aos="fade-left"
            class="ml-4 md:ml-0 mr-10">
          <a
            :href="`${$t('ghosts.anchor')}`">
            {{ $t('ghosts.title') }}
          </a>
        </li>
        <li data-aos="fade-left"
            class="ml-4 md:ml-0 mr-10">
          <a
            :href="`${$t('team.anchor')}`">
            {{ $t('team.title') }}
          </a>
        </li>
        <!--        <li data-aos="fade-left" data-aos-delay="1000" data-aos-easing="ease" data-aos-offset="0" class="ml-4 md:ml-0 mr-10">-->
        <!--          <a-->
        <!--            :href="`${$t('contact.anchor')}`"-->
        <!--          >-->
        <!--            {{ $t('contact.title') }}-->
        <!--          </a>-->
        <!--        </li>-->
        <li data-aos="fade-left">

          <nuxt-link
            class="btn-white"
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)">
            {{ locale.name }}
          </nuxt-link>
        </li>

      </ul>

    </div>

  </nav>

</template>

<script>
  export default {
    name: 'NavMain',
    computed: {
      availableLocales() {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
      },
    },
  };
</script>
