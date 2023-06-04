module.exports = {
    theme: 'reco', // 应用主题
    title: 'Life', // 网站的标题
    description: 'Cherish Life', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
    head: [
        ['link', { rel: 'icon', href: '/heart.svg' }] // 需要被注入到当前页面的 HTML <head> 中的标签
    ],
    themeConfig: {
        logo: '/heart.svg', // 配置导航栏logo(themeConfig.logo)
        author: 'Echlorine',
        nav: [
            // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
            { text : '首页', link : '/' },
            { text : '急救', link : '/first_aid/' },
            { text : '抑郁症', link : '/depression/' },
            {
                text : '旅游',
                items : [
                    { text : '江苏', link : '/travel/JS/' },
                    { text : '吉林', link : '/travel/JL/' }
                ]
            },
            { text : '时间轴', link : '/timeLine/', icon : 'reco-date' },
            { text : '关于', link : '/about/' },
            { text : 'Github', link : 'https://github.com/Echlorine/life' }
        ],
        sidebar: {
            '/depression/' : [
                ''
            ],
            '/first_aid/' : [
                '',
                'scenario'
            ],
            '/travel/JS/' : [
                '',
                'NKG',
                'SZV',
            ],
            '/travel/JL/' : [
                '',
                'CGQ',
                'YNJ',
            ]
        },
        subSidebar: 'auto'
      }
}