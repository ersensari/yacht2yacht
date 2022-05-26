<script setup lang="ts">
const { t, locale } = useI18n()
const emit = defineEmits(['input'])
const props = defineProps({
  onentersearch: {
    type: Boolean,
    default: false,
  },
  onselectsearch: {
    type: Boolean,
    default: false,
  },
  value: {
    type: Object,
    default: () => null,
  },
})

type Suggestion = {
  name: string
  id: string
}

const data = reactive({
  keyword: '',
  geolocation: {
    selected: props.value,
    suggestions: [] as Suggestion[],
    hide_result: true,
    error: false,
  },
})

watch(props.value, (value) => {
  if (value === null) {
    data.keyword = ''
  }
})

const orderby = computed(() => 'name')
const router = useRouter()

const onSearch = () => {
  if (
    data.geolocation.selected !== null &&
    (props.onselectsearch || props.onentersearch)
  ) {
    router.push(
      `/${locale.value}/${t('global.rent_yacht_url')}/${
        data.geolocation.selected.seo_name
      }?sort=${orderby}`,
    )
  }
}

const selectLocation = (item: Record<string, any> | null) => {
  data.geolocation.hide_result = true
  data.geolocation.selected.value = item
  data.geolocation.suggestions = []
  data.keyword = item !== null ? item.name : ''
  emit('input', data.geolocation.selected)
  onSearch()
}

const searchLocation = useDebounceFn(async ($event: { keyCode: number }) => {
  if ($event.keyCode === 13) {
    selectLocation(null)
  }

  if (data.keyword !== '' && data.keyword.length >= 3) {
    data.geolocation.suggestions = []
    data.geolocation.hide_result = false
  } else {
    data.geolocation.selected.value = null
    data.geolocation.suggestions = []
    data.geolocation.hide_result = true
    data.geolocation.error = false
  }
  return data.geolocation
}, 300)

onMounted(() => {
  if (data.geolocation.selected != null) {
    data.keyword = data.geolocation.selected.name
  }
})
</script>

<template>
  <div class="location-auto-complete">
    <div class="form-group location-auto-complete-wrapper">
      <div
        class="input-group d-flex align-items-center location-auto-complete-control"
      >
        <i class="fas fa-map-marker-alt"></i>
        <input
          class="form-control"
          type="search"
          id="topbar-location-search-input"
          :placeholder="t('global.search_box_location_label')"
          aria-label="Search"
          v-model="data.keyword"
          @keypress="searchLocation($event)"
          @keydown.esc="selectLocation(null)"
          @search="searchLocation($event)"
          @keydown.enter="onSearch"
        />
        <button
          type="button"
          class="btn btn-sm bg-transparent"
          @click="selectLocation(null)"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div
        class="location-auto-complete-result"
        v-show="!data.geolocation.hide_result"
      >
        <ul
          v-if="data.geolocation.suggestions.length > 0"
          class="list-group list-group-flush"
        >
          <a
            href="javascript:void(0)"
            class="list-group-item list-group-item-action text-truncate pl-0"
            v-for="item in data.geolocation.suggestions"
            :title="item.name"
            @click="selectLocation(item)"
            :key="item.id"
          >
            <i class="fas fa-map-marker-alt mx-2"></i>
            {{ item.name }}
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>
