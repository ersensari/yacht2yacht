
<script lang="ts" setup>
const props = defineProps(['is404'])
useHead({
  title: props.is404 ? '404' : '500',
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
})
</script>

<template>
  <div>
    <section class="py-64 bg-sand">
      <img
        src="../src/assets/images/illustration-hands-up.svg?url"
        width="300"
        height="167"
        class="mx-auto mb-8 max-w-full"
        alt="404"
      >
      <div v-if="is404" class="p-4 max-w-3xl mx-auto text-center">
        <h2 class="my-6">
          Oops! 404.
        </h2>
        <p class="text-h3">
          We can't seem to find the page you're looking for.
        </p>
        <a class="btn btn-secondary" href="/">
          Visit our homepage
        </a>
      </div>
      <div v-else class="p-4 max-w-3xl mx-auto text-center">
        <h2 class="my-6">
          Oops! 500.
        </h2>
        <p class="text-h3">
          An internal server error has occured.
        </p>
        <a class="btn btn-secondary" href="/">
          Visit our homepage
        </a>
      </div>
    </section>
  </div>
</template>
