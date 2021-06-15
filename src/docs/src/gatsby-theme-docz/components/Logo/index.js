/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link, useConfig } from 'docz'
import * as styles from './styles'

export const Logo = () => {
  const config = useConfig()
  return (
    <Flex alignItems="center" className='justify-content-center' sx={styles.logo} data-testid="logo">
      <Link to="/" sx={styles.link}>
        <img
          src='http://squidit.com.br/wp-content/themes/squid/assets/img/logo.svg'
          alt='Squid Logo'
          title='Squid Logo'
          className='mr-3 img-fluid'
        />
        {config.title}
      </Link>
    </Flex>
  )
}