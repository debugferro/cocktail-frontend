let config;

if (process.env.NODE_ENV === 'production') {
  config = {
    url: '',
  };
} else {
  config = {
    url: 'http://127.0.0.1:3001/api/v1',
  };
}

export default config;
