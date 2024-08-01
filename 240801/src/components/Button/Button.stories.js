import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Controls = Template.bind({});

Controls.args = {
  loading: false,
  text: 'DEFAULT TEXT',
  intent: 'danger',
  onClick: () => console.log('Hello Storybook'),
};
