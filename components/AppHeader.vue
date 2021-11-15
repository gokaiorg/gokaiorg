<template>

  <header role="banner" class="w-full z-10 bg-white shadow-lg">

    <div class="z-50 bg-blue-button text-white flex flex-row items-center text-center">
      <div class="container-xl py-4 px-8 mx-auto flex flex-row items-center">
        <p class="text-2xl">
          We are currently actively working on a dApp version for Gokai Labs on Elrond Network.
        </p>
        <a
          href="https://devnet-gokai-labs.netlify.app/"
          target="_blank"
          class="ml-10 inline-block text-xl bg-black hover:bg-white px-8 py-4 rounded-full text-white hover:text-black cursor-pointer">
          Visit now
        </a>
      </div>
    </div>

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
