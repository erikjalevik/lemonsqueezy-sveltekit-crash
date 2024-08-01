# lemonsqueezy-sveltekit-crash

This repo demonstrates a crash when submitting a form in SvelteKit that happens only when the lemon.js script is present. The lemon.js script is added to `src/app.html`, and `createLemonSqueezy()` is called when the component in `src/routes/+page.svelte` mounts, as instructed by the documentation.

To reproduce:

1. Clone repo.
1. `npm i`
1. `npm run build`
1. `npm run preview`
1. Open browser console.
1. Visit http://localhost:4173/

Directly on load, we see a "TypeError: window.createLemonSqueezy is not a function" error message. If we thereafter try to submit the form by clicking the button, SvelteKit crashes with "TypeError: Cannot read properties of undefined (reading '$set')".

If we remove the line `(window as any).createLemonSqueezy();` from `onMount`, everything works as expected.

The bug seems easier to reproduce in a production build (i.e. `npm run build`), but can also be reproduced in dev mode (`npm run dev`), by reloading the page until we see the error being logged.
