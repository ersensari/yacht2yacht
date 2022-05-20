<script setup lang="ts">
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="flex flex-wrap">
    <div class="w-full md:w-1/2 xl:w-1/3 p-3">
      <!--Metric Card-->
      <div class="bg-white border rounded shadow p-2">
        <div class="flex flex-row items-center">
          <div class="flex-shrink pr-4">
            <div class="rounded p-3 bg-green-600">
              <i class="fa fa-wallet fa-2x fa-fw fa-inverse"></i>
            </div>
          </div>
          <div class="flex-1 text-right md:text-center">
            <h5 class="font-bold uppercase text-gray-500">{{ msg }}</h5>
            <h3 class="font-bold text-3xl">
              $3249 <span class="text-green-500">{{ count }}</span>
            </h3>
            <button type="button" @click="count++">count is: {{ count }}</button>
          </div>
        </div>
      </div>
      <!--/Metric Card-->
    </div>
  </div>
</template>
