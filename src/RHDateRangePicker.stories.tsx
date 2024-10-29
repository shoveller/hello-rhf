import type { Meta, StoryObj } from '@storybook/react';
import RHDateRangePicker from './RHDateRangePicker';
import { action } from '@storybook/addon-actions';
import AntDConfigProvider from './AntDConfigProvider';
import RHForm from './RHForm';
import RHReset from './RHReset';
import { z } from 'zod'
import dayjs from 'dayjs';

const schema = z.object({
  test: z.array(z.custom((val) => dayjs.isDayjs(val))).length(2, '시작일과 종료일을 선택해주세요.')
})

const meta = {
  component: RHDateRangePicker,
  decorators: [(Story) => {
    return (
      <AntDConfigProvider>
        <Story />
      </AntDConfigProvider>
    )
  }]
} satisfies Meta<typeof RHDateRangePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본표시: Story = {
  args: {
    name: 'test'
  },
  decorators: [(Story) => {
    return (
        <RHForm showDevtool schema={schema} defaultValues={{ test: [] }} onError={action('onError')} onSubmit={action('onSubmit')}>
            <Story />
            <RHReset>리셋</RHReset>
            <button type="submit">서브밋</button>
        </RHForm>
    )
  }]
};