// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'PickZ documentation',
    tagline: 'Readers are leaders',
    favicon: 'img/favicon.png',

    // Set the production url of your site here
    url: 'https://docs.pickz.org',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'PickZ', // Usually your GitHub org/user name.
    projectName: 'Documentation', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/', // Serve the docs at the site's root
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.

                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            navbar: {
                title: 'PickZ',
                hideOnScroll: true,
                logo: {
                    alt: 'PickZ',
                    src: 'img/favicon.png',
                },
                items: [
                    {
                        href: 'https://github.com/PickZ-org/PickZ',
                        className: 'header-github-link fa fa-github',
                        'aria-label': 'GitHub repository',
                        position: 'right',
                    },
                ],
            },
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: false,
            },
            
            footer: {
                /* style: 'dark',
                links: [
                    {
                        title: 'Links',
                        items: [ ],
                    },
                ],*/
                copyright: `Copyright © ${new Date().getFullYear()} PickZ.org. Built with Docusaurus.`,
            },
            
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
