<template>

  <footer
    role="contentinfo"
    class="z-10 flex items-start w-full bg-white py-4 px-8 md:items-center">

    <NavFooter/>
    <NavSocial/>

  </footer>

</template>

<script>

  import NavFooter from '~/components/NavFooter.vue'
  import NavSocial from '~/components/NavSocial.vue'

  export default {
    name: "AppFooter",
    components: {
      NavFooter,
      NavSocial
    }
  }
</script>
