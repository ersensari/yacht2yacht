<script setup lang="ts">
const props = defineProps<{ name: string }>()
const user = useUserStore()

watchEffect(() => {
  user.setNewName(props.name)
})
</script>

<template>
  <div font-sans>
    <div text-4xl>
      <div i-carbon-pedestrian inline-block />
    </div>
    <p v-html="$t('intro.hi', { Name: props.name })">
    </p>

    <p text-sm opacity-75>
      <em>{{ $t('intro.dynamic-route') }}</em>
    </p>

    <template v-if="user.otherNames.length">
      <p text-sm mt-4>
        <span opacity-75>{{ $t('intro.aka') }}:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <a :href="toHref({path:'/name',params:{ name: otherName}})" replace>
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
        {{ $t('button.back') }}
      </button>
    </div>
  </div>
</template>
