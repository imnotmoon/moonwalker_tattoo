<script lang="ts">
  import { Router, Route } from 'svelte-navigator';
  import Auth from './_pages/Auth.svelte';
  import Main from './_pages/Main.svelte';
  import Login from './_pages/Login.svelte';
  import Post from './_pages/Post.svelte';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
		<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet" />
</svelte:head>

<Router>
    <Route path="login">
      <Login/>
    </Route>
    <Route path="/">
      <Auth />
      <Main />
    </Route>
    <Route>
      <Post />
    </Route>
</Router>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
    background-color: black;
  }
</style>
