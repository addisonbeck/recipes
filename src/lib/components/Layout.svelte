<script lang="ts">
  import './layout.css';
  import Nav from './Nav.svelte';
  import Search from './Search.svelte';

  $: showSearch = false;
</script>

<div class="root-container">
  <div class="nav-section">
    <Nav bind:showSearch={showSearch}/>
  </div>
  <div class="main-section">
    <div class="main-content">
      <main>
          <slot />
      </main>
    </div>
  </div>
  {#if showSearch}
    <Search bind:showSearch={showSearch}></Search>
  {/if}
</div>
