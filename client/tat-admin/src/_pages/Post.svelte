<script>
  import NavBar from "../_components/NavBar.svelte";

  let title = '';
  let content = '';
</script>

<div class="root">
  <NavBar />
  <form>
    <label for="title">
      <span>title</span>
      <input type="text" name="title" id="title" bind:value={title}/>
    </label>
    <label for="content">
      <span>content</span>
      <textarea name="content" bind:value={content} id="content" />
    </label>
    <label for="images">
      <span>images</span>
      <div class="file-preview">preview</div>
      <input type="file" name="images" multiple class="file-input" id="images"/>
      <button class="file-button">upload images</button>
    </label>
  </form>
</div>

<style lang="scss">
  .root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    padding: 5px 10px;
  }
  label {
    display: flex;
    flex-direction: column;
    color: white;
    gap: 0.5rem;
  }

  textarea, input, button {
    color: white;
    resize: none;
    border: 1px solid white;
    padding: 5px 10px;
    &:focus {
      outline: none;
    }
  }

  textarea {
    height: 20vh;
    padding: 1rem;
  }
  
  .file-input {
    display: none;
  }

  .file-button {
    height: 3rem;
  }
</style>