export const fixImageFormat = (image: string) => {
  try {
    // Jika string JSON di dalam string, parse JSON
    return JSON.parse(image);
  } catch (e) {
    // Jika sudah berupa URL yang benar, langsung return
    return image;
  }
};
