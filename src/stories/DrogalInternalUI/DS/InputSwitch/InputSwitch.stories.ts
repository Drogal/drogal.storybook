import type { Meta, StoryObj } from '@storybook/react-vite';

import { InputSwitch } from 'drogal.internal.ui';
import 'drogal.internal.ui/theme.css';

const meta = {
  title: 'Drogal Internal UI/DS/InputSwitch',
  component: InputSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
