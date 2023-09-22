<script lang="ts">
  export let showSearch: boolean = false;
	import { onMount } from 'svelte'
  let searchInput: string = "";

  const getLinks = () => {
    const t: { display: string, href: string }[] = []
    const modules = import.meta.glob('$lib/markdown/*.md', { as: 'raw', eager: true })
    for (const file in modules) {
      const name = stripName(modules[file]);
      if (name != null) {
        t.push({
          display: name,
          href: `/recipe/${stripFileName(file)}`
        })
      }
    }
    return t;
  };
  const allLinks: { display: string, href: string}[] = getLinks();

  $: links = allLinks.filter(x => x.display.toLocaleLowerCase().indexOf(searchInput.toLocaleLowerCase()) != -1);
  $: random = links[(Math.floor(Math.random() * links.length))].display.toLocaleLowerCase() ?? "search";


  function stripName(s: string): string | undefined {
    return s.split("\n").reverse().pop()?.replace("#", "");
  }

  function stripFileName(s: string): string | undefined {
    return s.split("/").pop()?.replace(".md", "");
  }

  function close() {  
    showSearch = false;
  }

  onMount(() => {
		setInterval(() => {
      random = links[(Math.floor(Math.random() * links.length))].display.toLocaleLowerCase() ?? "search";
		}, 1500);
  });
</script>

<div class="search-container">
  <div class="search-inner-container">
    <div class="search-controls">
      <div class="search-input">
        <input placeholder="> {random}" class="input" type="text" bind:value={searchInput}/>
      </div>
      <div class="search-close">
        <button class="close-button" on:click={close}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/></svg>
        </button>
      </div>
    </div>
    <div class="search-results">
      <div class="search-links">
        {#each links as link}
          <span><span class="pointer">></span> <a href={link.href} on:click={close}>{link.display}</a></span>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .close-button {
    cursor: pointer;
    background-color: black;
    color: white;
    border: none;
  }

  .search-controls {
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 5px;
    padding-bottom: 20px;
    align-items: center;
    justify-items: center;
  }

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

  .search-container {
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: auto minmax(300px, 1000px) auto;
    grid-template-rows: auto minmax(200px, 700px) auto;
  }

  .search-inner-container {
    border: 1px solid white;
    border-radius: 5px;
    background: rgba(0, 0, 0, 1);
    width: 100%;
    height: 100%;
    grid-column: 2;
    overflow: auto;
    grid-row: 2;
    padding: 10px 10px 10px 10px;
  }

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
