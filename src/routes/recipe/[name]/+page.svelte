<script>
  import { page } from '$app/stores';  
  import Recipe from '$lib/components/Recipe.svelte';  
  $: trimmedPath = $page.url.pathname.slice(0, -1);
  $: slug = trimmedPath.slice(trimmedPath.lastIndexOf('/') + 1)

</script>
<svelte:head>
  <meta property="og:title" content={slug} />
</svelte:head>
<Recipe bind:slug={slug}/>
