export default {
    name: 'testimonial',
    type: 'document',
    title: 'Testimonial',
    fields: [
        {
            name: 'testimonial',
            type: 'string',
            title: 'Testimonial'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'testimonial'
            }
        },
        {
            name: 'jobTitle',
            type: 'string',
            title: 'JobTitle',
        },
        {
            name: 'company',
            type: 'string',
            title: 'Company',
        },
        {
            name: 'personImage',
            type: 'image',
            title: 'Person Image',
            fields: [{ type: 'text', name: 'alt', title: 'Alternative Text' }]
        },
        {
            name: 'content',
            type: 'string',
            title: 'Content'
        },
    ]
}