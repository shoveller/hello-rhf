import type { Meta, StoryObj } from '@storybook/react';
import ModalSelect from './ModalSelect';

const meta = {
  component: ModalSelect,
} satisfies Meta<typeof ModalSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본표시: Story = {};