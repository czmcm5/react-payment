import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Card from '../component/Card';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    color: 'mint',
  },
};

export const Medium: Story = {};

export const Large: Story = {
  args: {
    size: 'large',
    color: 'red',
  },
};
