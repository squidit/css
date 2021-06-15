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
    text: 'var(--black)',
    muted: 'var(--gray)',
    link: 'var(--pink)',
    background: '#FFF',
    border: 'var(--gray_light)',
    sidebar: {
      bg: '#fff',
      navGroup: 'var(--black)',
      navLink: 'var(--gray_dark)',
      navLinkActive: 'var(--pink)',
      tocLink: 'var(--gray_dark)',
      tocLinkActive: 'var(--pink)',
    },
    header: {
      bg:  'var(--white)',
      text: 'var(--black)',
      border: 'var(--gray_light)',
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
        text: 'var(--gray_light)',
        muted: 'var(--gray)',
        border: 'var(--gray_dark)',
        background: 'var(--gray_dark)',
        sidebar: {
          bg: 'var(--black)',
          navGroup: 'var(--white)',
          navLink: '#fff',
          navLinkActive: 'var(--pink)',
          tocLink: 'var(--white)',
          tocLinkActive: 'var(--pink)',
        },
        header: {
          bg:  'var(--black)',
          text: '#fff',
          border: 'var(--gray_dark)',
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
  if (typeof document !== `undefined`) {
    const body = document.getElementsByTagName('body')[0]
    if (body) {
      body.classList.add('scrollbar')
    }
  }
  const style = `
    @media (min-width: 921px) {
      div[data-testid="header"]{
        position: fixed;
        width: 100%;
        z-index: 2;
      }
      div[data-testid="sidebar"] {
        position: fixed;
        top: 80px;
        left: 0;
        min-height: 100vh;
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
      border-color: var(--gray_light);
    }
    .table>tfoot tr td,
    .table>tfoot tr th {
      padding: 1rem .5rem !important;
      color: var(--black);
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