export default {
  title: "Intro Section",
  name: "pageBuilderIntro",
  type: "object",
  fields: [
    {
      title: "Section Title",
      name: "title",
      type: "string",
    },
    {
      title: "Text",
      name: "text",
      type: "portableText",
    },
    {
      title: "Headshot Image",
      name: "headshotImage",
      type: "image",
      fields: [
        {
          // Edit the image to add Alt text
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Intro Section",
      };
    },
  },
};
