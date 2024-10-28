import type { Meta, StoryObj } from '@storybook/react';
import TabSelector from './TabSelector';
import { action } from '@storybook/addon-actions';

const meta = {
  component: TabSelector,
} satisfies Meta<typeof TabSelector>;

export default meta;

type Story = StoryObj<typeof meta>;


export const 기본표시: Story = {
    args: {
        items: [
            {
                key: '1',
                label: 'Tab 1',
                children: 'Content of Tab Pane 1',
            },
            {
                key: '2',
                label: 'Tab 2',
                children: 'Content of Tab Pane 2',
            },
            {
                key: '3',
                label: 'Tab 3',
                children: 'Content of Tab Pane 3',
            },
        ],
        onChange: action('onChange'),
        activeKey: '1'
    }
};