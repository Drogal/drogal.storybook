import type { Meta, StoryObj } from '@storybook/react-vite';

import { InputPassword } from 'drogal.internal.ui';
import 'drogal.internal.ui/theme.css';

const meta = {
  title: 'Drogal Internal UI/DS/InputPassword',
  component: InputPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
