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
    {/* Dev */}
    {/* <link
      rel="stylesheet"
      href="/public/css/squid.css"
    /> */}
    {/* Production */}
    <link
      rel="stylesheet"
      href="/public/css/squid.min.css"
    />
    {/* CDN */}
    {/* <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/squidit/css@latest/dist/css/squid.min.css"
    /> */}
  </Helmet>
  {children}
  {/* Dev */}
  {/* <script src='/public/js/squid.js'></script> */}
  {/* Production */}
  <script src='/public/js/squid.min.js'></script>
  {/* CDN */}
  {/* <script src='https://cdn.jsdelivr.net/gh/squidit/css@latest/dist/js/squid.min.js'></script> */}
</React.Fragment>
export default Wrapper