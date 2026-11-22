const config = {
    development: {
      // Backend simulation API
      backendUrl: 'https://03dht3kc-5000.euw.devtunnels.ms',
      
      // Stripe subscription API  
      apiBaseUrl: 'http://localhost:5502/api',
      frontendUrl: 'http://127.0.0.1:5501',
      stripePublishableKey: 'pk_test_51OOivlAd4ULYw2NbezAGuGZCcd12huJWoi4GHPmUZzz5SmuCaptFp9tcR8Tefcgpkzu8S5xkI1NG8P0VWQJktoxJ00IX6EC0nO',
      isDevelopment: true
    },
    production: {
      // Backend simulation API (custom domain for sim service)
      backendUrl: 'https://sim.electrisim.com',
      
      // Stripe subscription / auth API (custom domain)
      apiBaseUrl: 'https://api.electrisim.com/api',
      frontendUrl: 'https://app.electrisim.com',
      stripePublishableKey: 'pk_live_51OOivlAd4ULYw2NbUnCgqV6KHAiRzkuoMJfcYKv1R5DsarBaly7QDOQCwwHI4GQUhYqA57SGHIOIwYleWKs0UQNe00fiZkcYco',
      isDevelopment: false
    }
  };
  
const isGitHubPages = window.location.hostname.endsWith('.github.io');
const isProduction = window.location.hostname === 'app.electrisim.com' || isGitHubPages;
const env = isProduction ? 'production' : 'development';
const pagesBackendUrl = window.location.hostname === 'divyesh-khandhedia.github.io'
    ? 'https://electrisim-backend.onrender.com'
    : config.production.backendUrl;
const currentConfig = isGitHubPages
    ? {
        ...config.production,
        backendUrl: pagesBackendUrl,
        frontendUrl: new URL('.', window.location.href).href.replace(/\/$/, '')
    }
    : config[env];


window.ENV = currentConfig;
console.log('Current environment:', env);
console.log('Using API URL:', currentConfig.apiBaseUrl);


export default currentConfig;
