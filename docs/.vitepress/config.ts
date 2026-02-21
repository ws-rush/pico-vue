import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Pocket Vue",
    description: "A lightweight Vue-compatible library for progressive enhancement",
    base: '/',

    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: 'Guide', link: '/start-here/installation' },
            { text: 'API', link: '/directives/v-bind' },
            { text: 'Examples', link: '/examples/' },
            { text: 'GitHub', link: 'https://github.com/ws-rush/pocket-vue' }
        ],

        search: {
            provider: 'local'
        },

        sidebar: [
            {
                text: 'Start Here',
                items: [
                    { text: 'Installation', link: '/start-here/installation' },
                    { text: 'Quick Start', link: '/start-here/quick-start' }
                ]
            },
            {
                text: 'Essentials',
                items: [
                    { text: 'v-scope', link: '/essentials/v-scope' },
                    { text: 'Root Scope', link: '/essentials/root-scope' },
                    { text: 'Components', link: '/essentials/components' },
                    { text: 'Lifecycle', link: '/essentials/lifecycle' }
                ]
            },
            {
                text: 'Guides',
                items: [
                    { text: 'State Management', link: '/guides/state-management' },
                    { text: 'Server Integration', link: '/guides/server-integration' },
                    { text: 'Form Handling', link: '/guides/form-handling' }
                ]
            },
            {
                text: 'Directives',
                items: [
                    { text: 'v-bind', link: '/directives/v-bind' },
                    { text: 'v-model', link: '/directives/v-model' },
                    { text: 'v-if', link: '/directives/v-if' },
                    { text: 'v-for', link: '/directives/v-for' },
                    { text: 'v-show', link: '/directives/v-show' },
                    { text: 'v-on', link: '/directives/v-on' },
                    { text: 'v-effect', link: '/directives/v-effect' },
                    { text: 'v-html', link: '/directives/v-html' },
                    { text: 'v-text', link: '/directives/v-text' },
                    { text: 'v-cloak', link: '/directives/v-cloak' },
                    { text: 'v-pre', link: '/directives/v-pre' },
                    { text: 'v-once', link: '/directives/v-once' },
                    { text: 'ref', link: '/directives/ref' }
                ]
            },
            {
                text: 'Globals',
                items: [
                    { text: '$el', link: '/globals/el' },
                    { text: '$root', link: '/globals/root' },
                    { text: '$data', link: '/globals/data' },
                    { text: '$refs', link: '/globals/refs' },
                    { text: '$nextTick', link: '/globals/nextTick' }
                ]
            },
            {
                text: 'Advanced',
                items: [
                    { text: 'Custom Directives', link: '/advanced/custom-directives' },
                    { text: 'Plugins', link: '/advanced/plugins' },
                    { text: 'Global State', link: '/advanced/global-state' },
                    { text: 'Custom Delimiters', link: '/advanced/custom-delimiters' },
                    { text: 'Security', link: '/advanced/security' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/ws-rush/pocket-vue' }
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025-present'
        }
    }
})
