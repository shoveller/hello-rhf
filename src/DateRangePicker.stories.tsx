import type { Meta, StoryObj } from '@storybook/react';
import DateRangePicker from './DateRangePicker';
import { action } from '@storybook/addon-actions';

const meta = {
  component: DateRangePicker,
} satisfies Meta<typeof DateRangePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본표시: Story = {
  args: {
    onBlur: action('onBlur'),
    onChange: action('onChange'),
  }
};