import React from 'react';

import { PostCard } from '../components/molecules/post-card';

export default {
  title: 'Molecules/PostCard',
  component: PostCard,
  // argTypes: {
  //   color: {
  //     options: ['none', 'blue', 'red'],
  //     control: { type: 'radio' },
  //   },
  // },
};

const Template = (args) => <PostCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  style: { maxWidth: '280px' },
};
