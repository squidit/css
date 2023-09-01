/** @jsx jsx */
import { jsx, Box, Flex, useColorMode } from 'theme-ui'
import { useConfig, useCurrentDoc } from 'docz'

import * as styles from './styles'
import { Logo } from '../Logo'
import { useEffect } from 'react'

export const Header = props => {
  const { onOpen } = props
  const {
    repository,
    themeConfig: { showDarkModeSwitch, showMarkdownEditButton },
  } = useConfig()
  const { edit = true, ...doc } = useCurrentDoc()
  const [colorMode, setColorMode] = useColorMode()

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setColorMode('dark')
    } else {
      setColorMode('light')
    }
  }, [setColorMode])

  const toggleColorMode = () => {
    document.body.classList.value = `scrollbar ${colorMode === 'light' ? 'dark' : 'light'}`
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }

  return (
    <div sx={styles.wrapper} data-testid="header">
      <Box sx={styles.menuIcon}>
        <button sx={styles.menuButton} onClick={onOpen}>
          <i style={{fontSize: '20px', lineHeight: '26px'}} className="far fa-bars"></i>
        </button>
      </Box>
      <div sx={styles.innerContainer}>
        <Logo />
        <Flex>
          {repository && (
            <Box sx={{ mr: 2 }}>
              <a
                href={repository}
                sx={styles.headerButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i style={{fontSize: '20px'}} className="fab fa-github"></i>
              </a>
            </Box>
          )}
          {showDarkModeSwitch && (
            <button
              sx={styles.headerButton}
              onClick={toggleColorMode}
              aria-label={`Switch to ${colorMode} mode`}
            >
              <i style={{fontSize: '20px'}} className="far fa-sun"></i>
            </button>
          )}
        </Flex>
        {showMarkdownEditButton && edit && doc.link && (
          <a
            sx={styles.editButton}
            href={doc.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i style={{fontSize: '20px'}} className="far fa-file-edit"></i>
            <Box sx={{ pl: 2 }}>Edit page</Box>
          </a>
        )}
      </div>
    </div>
  )
}
