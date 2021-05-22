import React from 'react';

import { Input } from '../components/atoms/input';

export default {
  title: 'Atoms/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};
