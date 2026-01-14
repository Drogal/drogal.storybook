import type { Meta, StoryObj } from '@storybook/react-vite';

import { Paginator } from 'drogal.internal.ui';
import 'drogal.internal.ui/theme.css';

const meta = {
  title: 'Drogal Internal UI/DS/Paginator',
  component: Paginator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Paginator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
