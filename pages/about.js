import { Link, Page } from "@shopify/polaris";

const About = () => {
  return (
    <Page>
      <h1>About Page</h1>
      <p>
        Link to app page -> <Link url={"/"}>Home Page</Link>
      </p>
    </Page>
  );
};

export default About;
