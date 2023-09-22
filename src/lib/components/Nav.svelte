<script lang="ts">
  export let showSearch: boolean = false;
</script>

<nav class="nav">
  <div class="controls">
    <button class="button round" on:click={() => {showSearch = true}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="M19 11a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" opacity=".16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"/></g></svg>
    </button> 
  </div>
</nav>

<style>
  * {
    --nav-background-color: var(--primary);
    --nav-color: var(--accent);

    --button-background-color: var(--primary);
    --button-color: var(--accent);
  }

  .button {
    border-radius: 10px;
    display: grid;
    grid-auto-flow: column dense;
    justify-items: center;
    align-items: center;
    font-weight: 700;
    font-size: 0.8em;
    background-color: var(--button-background-color);
    color: var(--button-color);
    border: 1px;
    border-style: dashed;
    border-color: var(--button-color);
    padding: 3px 10px 3px 5px;
    column-gap: 5px;
  }

  .button.round {
    padding: 5px;
    border-radius: 100px;
    border-color: var(--button-background-color);
  }

  .button:hover {
    border-color: var(--button-color);
    border-style: solid;
  }

  .nav {
    position: fixed;
    width: 100%;
    height: 40px;
    background-color: var(--nav-background-color);
    border-bottom: 1px solid var(--nav-color);
  }

  .nav .controls {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: end;
    align-items: center;
    width: 98%;
    height: 100%;
  }
</style>


