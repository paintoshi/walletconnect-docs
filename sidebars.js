// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
  mainSidebar: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand sidebar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg" alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'Introduction',
      className: 'menu_outer_list',
      collapsible: false,
      items: ['readme']
    },
    {
      type: 'category',
      label: 'Products',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'category',
          label: 'SDKs',
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'link',
              label: 'Web3Modal SDK',
              href: '/2.0/web3modal/about'
            },
            'web3wallet/about'
          ]
        },
        {
          type: 'category',
          label: 'Cloud',
          collapsed: true,
          collapsible: true,
          items: ['cloud/explorer', 'cloud/relay']
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'category',
          label: 'APIs',
          collapsed: true,
          collapsible: true,
          items: [
            'api/sign',
            'api/auth',
            'api/chat',
            {
              type: 'category',
              label: 'Push',
              collapsed: true,
              collapsible: true,
              items: ['api/push/prerequisites', 'api/push/push']
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Technical Reference',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        'advanced/faq',
        'advanced/glossary',
        'advanced/migrating-from-v1.0',
        'advanced/what-changed-from-v1.0',
        {
          type: 'category',
          label: 'RPC Reference',
          items: [
            'advanced/rpc-reference/ethereum-rpc',
            'advanced/rpc-reference/cosmos-rpc',
            'advanced/rpc-reference/solana-rpc',
            'advanced/rpc-reference/stellar-rpc',
            'advanced/rpc-reference/tezos-rpc',
            'advanced/rpc-reference/near-rpc'
          ]
        },
        {
          type: 'category',
          label: 'Specs',
          collapsed: true,
          collapsible: true,
          items: [
            'specs/readme',
            {
              type: 'category',
              label: 'Client APIs',
              items: [
                {
                  type: 'category',
                  label: 'Sign API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/sign'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Auth API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/auth'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Chat API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/chat'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Push API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/push'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Sync API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/sync'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Core API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/core'
                    }
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Meta-Clients API',
              items: [
                {
                  type: 'category',
                  label: 'Web3Inbox',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/meta-clients/web3inbox'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Web3Wallet',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/meta-clients/web3wallet'
                    }
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Server APIs',
              items: [
                {
                  type: 'category',
                  label: 'Relay Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/relay'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Keys Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/keys'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Echo Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/echo'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Cast Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/cast'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'History Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/history'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  javascript: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand sidebar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg" alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'Products',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Modal SDK',
          collapsible: true,
          collapsed: true,
          items: [
            'web3modal/about',
            {
              type: 'category',
              label: 'Getting Started',
              collapsed: true,
              collapsible: true,
              items: [
                {
                  type: 'category',
                  label: 'React',
                  collapsed: true,
                  collapsible: true,
                  items: [
                    'web3modal/react/installation',
                    'web3modal/react/hooks',
                    'web3modal/react/components'
                  ]
                },
                {
                  type: 'category',
                  label: 'HTML',
                  collapsed: true,
                  collapsible: true,
                  items: [
                    'web3modal/html-js/installation',
                    'web3modal/html-js/actions',
                    'web3modal/html-js/components'
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Customization',
              collapsed: true,
              collapsible: true,
              items: ['web3modal/options', 'web3modal/theming']
            },
            {
              type: 'category',
              label: 'Advanced',
              collapsed: true,
              collapsible: true,
              items: [
                'web3modal/advanced/wallets',
                'web3modal/advanced/chains',
                'web3modal/advanced/providers',
                'web3modal/advanced/mobile-linking',
                {
                  type: 'category',
                  label: 'Standalone Mode',
                  collapsed: true,
                  collapsible: true,
                  items: [
                    'web3modal/standalone/about',
                    'web3modal/standalone/installation',
                    'web3modal/standalone/actions'
                  ]
                }
              ]
            },
            'web3modal/faq'
          ]
        },
        {
          type: 'category',
          label: 'Web3Wallet SDK',
          collapsible: true,
          collapsed: true,
          items: [
            'javascript/web3wallet/installation',
            'javascript/web3wallet/wallet-usage',
            'javascript/web3wallet/upgrade-guide'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'APIs',
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'category',
              label: 'Sign',
              collapsible: true,
              collapsed: true,
              items: [
                'javascript/sign/installation',
                'javascript/sign/dapp-usage',
                'javascript/sign/wallet-usage',
                'javascript/sign/smart-wallets'
              ]
            },
            {
              type: 'category',
              label: 'Auth',
              collapsible: true,
              collapsed: true,
              items: [
                'javascript/auth/installation',
                'javascript/auth/dapp-usage',
                'javascript/auth/wallet-usage'
              ]
            },
            {
              type: 'category',
              label: 'Push',
              collapsible: true,
              collapsed: true,
              items: [
                'javascript/push/installation',
                'javascript/push/dapp-usage',
                'javascript/push/wallet-usage'
              ]
            },
            {
              type: 'category',
              label: 'Chat',
              collapsible: true,
              collapsed: true,
              items: ['javascript/chat/installation', 'javascript/chat/usage']
            },
            {
              type: 'category',
              label: 'Core',
              collapsible: true,
              collapsed: true,
              items: ['javascript/core/pairing-api']
            }
          ]
        },
        {
          type: 'category',
          label: 'Providers',
          collapsible: true,
          collapsed: true,
          items: ['javascript/providers/ethereum', 'javascript/providers/universal']
        }
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        'javascript/guides/examples-and-resources',
        'javascript/guides/nodejs',
        'javascript/guides/react-native',
        'javascript/guides/shared-core',
        'javascript/guides/typescript'
      ]
    }
  ],
  kotlin: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand sidebar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg" alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'Products',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Wallet SDK',
          collapsible: true,
          collapsed: true,
          items: [
            'kotlin/web3wallet/installation',
            'kotlin/web3wallet/wallet-usage',
            'kotlin/web3wallet/upgrade-guide'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Sign',
          collapsible: true,
          collapsed: true,
          items: ['kotlin/sign/installation', 'kotlin/sign/dapp-usage', 'kotlin/sign/wallet-usage']
        },
        {
          type: 'category',
          label: 'Auth',
          collapsible: true,
          collapsed: true,
          items: [
            'kotlin/auth/installation',
            'kotlin/auth/dapp-or-requester-usage',
            'kotlin/auth/wallet-or-responder-usage'
          ]
        },
        {
          type: 'category',
          label: 'Push',
          collapsible: true,
          collapsed: true,
          items: ['kotlin/push/installation', 'kotlin/push/wallet-usage', 'kotlin/push/dapp-usage']
        },
        {
          type: 'category',
          label: 'Echo',
          collapsible: true,
          collapsed: true,
          items: ['kotlin/echo/usage']
        },
        {
          type: 'category',
          label: 'Chat',
          collapsible: true,
          collapsed: true,
          items: ['kotlin/chat/installation', 'kotlin/chat/usage']
        },
        {
          type: 'category',
          label: 'Core',
          collapsible: true,
          collapsed: true,
          items: ['kotlin/core/installation', 'kotlin/core/pairing', 'kotlin/core/relay']
        }
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      className: 'menu_outer_list',
      collapsible: false,
      items: ['kotlin/guides/examples-and-resources', 'kotlin/guides/mobile-linking']
    }
  ],
  swift: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand sidebar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg" alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'Products',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Wallet SDK',
          collapsible: true,
          collapsed: true,
          items: [
            'swift/web3wallet/installation',
            'swift/web3wallet/wallet-usage',
            'swift/web3wallet/upgrade-guide'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Sign',
          collapsible: true,
          collapsed: true,
          items: ['swift/sign/installation', 'swift/sign/dapp-usage', 'swift/sign/wallet-usage']
        },
        {
          type: 'category',
          label: 'Auth',
          collapsible: true,
          collapsed: true,
          items: ['swift/auth/installation', 'swift/auth/dapp-usage', 'swift/auth/wallet-usage']
        },
        {
          type: 'category',
          label: 'Push',
          collapsible: true,
          collapsed: true,
          items: ['swift/push/installation', 'swift/push/wallet-usage', 'swift/push/dapp-usage']
        },
        {
          type: 'category',
          label: 'Echo',
          collapsible: true,
          collapsed: true,
          items: ['swift/echo/installation', 'swift/echo/usage']
        },
        {
          type: 'category',
          label: 'Chat',
          collapsible: true,
          collapsed: true,
          items: ['swift/chat/installation', 'swift/chat/usage']
        },
        {
          type: 'category',
          label: 'Core',
          collapsible: true,
          collapsed: true,
          items: [
            'swift/core/installation',
            'swift/core/pairing-usage',
            'swift/core/networking-configuration'
          ]
        },
        {
          type: 'category',
          label: 'Router',
          collapsible: true,
          collapsed: true,
          items: ['swift/router/installation']
        }
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      className: 'menu_outer_list',
      collapsible: false,
      items: ['swift/guides/examples-and-resources', 'swift/guides/mobile-linking']
    }
  ],
  flutter: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand sidebar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg" alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'Products',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Wallet SDK',
          collapsible: true,
          collapsed: true,
          items: ['flutter/wallets/installation', 'flutter/wallets/wallet-usage']
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Sign',
          collapsible: true,
          collapsed: true,
          items: ['flutter/dapps/sign/installation', 'flutter/dapps/sign/dapp-usage']
        },
        {
          type: 'category',
          label: 'Auth',
          collapsible: true,
          collapsed: true,
          items: ['flutter/dapps/auth/installation', 'flutter/dapps/auth/dapp-usage']
        }
      ]
    }
  ]
}
