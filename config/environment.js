const BASE_API_URL = "https://api.napster.com/v2.2";
const BASE_API_IMG_URL = "https://api.napster.com/imageserver/v2";

const environment = {
  development: {
    BASE_API_URL,
    BASE_API_IMG_URL,
  },
  production: {
    BASE_API_URL,
    BASE_API_IMG_URL,
  },
};

export { environment };
