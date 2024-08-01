<script lang="ts">
  import type { ActionData, SubmitFunction } from './$types';
  import { onMount } from 'svelte';
  import { enhance } from '$app/forms';

  export let form: ActionData;

  onMount(() => {
    (window as any).createLemonSqueezy();
  });

  const onSubmit: SubmitFunction = () => {
    return async ({ update }) => {
      // This crashes deep inside SvelteKit if we allow the 
      // createLemonSqueezy() call to run in onMount.
      await update();
    };
  };

</script>

<form method="POST" action="?/submitForm" use:enhance={onSubmit}>
  {#if form?.response}
    <p>{form?.response}</p>
  {:else}
    <button type="submit">Submit form</button>
  {/if}
</form>
