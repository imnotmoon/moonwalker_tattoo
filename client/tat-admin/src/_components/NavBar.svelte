<script>
  import { Link, useNavigate } from 'svelte-navigator';
  const navigate = useNavigate();

  const onClickLogout = () => {
    document.cookie = '';
    navigate('/login');
  }
</script>

<nav>
  <div>
    <Link to="/" class="my-link">moonwalker tattoo</Link>
  </div>
  <div>
    <ul>
      <Link to="/post" class="my-link">post</Link>
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

    & > div {
      height: 3rem;
      width: 100%;
      padding: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:last-child{
        border-top: 1px solid #444;
      }
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