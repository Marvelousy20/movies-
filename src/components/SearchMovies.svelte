<script>
  import { goto } from "$app/navigation";
  import { fly } from "svelte/transition";
  let text = "";
  let isActive = false;

  const seachMovies = () => {
    goto("/search/" + text);
  };
</script>

<form class="search" on:submit|preventDefault={seachMovies}>
  <input
    on:blur={() => (isActive = false)}
    on:focus={() => (isActive = true)}
    type="text"
    placeholder="Search movie"
    bind:value={text}
    class={isActive ? "selected" : ""}
  />
  {#if text}
    <button
      type="submit"
      out:fly={{ y: 0, duration: 500 }}
      in:fly={{ y: 0, duration: 500 }}>Search</button
    >
  {/if}
</form>

<style>
  .search {
    position: relative;
    width: 30%;
    margin: 1rem;
  }

  input {
    width: 100%;
    outline: none;
    font-size: 1rem;
    border: none;
    font-weight: bold;
    background: rgb(63, 63, 63);
    padding: 0.5rem 0.1rem;
    transition: background 0.75s ease-out;
    border-radius: 10px;
    padding: 1rem;
    color: rgb(255, 255, 255);
  }

  button {
    font-size: 0.95rem;
    padding: 0rem 1rem;
    background-color: rgb(96, 110, 201);
    color: white;
    font-weight: bold;
    border: none;
    position: absolute;
    bottom: 50%;
    right: 0;
    transform: translate(0, 50%);
    height: 100%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
  }

  input.selected {
    background: rgb(50, 50, 50);
  }
</style>
