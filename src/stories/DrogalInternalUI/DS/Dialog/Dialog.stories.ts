import type { Meta, StoryObj } from '@storybook/react-vite';

import { Dialog } from 'drogal.internal.ui';
import 'drogal.internal.ui/theme.css';

const meta = {
  title: 'Drogal Internal UI/DS/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
