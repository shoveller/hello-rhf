import type { Meta, StoryObj } from '@storybook/react';
import RHInput from './RHInput';
import RHForm from './RHForm';
import { z } from 'zod'
import { action } from '@storybook/addon-actions'
import RHReset from './RHReset';

const schema = z.object({
    test: z.string().min(1, '필수값입니다.').email('올바른 이메일을 입력하세요')
})

const meta = {
  component: RHInput
} satisfies Meta<typeof RHInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본표시: Story = {
    args: {
        name: 'test'
    },
    decorators: [(Story) => {
        return (
            <RHForm schema={schema} defaultValues={{ test: '' }} onError={action('onError')} onSubmit={action('onSubmit')}>
                <Story />
                <RHReset>리셋</RHReset>
                <button type="submit">서브밋</button>
            </RHForm>
        )
      }]
};