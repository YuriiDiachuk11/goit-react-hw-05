const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
const defaultSize = "w500";

const getImage = (filePath, size = defaultSize) => {
  if (!filePath) {
    return null;
  }
  return `${IMAGE_BASE_URL}${size}${filePath}`;
};
export default getImage;
