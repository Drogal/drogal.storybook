import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from 'drogal.internal.ui';
import 'drogal.internal.ui/theme.css';

const meta = {
  title: 'Drogal Internal UI/DS/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
