<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

  function close() {  
		dispatch('close');
  }
</script>

<div class="overlay-container">
  <div class="overlay-inner-container">
    <div class="controls-container">
      <div class="custom-controls">
        <slot name="controls"/>
      </div>
      <div class="close">
        <button class="close-button" on:click={close}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/></svg>
        </button>
      </div>
    </div>
    <div class="contents">
      <slot name="content"/>
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

  .controls-container {
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 5px;
    padding-bottom: 20px;
    align-items: center;
    justify-items: center;
  }

  .overlay-container {
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

  .overlay-inner-container {
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
</style>
