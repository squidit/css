import * as mixins from '~utils/mixins'
import { media } from '~theme/breakpoints'

export const wrapper = {
  bg: 'header.bg',
  position: 'relative',
  zIndex: 1,
  borderBottom: t => `1px solid ${t.colors.border}`,
}

export const innerContainer = {
  ...mixins.centerAlign,
  px: 4,
  position: 'relative',
  justifyContent: 'space-between',
  height: 80,
}

export const menuIcon = {
  display: 'none',
  position: 'fixed',
  top: 100,
  left: 30,
  borderRadius: '50%',
  background: 'var(--white)',
  textAlign: 'center',
  padding: '5px',
  width: '35px',
  color: 'var(--black)',
  height: '35px',
  boxShadow: '0 0 6px 1px var(--black)',
  [media.tablet]: {
    display: 'block',
  },
}

export const menuButton = {
  ...mixins.ghostButton,
  color: 'var(--black)',
  opacity: 0.5,
  cursor: 'pointer',
}

export const headerButton = {
  ...mixins.centerAlign,
  outline: 'none',
  p: '12px',
  border: 'none',
  borderRadius: 9999,
  bg: 'header.button.bg',
  color: 'header.button.color',
  fontSize: 0,
  fontWeight: 600,
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'none'
  }
}

export const editButton = {
  ...mixins.centerAlign,
  position: 'absolute',
  bottom: -40,
  right: 30,
  bg: 'transparent',
  color: 'muted',
  fontSize: 1,
  textDecoration: 'none',
  borderRadius: 'radius',
}
