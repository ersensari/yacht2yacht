<script setup lang="ts">
const props = defineProps<{ name: string }>()
const user = useUserStore()
const { t,locale } = useI18n()

watchEffect(() => {
  user.setNewName(props.name)
})
</script>

<template>
  <div font-mono>
    <div text-4xl>
      <div i-carbon-pedestrian inline-block />
    </div>
    <p v-html="t('yacht.min_price', { name: props.name })">
    </p>

    <p text-sm opacity-75>
      <em>{{ t('intro.dynamic-route') }}</em>
    </p>

    <template v-if="user.otherNames.length">
      <p text-sm mt-4>
        <span opacity-75>{{ t('intro.aka') }}:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <a :href="toHref({path:'/name',params:{ locale,name: otherName}})" replace>
              {{ otherName }}
            </a>
          </li>
        </ul>
      </p>
    </template>

    <div>
      <button
        btn m="3 t6" text-sm
        onclick="window.location.back(-1)"
      >
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>
