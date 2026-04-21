import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import Button from './Button';

describe('Props Testing', async () => {
   it('renders text', async () => {
      const { getByText } = await render(<Button>Add Task</Button>);
      await expect.element(getByText('Add Task')).toBeInTheDocument();
   });
});

