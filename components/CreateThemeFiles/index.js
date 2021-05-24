import { Button } from "@shopify/polaris";

import { useUserLoggedInFetch } from "../../hooks/useUserLoggedInFetch";

import { createUpdateThemeAsset } from "./helpers.js";

const CreateThemeFiles = () => {
  const fetchFunction = useUserLoggedInFetch();

  const handleClick = () => {
    createUpdateThemeAsset(fetchFunction);
  };

  return <Button onClick={handleClick}>Create Theme Files</Button>;
};

export default CreateThemeFiles;
