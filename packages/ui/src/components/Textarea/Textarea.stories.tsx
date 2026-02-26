import { StoryFn, Meta } from '@storybook/react-webpack5';
import { Textarea } from './Textarea';

const meta: Meta = {
  title: 'shadcn-ui/Textarea',
  component: Textarea,
};

export default meta;

export const Default: StoryFn = () => {
  return <Textarea placeholder="Type your message here." />;
};
