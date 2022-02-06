<script lang="ts">
import { writable } from "svelte/store";

  let a = 0;
  let b = 0;
  const count = writable(0);
</script>

<div>
  <input type="number" bind:value={a} />
  <input type="number" bind:value={b} />
</div>

<style>
</style>
