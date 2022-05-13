<template>
  <Html lang="en" data-theme="light">

    <Body>

      <Header />
      <!-- Main -->
      <main class="container">
        <div class="grid">
          <div>
            <LeftMenu />
          </div>
          <div>
            <slot />
          </div>
        </div>
      </main><!-- ./ Main -->
      <Footer />
    </Body>

  </Html>
</template>
<script setup lang="ts">
</script>
