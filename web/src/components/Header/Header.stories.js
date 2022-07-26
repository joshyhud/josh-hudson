import Header from '../Header'

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Header',
  component: Header,
};

//👇 We create a “template” of how args map to rendering
const Template = args => <Header {...args} />

export const Default = {
  args: {}
}