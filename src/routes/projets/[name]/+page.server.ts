import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
  const files = import.meta.glob('../md/*.md');

  return Object.keys(files).map((file) => {
    const name = file.split('/').at(-1)!.replace('.md', '').toLowerCase();
    return {
      name
    };
  });
};