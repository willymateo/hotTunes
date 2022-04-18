const BASE_API_URL = "https://api.deezer.com";

const environment = {
  development: {
    BASE_API_URL: `https://cors-anywhere.herokuapp.com/${BASE_API_URL}`,
  },
  production: {
    BASE_API_URL: BASE_API_URL,
  },
};

export { environment };
