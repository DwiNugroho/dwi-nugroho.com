import React from 'react';

import { Tag } from '../components/atoms/tag';

// export default {
//   title: 'Atoms/Tag',
//   component: Tag,
//   argTypes: {
//     color: {
//       options: ['none', 'blue', 'red'],
//       control: { type: 'radio' },
//     },
//   },
// };

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {};
