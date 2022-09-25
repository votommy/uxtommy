export default {
    lang: 'en-US',
    title: 'uxTOMMY',
    titleTemplate: false,
    description: "Tommy's website",
    themeConfig: {
        logo: 'https://raw.githubusercontent.com/votommy/uxtommy/393483f02d16ef3a893028e7da023b01d192d7d7/docs/assets/logo.svg',
        nav: [
            { text: 'About Me', link: '/' },
            { text: 'Art', link: '/art' },
            { text: 'Blog', link: '/blog' },
            { text: 'Contact', link: '/contact' }
        ],
        footer: {
            message: '',
            copyright: 'Copyright © 2022 Tommy'
        }
    },
    head: [
        ['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/votommy/uxtommy/393483f02d16ef3a893028e7da023b01d192d7d7/docs/assets/logo.svg', type: 'image/svg' }]
    ]
}