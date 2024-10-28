import type { Meta, StoryObj } from '@storybook/react';
import RHModalSelect from './RHModalSelect';
import { action } from '@storybook/addon-actions';
import RHReset from './RHReset';
import RHForm from './RHForm';
import { z } from 'zod'

const schema = z.object({
    test: z.string().min(1, '필수값입니다.')
})

const meta = {
  component: RHModalSelect,
} satisfies Meta<typeof RHModalSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본표시: Story = {
    args: {
        name: 'test',
        dataSource: Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)
    },
    decorators: [(Story) => {
        return (
            <RHForm showDevtool schema={schema} defaultValues={{ test: '' }} onError={action('onError')} onSubmit={action('onSubmit')}>
                <Story />
                <RHReset>리셋</RHReset>
                <button type="submit">서브밋</button>
            </RHForm>
        )
      }]
};