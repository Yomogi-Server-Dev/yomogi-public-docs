import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Yomogi Server Guide',
    tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.ico',

    url: 'https://docs.ymg24.org/',
    baseUrl: '/',

    organizationName: 'yomogi-server-dev',
    projectName: 'guide-docs',

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
                        'https://github.com/Yomogi-Server-Dev/guide-docs/blob/main/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'json', 'atom'],
                        xslt: true,
                    },
                    editUrl:
                        'https://github.com/Yomogi-Server-Dev/guide-docs/blob/main/',
                    blogSidebarCount: 'ALL',
                    blogSidebarTitle: 'All our posts',
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    plugins: [
        async function myPlugin(context, options) {
            return {
                name: 'docusaurus-tailwindcss',
                configurePostCss(postcssOptions) {
                    postcssOptions.plugins.push(require('tailwindcss'));
                    postcssOptions.plugins.push(require('autoprefixer'));
                    return postcssOptions;
                },
            };
        },
    ],

    themeConfig: {
        image: 'img/social-card.jpg',
        navbar: {
            title: 'Yomogi Server Guide',
            logo: {
                alt: 'Yomogi Server Guide Logo',
                src: 'img/yomogi4.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Tutorial',
                },
                {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/Yomogi-Server-Dev/guide-docs',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/twstSJnfyY',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
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
