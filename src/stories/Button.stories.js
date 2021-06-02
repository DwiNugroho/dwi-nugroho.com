import React from 'react';

import { Button } from '../components/atoms/button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['none', 'blue', 'red'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};
