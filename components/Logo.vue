<template>

  <div
    data-aos="fade-right"
    class="flex mr-auto">

    <nuxt-link
      @click.native="scrollToTop"
      class="whitespace-no-wrap flex text-black font-bold text-xl items-center no-underline hover:no-underline"
      :to="localePath('/')"
      :alt="`${ $t('sitename') }`"
      :title="`${ $t('sitename') }`"
    >

      <svg
        class="h-8 md:h-12"
        viewBox="0 0 255 396"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
          <path d="M241.052502,12.7714358 C158.66596,21.4332536 12.8718865,73.0257773 12.8718865,241.823057 C12.8718865,370.87957 113.034972,382.544298 151.930611,382.544298 C190.501773,382.544298 242.052502,357.391985 242.052502,298.901663 C242.052502,271.873876 226.549054,235.605894 186.862107,235.605894 C162.5632,235.605894 150.930611,254.196925 150.930611,269.876476 C150.930611,285.556028 161.459592,293.403498 175.593211,293.403498 C188.99272,293.403498 187.826525,275.063609 180.73357,275.063609" id="Path" stroke="#000000" stroke-width="25"></path>
        </g>
      </svg>

      <span class="ml-4">{{ $t('logoname') }}</span>
    </nuxt-link>
  </div>

</template>

<script>

export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}

</script>
