export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'overview',
            type: 'string',
            title: 'Overview'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                { type: 'block' }, { type: 'image', fields: [{ type: 'text', name: 'alt', title: 'Alternative Text' }] }
            ]
        },
        // New fields for author details
        {
            name: 'authorName',
            type: 'string',
            title: 'Author Name'
        },
        {
            name: 'authorImage',
            type: 'image',
            title: 'Author Image',
            fields: [{ type: 'text', name: 'alt', title: 'Alternative Text' }]
        }
    ]
}