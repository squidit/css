import * as React from 'react'
import { Helmet } from 'react-helmet-async'

const Wrapper = ({ children, doc }) => <React.Fragment>
  <Helmet>
    <meta charSet="utf-8" />
    <link
      rel="icon"
      type="image/png"
      href="https://cdn.jsdelivr.net/gh/squidit/css/favicon.ico"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/squidit/css@1.0.79/dist/css/squid.min.css"
    />
  </Helmet>
  {children}
  <script src='https://cdn.jsdelivr.net/gh/squidit/css@1.0.79/dist/js/squid.min.js'></script>
</React.Fragment>
export default Wrapper