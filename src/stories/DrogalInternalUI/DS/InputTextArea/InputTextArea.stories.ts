import type { Meta, StoryObj } from '@storybook/react-vite';

import { InputTextArea } from 'drogal.internal.ui';
import 'drogal.internal.ui/theme.css';

const meta = {
  title: 'Drogal Internal UI/DS/InputTextArea',
  component: InputTextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
