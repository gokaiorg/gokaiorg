<template>

  <div
    class="flex flex-col h-full text-lg overflow-x-hidden">

    <app-header/>

    <main role="main" class="md:flex-1 z-0">

      <nuxt/>

    </main>

    <app-footer/>

  </div>

</template>

<script>

  import AppHeader from '~/components/AppHeader.vue'
  import AppFooter from '~/components/AppFooter'

  export default {
    components: {
      AppHeader,
      AppFooter,
    }
  }

</script>
