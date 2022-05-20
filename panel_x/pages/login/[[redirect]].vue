<template>
  <main class="container">
    <Card size="medium">
      <header>
        <PageHeader class="dark" title="Yach2Yacht Owner Panel" sub-title='Sign In' />
      </header>

      <form>
        <input type="text" name="login" placeholder="Login" aria-label="Login" autocomplete="nickname" required>
        <input type="password" name="password" placeholder="Password" aria-label="Password"
          autocomplete="current-password" required>
        <fieldset>
          <label for="remember">
            <input type="checkbox" role="switch" id="remember" name="remember">
            Remember me
          </label>
        </fieldset>
        <button type="submit" class="contrast" onclick="event.preventDefault()">Login</button>
      </form>

    </Card>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "guest",
});
</script>
