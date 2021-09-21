<template>

  <section
    :id="`${$t('partners.name')}`"
    class="bg-gray-100 pb-0 py-8 md:py-20"
  >

    <div class="container max-w-screen-xl px-8 mx-auto m-8">

      <h2
        class="w-full mb-4 text-3xl font-bold leading-tight text-black">
        {{ $t('partners.title') }}
      </h2>

      <p
        class="mb-4"
      >
        {{ $t('partners.description') }}
      </p>
      <a
        href="mailto:message@gokai.org"
        target="_blank"
        class="my-8 inline-block text-xl hover:bg-black bg-blue-button px-8 py-4 rounded-full text-white cursor-pointer">
        {{ $t('partners.seemore') }}
      </a>

      <div class="flex flex-col md:flex-row items-center mt-8">

        <div class="flex flex-row items-start p-8 bg-white w-full md:w-5/12 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-64 mr-8 align-top" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
          <div
               class="w-full">
            <h3 class="text-2xl text-gray-800 font-bold leading-none mb-2">{{ $t('partners.block01') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('partners.profile01') }}
            </p>
            <a
              href="https://discord.gg/pVcJngPGzC"
              target="_blank"
              class="inline-block text-xl bg-black hover:bg-blue-button px-8 py-4 rounded-full text-white cursor-pointer">
              {{ $t('partners.link01') }}
            </a>

          </div>
        </div>

        <div class="flex flex-row items-start p-8 bg-white w-full md:w-5/12 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-64 mr-8 align-top" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <div
            class="w-full">
            <h3 class="text-2xl text-gray-800 font-bold leading-none mb-2">{{ $t('partners.block02') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('partners.profile02') }}
            </p>
            <a
              href="https://discord.gg/pVcJngPGzC"
              target="_blank"
              class="inline-block text-xl bg-black hover:bg-blue-button px-8 py-4 rounded-full text-white cursor-pointer">
              {{ $t('partners.link02') }}
            </a>

          </div>
        </div>

        <div class="flex flex-row items-start p-8 w-full md:w-2/12">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-64 mr-8 align-top" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </div>

      </div>

    </div>

  </section>

</template>

<script>
  export default {
    name: 'Team',
  };
</script>
