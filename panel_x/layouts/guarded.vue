<template>
  <div>
    <Html lang="en">
      <Body>
        <div>
          <SiteHeader />
          <LeftMenu />
          <v-main>
            <div class="container pa-2">
              <slot />
            </div>
          </v-main>
          <Footer />
        </div>
      </Body>
    </Html>
  </div>
</template>
