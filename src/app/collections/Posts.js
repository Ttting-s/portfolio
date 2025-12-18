export const Posts = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "includedInBlog",
      type: "checkbox",
      defaultValue: true,
    },
  ],
}