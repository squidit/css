/** @jsx jsx */
import { Link, useConfig } from "docz";
import { Flex, jsx } from "theme-ui";
import * as styles from "./styles";

export const Logo = () => {
  const config = useConfig();
  return (
    <Flex
      alignItems="center"
      className="justify-content-center"
      sx={styles.logo}
      data-testid="logo"
    >
      <Link to="/" sx={styles.link}>
        <img
          src="https://storage.googleapis.com/squid-static/squid/logos/logoSquid-pink.svg"
          alt="Squid Logo"
          title="Squid Logo"
          width="100"
          className="mr-3 img-fluid"
        />
        {config.title}
      </Link>
    </Flex>
  );
};
