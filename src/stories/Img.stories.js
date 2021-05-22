import React from 'react';

import { Img } from '../components/atoms/img';

export default {
  title: 'Atoms/Img',
  component: Img,
};

const Template = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {};
