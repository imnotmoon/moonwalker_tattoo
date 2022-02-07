<script>
  import { push } from 'svelte-spa-router';

  let id = '';
  let password = '';
  console.log('login???');
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(id, password);
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ ID: id, password }),
    });
    if (res.status !== 200) return;
    push('/');
  };
</script>

<div class="root">
  <form action="post" class="form" on:submit={onSubmit}>
    <label for="id">
      <span>ID</span>
      <input type="text" name="id" id="id" bind:value={id} />
    </label>
    <label for="password">
      <span>Password</span>
      <input type="password" name="password" id="password" bind:value={password} />
    </label>
    <button type="submit" class="hidden">login</button>
  </form>
  <span class="logo">moonwalker tattoo</span>
</div>

<style lang="scss">
  .root {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.2rem;
    position: relative;
  }

  .form {
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  label {
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input {
    border: 1px solid white;
    height: 2rem;
    background-color: black;
    color: white;
    padding: 5px 10px;

    &:focus {
      outline: none;
    }
  }

  .logo {
    position: absolute;
    bottom: 1rem;
    font-size: 1rem;
  }

  .hidden {
    display: none;
  }
</style>
