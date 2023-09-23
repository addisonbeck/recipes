<script lang="ts">
  import MarkdownList from "$lib/models/markdown-list"
	import SearchInput from "./SearchInput.svelte";
	import SearchResults from "./SearchResults.svelte";

  const links = new MarkdownList().links;

  $: searchValue = "";
  $: filteredLinks = links.filter(x => x.display.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) != -1);

  const placeholders = links.map(x => x.display);
  
</script>

<div class="home-container">
  <SearchInput bind:value={searchValue} {placeholders}/>
  <SearchResults links={filteredLinks}/>
</div>

<style>
  .home-container {
    display: grid;
    padding: 40px;
    grid-template-rows: auto 1fr;
    row-gap: 10px;
  }
</style>
