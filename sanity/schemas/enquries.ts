export default {
    name: 'enquries',
    type: 'document',
    title: 'Enquries',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',

        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',

        },
        {
            name: 'productName',
            title: 'Product Name',
            type: 'string',

        },
        {
            name: 'size',
            title: 'Size',
            type: 'string',

        },
        {
            name: 'number',
            title: 'Number',
            type: 'string',

        },
        {
            name: 'contactMode',
            title: 'Prefered Mode of Contact',
            type: 'string',

        },
        {
            name: 'status',
            title: 'Enquery full-filled',
            type: 'boolean',
            default: false,

        },
    ],
}
