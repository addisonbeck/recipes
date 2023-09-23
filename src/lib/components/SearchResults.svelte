<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

  export let links: {display: string, href: string}[] = [];

  function click() {  
		dispatch('click');
  }
</script>

<div class="search-results">
  <div class="search-links">
    {#each links as link}
      <span><span class="pointer">></span> <a href={link.href} on:click={click}>{link.display}</a></span>
    {/each}
  </div>
</div>

<style>
  .search-results {
    display: grid;
    grid-template-columns: 1fr 300px 1fr;
    align-items: center;
  }

  .search-links {
    grid-column: 2;
    display: grid;
    grid-auto-flow: row dense;
    row-gap: 15px;
  }

  .pointer {
    color: #888;
    font-size: 0.7rem;
  }
</style>
