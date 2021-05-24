import { useAppBridge } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";

export const useAppBridgeRedirect = () => {
  const app = useAppBridge();
  let appBridgeRedirectTo;

  return (appBridgeRedirectTo = (path) => {
    const redirect = Redirect.create(app);
    redirect.dispatch(Redirect.Action.ADMIN_PATH, path);
  });
};
