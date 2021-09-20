<template>

  <header role="banner" class="fixed w-full z-10 bg-white shadow-lg">

    <span class="container-xl py-4 px-8 mx-auto flex flex-row items-center">
      <Logo/>
      <NavMain/>
    </span>

  </header>

</template>

<script>
  import Logo from '~/components/Logo.vue'
  import NavMain from '~/components/NavMain.vue'

  export default {
    name: "AppHeader",
    components: {
      Logo,
      NavMain
    },
    scrollToTop: true
  }
</script>
