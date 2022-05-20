<template>
  <v-app-bar flat>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleLeftDrawer" />
    <v-row class="justify-between row align-center">
      <v-col>
        <v-img
          src="images/logo.svg"
          class="mr-5"
          contain
          height="48"
          width="180"
        />
      </v-col>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(link, i) in links"
        :key="i"
        v-bind="link"
        class="hidden-sm-and-down"
        text
      >
        {{ link.text }}
      </v-btn>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
interface Link {
  text: string;
  href: string;
  to: string;
}

export default defineNuxtComponent({
  name: "header",
  setup(props) {
    let { $leftDrawerOpen } = useNuxtApp();
    const toggleLeftDrawer = () => {
      $leftDrawerOpen.value = !$leftDrawerOpen.value;
    };

    const links = <Link[]>[
      { text: "About Us", href: "/about-us" },
      { text: "Contact", href: "/contact" },
      { text: "Pages", href: "/pages" },
    ];

    return {
      links,
      toggleLeftDrawer,
    };
  },
});
</script>
