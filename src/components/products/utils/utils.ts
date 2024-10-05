export const fixImageFormat = (image: string) => {
  try {
    return JSON.parse(image);
  } catch (e) {
    console.log(e);
    return image;
  }
};
