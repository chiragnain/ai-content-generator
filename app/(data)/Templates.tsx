export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool to generate blog title depending on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4693/4693321.png',
        aiPrompt: 'Give me bullet-wise 5 blog topic ideas based on given niche and give me result in Rich text editor format',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'topic',
                required: true
            },
            // {
            //     label: 'Enter blog outline',
            //     field: 'textarea',
            //     name: 'outline'
            // }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool to generate blog content based on the title',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2593/2593549.png',
        aiPrompt: 'Generate Blog Content based on the topic and outline',
        slug: 'blog-content-generation',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'content',
                required: true
            },
            // {
            //     label: 'Enter blog outline',
            //     field: 'textarea',
            //     name: 'outline'
            // }
        ]
    },
    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'An AI tool to remove the plagiarism from your copied/self-written article',
        category: 'Article',
        icon: 'https://cdn-icons-png.flaticon.com/128/3660/3660722.png',
        aiPrompt: 'Remove the plagiarism from the given article',
        slug: 'article-rewriter',
        form: [
            {
                label: 'Enter your article',
                field: 'input',
                name: 'article',
                required: true
            },
            // {
            //     label: 'Enter the article',
            //     field: 'textarea',
            //     name: 'outline'
            // }
        ]
    },
    {
        name: 'Grammar Corrector',
        desc: 'An AI tool to remove grammatical mistakes from your text, making it error free',
        category: 'Article',
        icon: 'https://cdn-icons-png.flaticon.com/128/5494/5494482.png',
        aiPrompt: 'Give me grammar error free article based on the given article to make it error free',
        slug: 'grammar-corrector',
        form: [
            {
                label: 'Enter your article',
                field: 'input',
                name: 'article',
                required: true
            },
            // {
            //     label: 'Enter your article',
            //     field: 'textarea',
            //     name: 'outline'
            // }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool to add relevant emojis to your text',
        category: 'Text Enhancement',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584602.png',
        aiPrompt: 'Add relevant emojis to the given text',
        slug: 'add-emojis-to-text',
        form: [
            {
                label: 'Enter your text',
                field: 'textarea',
                name: 'text',
                required: true
            }
        ]
    },
    {
        name: 'Write Code',
        desc: 'An AI tool to write code in any programming language',
        category: 'Programming',
        icon: 'https://cdn-icons-png.flaticon.com/128/7069/7069896.png',
        aiPrompt: 'Write code in the specified programming language based on the given requirements',
        slug: 'write-code',
        form: [
            {
                label: 'What code do you want?',
                field: 'input',
                name: 'language',
                required: true
            },
            // {
            //     label: 'Enter code requirements',
            //     field: 'textarea',
            //     name: 'requirements',
            //     required: true
            // }
        ]
    },
    {
        name: 'Explain Code',
        desc: 'An AI tool to explain any piece of code',
        category: 'Programming',
        icon: 'https://cdn-icons-png.flaticon.com/128/1253/1253701.png',
        aiPrompt: 'Explain the given code in detail',
        slug: 'explain-code',
        form: [
            {
                label: 'Enter code to explain',
                field: 'textarea',
                name: 'code',
                required: true
            }
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'An AI tool to detect and suggest fixes for bugs in your code',
        category: 'Programming',
        icon: 'https://cdn-icons-png.flaticon.com/128/11676/11676391.png',
        aiPrompt: 'Detect and suggest fixes for bugs in the given code',
        slug: 'code-bug-detector',
        form: [
            {
                label: 'Enter code to analyze for bugs',
                field: 'textarea',
                name: 'code',
                required: true
            }
        ]
    }
]
