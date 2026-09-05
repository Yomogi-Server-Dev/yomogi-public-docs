import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Yomogi Server Guide',
    tagline: 'よもぎサーバー 公式ガイド・攻略Wiki',
    favicon: 'img/favicon.ico',

    markdown: {
        mermaid: true,
    },

    themes: ['@docusaurus/theme-mermaid'],

    url: 'https://docs.ymg24.org/',
    baseUrl: '/',

    // リポジトリは guide-docs から yomogi-public-docs へ移設済み。
    // (editUrl・GitHubリンクが移設前の値のまま残っていたため、実体に合わせて修正した)
    organizationName: 'Yomogi-Server-Dev',
    projectName: 'yomogi-public-docs',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'ja',
        locales: ['ja'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl:
                        'https://github.com/Yomogi-Server-Dev/yomogi-public-docs/blob/main/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'json', 'atom'],
                        xslt: true,
                    },
                    editUrl:
                        'https://github.com/Yomogi-Server-Dev/yomogi-public-docs/blob/main/',
                    blogSidebarCount: 'ALL',
                    blogSidebarTitle: 'All our posts',
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: [
                        './src/css/custom.css',
                        './src/css/tailwind.css',
                    ]
                },
            } satisfies Preset.Options,
        ],
    ],

    plugins: [
        async function tailwindcss() {
            return {
                name: 'docusaurus-tailwindcss',
                configurePostCss(postcssOptions) {
                    postcssOptions.plugins.push(require('tailwindcss'));
                    postcssOptions.plugins.push(require('autoprefixer'));
                    return postcssOptions;
                },
            };
        },
        // package.json には既に依存関係として入っていたが、ここで設定していなかったため
        // サイト内検索が実際には機能していなかった(依存パッケージを追加しただけで放置された状態)。
        // React Native/Jest/Prettier等の参考サイトはいずれも検索機能を備えており、
        // ドキュメントの見つけやすさに直結するため有効化する。
        [
            '@easyops-cn/docusaurus-search-local',
            {
                hashed: true,
                language: ['ja', 'en'],
                indexDocs: true,
                indexBlog: true,
                indexPages: false,
                docsRouteBasePath: '/docs',
                highlightSearchTermsOnTargetPage: true,
            },
        ],
    ],

    themeConfig: {
        image: 'img/social-card.jpg',
        navbar: {
            title: 'Yomogi Server Guide',
            logo: {
                alt: 'Yomogi Server Guide Logo',
                src: 'img/yomogi4.png',
            },
            // 以前は生活鯖・人狼鯖・利用規約が1本の"Tutorial"サイドバーに全部混在していた。
            // 参考にした各サイト(React Native/Jest/Ionic等)はいずれも、内容の異なる
            // ドキュメント群をナビバーの独立した項目に分け、それぞれ専用のサイドバーへ
            // 誘導する構成にしている。同じ考え方で生活鯖/人狼鯖を独立させ、
            // 横断的に使う「お問い合わせ」だけは単独リンクにした(利用規約はフッターへ移動)。
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'livingSidebar',
                    position: 'left',
                    label: '生活サーバー',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'wolfSidebar',
                    position: 'left',
                    label: 'マイクラ人狼',
                },
                {to: '/blog', label: 'Blog', position: 'left'},
                {to: '/docs/inquiry', label: 'お問い合わせ', position: 'right'},
                {
                    href: 'https://github.com/Yomogi-Server-Dev/yomogi-public-docs',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'ガイド',
                    items: [
                        {label: '生活サーバー', to: '/docs/living/how-to-join'},
                        {label: 'マイクラ人狼', to: '/docs/wolf/how-to-join'},
                        {label: '利用規約', to: '/docs/tos/terms-of-use'},
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/twstSJnfyY',
                        },
                        {
                            label: 'お問い合わせ',
                            to: '/docs/inquiry',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: '公開ドキュメント (GitHub)',
                            href: 'https://github.com/Yomogi-Server-Dev/yomogi-public-docs',
                        },
                        {
                            label: '運営向けサーバー運用ガイド',
                            href: 'https://github.com/Yomogi-Server-Dev/server-management-guide',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Yomogi Project team.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
