export default {
    name: 'mastercategory',
    type: 'document',
    title: 'Master Categories',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',

        },
        {
            name: 'childcategories',
            title: 'Child Categories',
            type: 'object',
            fields: [

                {
                    name: 'catname',
                    title: 'Category name',
                    type: 'array',
                    of: [{ type: "string" }]

                },
            ],
        },

    ],
}
