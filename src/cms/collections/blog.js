const blog = {
    name: 'blog',
    label: 'Blog',
    folder: 'blog',
    create: true,
    fields: [
        {
            name: 'path',
            label: 'path',
        },
        {
            name: 'date',
            label: 'Date',
            widget: 'date',
        },
        {
            name: 'title',
            label: 'Title',
        },
        {
            name: 'template',
            label: 'Template',
            widget: 'select',
            options: [
                {
                    label: 'Blog template',
                    value: 'blogTemplate',
                },
                {
                    label: 'Blog template 2',
                    value: 'blogTemplateTwo',
                },
            ]
        },
        { 
            name: 'body', 
            label: 'Body', 
            widget: 'markdown',
        }
    ],
}

export default blog;