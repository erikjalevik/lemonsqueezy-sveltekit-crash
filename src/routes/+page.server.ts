import type { Actions } from './$types';

export const actions = {
  submitForm: () => {
    return { response: "Hello from server" };
  }
} satisfies Actions;
