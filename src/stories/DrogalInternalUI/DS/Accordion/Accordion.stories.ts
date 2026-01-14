import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionTab } from 'drogal.internal.ui';
import 'drogal.internal.ui/theme.css';

const meta: Meta<typeof Accordion> = {
  title: 'Drogal Internal UI/DS/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;
export const Primary: Story = {}