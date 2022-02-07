<script>
  import { link, push } from 'svelte-spa-router';
  import { setCookie } from '../utils';

  const onClickLogout = () => {
    setCookie('auth', false, { 'max-age': -1 });
    push('/login');
  };
</script>

<nav>
  <div>
    <a href="/" class="my-link" use:link>moonwalker tattoo</a>
  </div>
  <div>
    <ul>
      <a href="/post" class="my-link" use:link>post</a>
    </ul>
    <button on:click={onClickLogout}>logout</button>
  </div>
</nav>

<style lang="scss">
  :global(.my-link) {
    text-decoration: none;
    color: white;
  }

  nav {
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    font-size: 1.2rem;
    color: white;
    margin-bottom: 1rem;

    & > div {
      height: 3rem;
      width: 100%;
      padding: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #444;
    }
  }

  button {
    cursor: pointer;
    background-color: black;
    border: none;
    color: white;
    font-size: 1.2rem;
  }
</style>
