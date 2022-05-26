<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const language: { [key: string]: string } = { en: 'English', tr: 'Türkçe' }
const currencies: { [key: string]: string } = {
  TRY: 'fas fa-turkish-lira-sign',
  USD: 'fas fa-dollar-sign',
  EUR: 'fas fa-euro-sign',
}
const currencyCookie = useLocalStorage('currency', 'USD')

const currency = computed({
  get: () => {
    return currencies[currencyCookie.value]
  },
  set: (v: string) => {
    currencyCookie.value = v
    return v
  },
})

const localeName = computed(() => language[locale.value])
const router = useRouter()
const getLanguagePath = (newLanguage: string) => {
  const currentPath = router.currentRoute.value.path
  const languageDetector = new RegExp(`^\/(${availableLocales.join('|')})?\/?`)
  let newPath

  newPath = currentPath.replace(languageDetector, `/${newLanguage}/`)

  if (currentPath !== newPath) {
    locale.value = newLanguage
  }
  return newPath
}
</script>
<template>
  <header>
    <nav class="navbar navbar-expand-xl navbar-light bg-navbar">
      <div class="d-flex flex-fill align-items-center justify-content-between">
        <button
          class="navbar-toggler p-2"
          type="button"
          aria-controls="navbarTogglerMain"
          aria-expanded="false"
          :aria-label="t('nav.toggle_navigation')"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerMain"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link
          class="navbar-brand p-2"
          :to="{ path: 'home', params: { locale } }"
        >
          <img class="navbar-logo" src="/images/logo.png" alt="Yacht2Yacht" />
        </router-link>
        <div class="p-2 flex-grow-1">
          <location-auto-complete
            name="location"
            :onentersearch="true"
            :onselectsearch="true"
          />
        </div>

        <!-- Right Side Of Navbar -->
        <div class="ms-auto">
          <div class="collapse navbar-collapse" id="navbarTogglerMain">
            <div class="me-auto"></div>
            <ul class="navbar-nav mb-2 mb-lg-0">
              <!--Language Menu-->
              <li class="nav-item dropdown flex-grow-1">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  id="langMenu"
                >
                  <i class="fas fa-language fa-lg me-1" aria-hidden="true"></i>
                  {{ localeName }}
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="langMenu"
                >
                  <router-link
                    :to="getLanguagePath(lang)"
                    class="dropdown-item"
                    v-for="lang in availableLocales"
                    :key="lang"
                  >
                    {{ language[lang] }}
                  </router-link>
                </div>
              </li>
              <!--Currency Menu-->
              <li class="nav-item dropdown flex-grow-1">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  id="currencyMenu"
                >
                  <i
                    :class="currency"
                    class="fa-lg me-1"
                    aria-hidden="true"
                  ></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="currencyMenu"
                >
                  <button
                    @click="
                      () => {
                        currency = curr
                      }
                    "
                    class="btn-link dropdown-item"
                    v-for="curr in Object.keys(currencies)"
                  >
                    <i
                      :class="currencies[curr]"
                      class="fa-lg me-1"
                      aria-hidden="true"
                    ></i>
                    {{ curr }}
                  </button>
                </div>
              </li>

              <!-- Authentication Links -->
              <!-- @guest -->
              <li class="nav-item flex-grow-1">
                <router-link
                  class="nav-link"
                  :to="{
                    path: 'login',
                    params: { locale },
                    query: { url: $route.fullPath },
                  }"
                >
                  <i class="fas fa-sign-in-alt me-2"></i>
                  {{ t('auth.login') }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{ path: '/register', params: { locale } }"
                >
                  <i class="fas fa-user-plus me-2"></i>
                  {{ t('auth.register') }}
                </router-link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :to="{ path: 'yacht_owner_intro', params: { locale } }"
                >
                  <span class="text-red">
                    <i class="fas fa-bullhorn me-2"></i>
                    {{ t('menus.create_ad') }}
                  </span>
                </a>
              </li>

              <!-- @else 
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="{{ route('yacht_owner', app()->getlocale()) }}"
                >
                  <span class="text-red">
                    <i class="fas fa-bullhorn me-2"></i>
                    {{ __('menus.create_ad') }}
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="{{ route('message_inbox', app()->getlocale()) }}"
                >
                  {{ __('menus.messages') }}
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  id="userMenu"
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  v-pre
                >
                  <img
                    src="{{ Auth::user()->avatar != '' ? Auth::user()->avatar : asset('/images/avatar.png') }}"
                    alt="{{ Auth::user()->name }}"
                    class="rounded-circle user-image"
                  />
                  {{ Auth::user()->name }}
                </a>

                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="userMenu"
                >
                  <a
                    class="dropdown-item"
                    href="{{ route('profile', app()->getlocale()) }}"
                  >
                    {{ __('auth.profile') }}
                  </a>
                  <a
                    class="dropdown-item"
                    href="{{ route('account', app()->getlocale()) }}"
                  >
                    {{ __('auth.account') }}
                  </a>
                  <a
                    class="dropdown-item"
                    href="{{ route('logout', app()->getlocale()) }}"
                    onclick="event.preventDefault();
                                                                                                                                                                                                                                    document.getElementById('logout-form').submit();"
                  >
                    {{ __('auth.logout') }}
                  </a>

                  <form
                    id="logout-form"
                    action="{{ route('logout', app()->getlocale()) }}"
                    method="POST"
                    style="display: none;"
                  >
                  </form>
                </div>
              </li>
              @endguest-->
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
