<script lang="ts">
  import MarkdownList from "$lib/models/markdown-list"
	import Overlay from "./Overlay.svelte";
	import SearchInput from "./SearchInput.svelte";
	import SearchResults from "./SearchResults.svelte";

  export let showSearch: boolean = false;
  const links = new MarkdownList().links;

  $: searchValue = "";
  $: filteredLinks = links.filter(x => x.display.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) != -1);

  const placeholders = links.map(x => x.display);

  function close() {
    showSearch = false;
  }
</script>

<Overlay on:close={close}>
  <SearchInput slot="controls" bind:value={searchValue} {placeholders}></SearchInput>
  <SearchResults slot="content" links={filteredLinks} on:click={close}/>
</Overlay>
