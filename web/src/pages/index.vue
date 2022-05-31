<script setup lang="ts">

const user = useUserStore()
const name = ref(user.savedName)
const { t, locale } = useI18n()
const router = useRouter()
const go = () => {
  if (name.value) router.push(`/${locale.value}/name/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />

    <input id="input" v-model="name" :placeholder="t('intro.whats-your-name')" :aria-label="t('intro.whats-your-name')"
      type="text" autocomplete="false" p="x4 y2" w="250px" text="center" bg="transparent"
      border="~ rounded gray-200 dark:gray-700" outline="none active:none" @keydown.enter="go" />
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button btn m-3 text-sm :disabled="!name" @click="go">
        {{ t('button.go') }}
      </button>
    </div>
    <!-- The button to open modal -->
    <label for="my-modal" class="btn btn-primary">open modal</label>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        <div class="modal-action">
          <label for="my-modal" class="btn">Yay!</label>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
