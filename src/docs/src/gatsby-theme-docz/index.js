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
  const style = `
    .img-fluid {
      margin: 0 !important;
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