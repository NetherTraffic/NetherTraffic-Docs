module.exports = {
    title: 'NetherTraffic Docs',
    description: 'NetherTraffic 的使用文档',
    themeConfig: {
        sidebar: {
            '/use/': [
                {
                    title: '使用教程',
                    path: '/use/',
                    sidebarDepth: 1,
                    collapsable: false,
                    children: [
                        ['', '基本教程'],
                        ['console', '控制台'],
                        ['launcher', '启动器']
                    ]
                },
                {
                    title: '其他服务',
                    collapsable: false,
                    sidebarDepth: 3,
                    children: [
                        ['/use/other/himcbbs', 'HiMCBBS论坛']
                    ],
                    initialOpenGroupIndex: -1
                }

            ],
            '/problems/': 'auto'
        },

        docsRepo: 'NetherTraffic/NetherTraffic-Docs',
        docsDir: 'src',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '帮我们编辑该页面!',

        nav: [
            { text: '首页', link: '/' },
            { text: '控制台', link: 'https://console.nethertraffic.com/' },
            { text: '使用教程', link: '/use/' },
            { text: '常见问题', link: '/problems/' }
        ],

        lastUpdated: '该文章最后更新于 ',
        smoothScroll: true
    }
}
