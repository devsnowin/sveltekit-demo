const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  daisyui: {
    themes: [
      {
        greeny: {
          primary: '#ce9f48',
          secondary: '#7cead6',
          accent: '#cf8be0',
          neutral: '#1E141F',
          'base-100': '#343842',
          info: '#5FBAF7',
          success: '#157965',
          warning: '#D18A10',
          error: '#E62D30',
        },
      },
    ],
  },

  plugins: [require('daisyui')],
};

module.exports = config;
