import { Link } from "@shopify/polaris";

import { useAppBridgeRedirect } from "../../hooks/useAppBridgeRedirect";

const AdminLink = ({ children, url = "", external, ref, ...rest }) => {
  const appBridgeRedirectTo = useAppBridgeRedirect();

  const handleClick = (event) => {
    event.preventDefault();
    appBridgeRedirectTo(url);
  };

  return (
    <Link onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
};

export default AdminLink;
