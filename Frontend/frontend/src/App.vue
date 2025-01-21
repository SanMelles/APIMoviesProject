<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/movies">Movies</RouterLink>
        <RouterLink to="/usersView">Users</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-bottom: 0.5rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center; /* Aligns header content vertically */
    justify-content: space-between; /* Spreads header content horizontally */
    padding-right: calc(var(--section-gap) / 2); /* Ensures proper padding */
  }

  nav {
    display: flex; /* Lays out navigation links horizontally */
    justify-content: flex-start; /* Aligns links to the left */
    align-items: center; /* Aligns links vertically */
    text-align: left;
    margin: 0; /* Resets margin to prevent layout issues */
    padding: 0; /* Resets padding for consistency */
    font-size: 1rem; /* Increases font size for larger screens */
  }

  nav a {
    padding: 0 1rem; /* Adds spacing between links */
  }
}
</style>
