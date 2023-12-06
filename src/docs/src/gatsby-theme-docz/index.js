/** @jsx jsx */
import { theme, useConfig, ComponentsProvider } from 'docz'
import { jsx, Styled, ThemeProvider } from 'theme-ui'
import defaultTheme from '~theme'
import components from '~components'

const themeConfig = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    white: '#fff',
    primary: 'var(--pink)',
    text: 'var(--text_color)',
    muted: 'var(--gray)',
    link: 'var(--pink)',
    background: 'var(--background_secondary)',
    border: 'var(--border_color)',
    sidebar: {
      bg: 'var(--background_secondary)',
      navGroup: 'var(--text_color)',
      navLink: 'var(--text_color)',
      navLinkActive: 'var(--pink)',
      tocLink: 'var(--text_color)',
      tocLinkActive: 'var(--pink)',
    },
    header: {
      bg:  'var(--background_secondary)',
      text: 'var(--text_color)',
      border: 'var(--border_color)',
      button: {
        bg: 'var(--black)',
        color: 'var(--white)',
      },
    },
    modes: {
      dark: {
        ...defaultTheme.colors.modes.dark,
        primary: 'var(--pink)',
        link: 'var(--pink)',
        text: 'var(--text_color)',
        muted: 'var(--gray)',
        border: 'var(--border_color)',
        background: 'var(--background_secondary)',
        sidebar: {
          bg: 'var(--background_secondary)',
          navGroup: 'var(--text_color)',
          navLink: 'var(--text_color)',
          navLinkActive: 'var(--pink)',
          tocLink: 'var(--text_color)',
          tocLinkActive: 'var(--pink)',
        },
        header: {
          bg:  'var(--background_secondary)',
          text: 'var(--text_color)',
          border: 'var(--border_color)',
          button: {
            bg: 'var(--white)',
            color: 'var(--black)',
          },
        },
      },
    },
  },
}

const Theme = ({ children }) => {
  const config = useConfig()
  const html = document.getElementsByTagName('html')[0]
  if (typeof document !== `undefined`) {
    let colorMode = 'light'
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      colorMode = 'dark'
    }
    document.body.classList.add('scrollbar')
    html.classList.add(colorMode)
  }
  const style = `
    .grid-box {
      border: 1px solid var(--border_color);
      padding: 1rem;
      background: var(--background_secondary);
      border-radius: 5px;
    }
    div[data-testid="header"]{
      position: fixed;
      width: 100%;
      z-index: 2;
    }
    div[data-testid="main-container"] {
      padding-top: 112px;
    }
    @media (min-width: 921px) {
      div[data-testid="sidebar"] {
        position: fixed;
        top: 80px;
        left: 0;
        min-height: calc(100vh - 80px);
        padding-bottom: 112px;
      }
      div[data-testid="main-container"] {
        grid-column: 2;
        padding-top: 112px;
      }
    }
    div[data-testid="sidebar"] {
      scrollbar-color: var(--gray_light) var(--gray);
      scrollbar-width: thin;
    }
    div[data-testid="sidebar"]::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }
    div[data-testid="sidebar"]::-webkit-scrollbar-track {
      background: var(--gray_light);
      border-radius: 7px;
    }
    div[data-testid="sidebar"]::-webkit-scrollbar-thumb  {
      background: var(--gray);
      border-radius: 7px;
    }
    div[data-testid="sidebar"]::-webkit-scrollbar-thumb:hover {
      background: var(--gray_dark);
    }
    .img-fluid {
      margin: 0;
    }
    .pagination li {
      margin: 0 !important;
    }
    .table {
      margin-top: 0 !important;
      border-collapse: collapse !important;
    }
    .table p {
      margin: 0 !important;
    }
    .table th {
      text-align: center !important;
    }
    .breadcrumb,
    .tabs-header,
    .pagination,
    .dropdown,
    .box p {
      margin-left: 0 !important;
      margin-bottom: 0 !important;
    }
    label, .box-validation {
      color: var(--theme-ui-colors-text);
    }
    .table tr {
      border-collapse: collapse;
    }
    .table>tbody>tr td,
    .table>tbody>tr th {
      align-items: center;
      vertical-align: middle;
      border: none;
      padding: 1rem .5rem !important;
    }
    .tabs-header li {
      margin-bottom: 0 !important;
    }
    .dropdown-divider {
      margin: .5rem 0 !important;
      border-color: var(--border-color);
    }
    .table>tfoot tr td,
    .table>tfoot tr th {
      padding: 1rem .5rem !important;
      color: var(--text_color);
    }
    .dropdown li:last-child {
      margin: 0 0 -15px 0;
    }
  `
  return (
    <ThemeProvider theme={config.themeConfig}>
      <style dangerouslySetInnerHTML={{__html: style}} />
      <ComponentsProvider components={components}>
        {/* eslint-disable-next-line */}
        <Styled.root>{children}</Styled.root>
      </ComponentsProvider>
    </ThemeProvider>
  )
}

export default theme(themeConfig)(Theme)