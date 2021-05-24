import Link from "next/link";

const IS_EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z\d+.-]*:|\/\/)/;

const AppLink = ({ children, url = "", external, ref, ...rest }) => {
  if (external || IS_EXTERNAL_LINK_REGEX.test(url)) {
    rest.target = "_blank";
    rest.rel = "noopener noreferrer";
    return (
      <a href={url} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={url} {...rest}>
      {children}
    </Link>
  );
};

export default AppLink;
