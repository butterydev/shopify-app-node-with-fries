export const createUpdateThemeAsset = (fetchFunction, success, error) => {
  fetchFunction("/rest")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data);
    });
};
