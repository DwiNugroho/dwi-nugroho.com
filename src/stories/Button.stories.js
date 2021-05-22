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

// export const Primary = Template.bind({});
// Primary.args = {
//   appearance: 'primary',
// };

// export const Outline = Template.bind({});
// Outline.args = {
//   appearance: 'outline',
// };

// const colors = [
//   {
//     color: 'red',
//   },
//   {
//     color: 'blue',
//   },
// ];
// export const Color = () => (
//   <>
//     {colors.map((item, index) => {
//       console.log(item);
//       return (
//         <Button key={index} appearance="primary" {...item}>
//           Button
//         </Button>
//       );
//     })}
//   </>
// );
// Color.args = {
//   appearance: 'primary',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
