/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link, useConfig } from 'docz'
import * as styles from './styles'

const logoDark = 'https://hub-cdn.squidit.com.br/shared/prd/dist/f35992fdf9e5c1661a57.svg'
const logoLight = 'https://hub-cdn.squidit.com.br/shared/prd/dist/50bf131db1c274381550.svg'

export const Logo = () => {
  const config = useConfig()
  return (
    <Flex alignItems="center" className='justify-content-center' sx={styles.logo} data-testid="logo">
      <Link to="/" sx={styles.link}>
        <img
          width="100%"
          src={document.body.parentElement.classList.contains('dark') ? logoDark : logoLight}
          alt='Squid Logo'
          title='Squid Logo'
          className='mr-3 img-fluid'
        />
        {config.title}
      </Link>
    </Flex>
  )
}
