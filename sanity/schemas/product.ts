export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{ type: 'image' }],
    },
    // {
    //   name: 'description',
    //   type: 'text',
    //   title: 'Description of product',
    // },
    {
      name: "content",
      title: "Content",
      type: 'array',
      of: [{ type: 'block' }],
      default: ["hi"]
    },
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'size',
              title: 'Size',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: "content",
              title: "Content",
              type: 'array',
              of: [{ type: 'block' }],
            },
          ],
        },
      ],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'price_id',
      title: 'Stripe Price ID',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    },
  ],
}
