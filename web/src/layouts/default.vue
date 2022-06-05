<script setup lang="ts">
const { locale } = useI18n()
useHead({
  title: 'Best yacht rental site - Yacht2Yacht',
  meta: [
    {
      name: 'description',
      content: 'Best yacht rental site - Yacht2Yacht',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'locale',
      property: 'og:type',
      content: locale.value,
    },
    {
      name: 'type',
      property: 'og:type',
      content: 'website',
    },
  ],
  bodyAttrs: {
    class: 'bg-gray-100 font-sans leading-normal tracking-normal',
  },
})
const isNavOpen = ref(false)
const onNavToggle = (value: boolean) => (isNavOpen.value = value)
</script>
<template>
  <Suspense>
    <main :key="$attrs.path" class="container w-full mx-auto">
      <Header :url="$attrs.path" @nav-toggle="onNavToggle" />
      <div
        class="container w-full mx-auto pt-[7rem]"
        :class="{ 'h-0': isNavOpen, 'overflow-hidden': isNavOpen }"
      >
        <div
          class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal"
        >
          <RouterView v-slot="{ Component }" v-bind="$attrs">
            <template v-if="Component">
              <Transition mode="out-in">
                <KeepAlive>
                  <Suspense>
                    <!-- main content -->
                    <component :is="Component"></component>

                    <!-- loading state -->
                    <template #fallback>
                      Loading...
                    </template>
                  </Suspense>
                </KeepAlive>
              </Transition>
            </template>
          </RouterView>
        </div>
      </div>
      <Footer />
    </main>
  </Suspense>
</template>
