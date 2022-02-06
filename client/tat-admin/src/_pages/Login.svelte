<script>
  let id = '';
  let password = '';
  console.log("login???");
</script>

<div class="root">
  <form action="post" class="form">
    <label for="id">
      <span>ID</span>
      <input type="text" name="id" id="id" bind:value={id}>
    </label>
    <label for="password">
      <span>Password</span>
      <input type="password" name="password" id="password" bind:value={password}>
    </label>
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
</style>