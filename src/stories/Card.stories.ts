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
    MM: '02',
    YY: '02',
    name: '한도카드',
    cardNum: '0101 0202 0303 4004',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    color: 'green',
    MM: '02',
    YY: '02',
    name: '한도카드',
    cardNum: '0101 0202 0303 4004',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    color: 'organge',
    MM: '02',
    YY: '02',
    name: '한도카드',
    cardNum: '0101 0202 0303 4004',
  },
};
