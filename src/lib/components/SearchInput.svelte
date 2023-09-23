<script lang="ts">
	import { onMount } from 'svelte'
  export let value: string = "";
  export let placeholders: string[] = [];
  $: placeholder = "";

  onMount(() => {
		setInterval(() => {
      placeholder = placeholders[(Math.floor(Math.random() * placeholders.length))].toLocaleLowerCase() ?? "search";
		}, 1500);
  });
</script>

<div class="search-input">
  <input placeholder="> {placeholder}" class="input" type="text" bind:value={value}/>
</div>

<style>
  .search-input {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  .search-input .input {
    background: transparent; 
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
  }
</style>
