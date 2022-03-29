import PageBuilderImageText from '../PageBuilderImageText'

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Image | Text Component',
  component: PageBuilderImageText,
};

//👇 We create a “template” of how args map to rendering
const Template = args => <PageBuilderImageText {...args} />

export const Default = {
  args: {
    section: {
      layout: 'row',
    }
  },
}

export const Reverse = {
  args: {
    section: {
      layout: 'row-reverse',
    }
  },
}

export const Column = {
  args: {
    section: {
      layout: 'column',
    }
  },
}

export const ColumnReverse = {
  args: {
    section: {
      layout: 'column-reverse',
    }
  },
}