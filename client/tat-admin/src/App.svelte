<script lang="ts">
  import Router, { push } from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';
  import Main from './_pages/Main.svelte';
  import Login from './_pages/Login.svelte';
  import Post from './_pages/Post.svelte';
  import { getCookie } from './utils';

  const authCheck = () => {
    const cookie = getCookie('auth');
    if (!cookie) return false;
    return true;
  };

  const routes = {
    '/': wrap({
      component: Main,
      conditions: [authCheck],
    }),
    '/post': wrap({
      component: Post,
      conditions: [authCheck],
    }),
    '/Login': Login,
  };

  const conditionsFailed = (event) => {
    push('/login');
  };
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Router {routes} on:conditionsFailed={conditionsFailed} />

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
    background-color: black;
  }
</style>
