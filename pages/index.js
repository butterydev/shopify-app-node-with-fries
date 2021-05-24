import { Link, Page } from "@shopify/polaris";

import AdminLink from "../components/AdminLink";
import CreateThemeFiles from "../components/CreateThemeFiles";

const Index = () => {
  return (
    <Page>
      <CreateThemeFiles />
      <p>
        Link to internal app page -> <Link url={"/about"}>About Page</Link>
      </p>
      <p>
        Link to internal admin page ->{" "}
        <AdminLink url={"/orders"}>Go To Orders</AdminLink>
      </p>
      <p>
        Link to external page ->{" "}
        <Link url={"https://www.google.com"}>Google</Link>
      </p>
    </Page>
  );
};

export default Index;
