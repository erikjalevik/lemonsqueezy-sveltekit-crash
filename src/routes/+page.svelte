<script lang="ts">
  import type { ActionData, SubmitFunction } from './$types';
  import { enhance } from '$app/forms';

  export let form: ActionData;
  
  const loadLS = () => {
    window.createLemonSqueezy();
  };

  const onSubmit: SubmitFunction = () => {
    return async ({ update }) => {
      console.log(window.LemonSqueezy);
        
      // This crashes deep inside SvelteKit if we allow the 
      // createLemonSqueezy() call to run in onMount.
      await update();
    };
  };

</script>


<svelte:head>
    <script src="https://app.lemonsqueezy.com/js/lemon.js" on:load={loadLS} defer></script>
</svelte:head>

<form method="POST" action="?/submitForm" use:enhance={onSubmit}>
  {#if form?.response}
    <p>{form?.response}</p>
  {:else}
    <button type="submit">Submit form</button>
  {/if}
</form>
