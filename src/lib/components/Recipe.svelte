<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown'
	import {
		afterUpdate
	} from 'svelte';

  export let slug: string = "";

  $: source = "";

  async function promise() {
    source = (await import(`../markdown/${slug}.md?raw`)).default;
  }

	afterUpdate(async () => {
    await promise();
	});
</script>

{#await promise()}
	<p>Loading...</p>
{:then}
  <SvelteMarkdown {source}/>
{/await}
