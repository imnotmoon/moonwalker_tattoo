<script lang="ts">
  import { Router, Route } from 'svelte-navigator';
  import Auth from './_pages/Auth.svelte';
  import Main from './_pages/Main.svelte';
  import Login from './_pages/Login.svelte';
</script>

<Router>
    <Route path="login">
      <Login/>
    </Route>
    <Route path="main">
      <Auth />
      <Main />
    </Route>
</Router>

<style>
</style>
