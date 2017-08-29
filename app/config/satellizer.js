/* @ngInject */
export default ($authProvider, $envProvider) => {
  const apiUrl = $envProvider.$get().getApiUrl();

  // Providers
  $authProvider.httpInterceptor = function() {
    return true;
  };
  $authProvider.withCredentials = false;
  $authProvider.tokenRoot = null;
  $authProvider.baseUrl = '/';
  $authProvider.loginUrl = apiUrl + '/auth/password';
  $authProvider.signupUrl = '/auth/signup';
  $authProvider.unlinkUrl = '/auth/unlink/';
  $authProvider.tokenName = 'token';
  $authProvider.tokenPrefix = 'satellizer';
  $authProvider.tokenHeader = 'Authorization';
  $authProvider.tokenType = '';
  $authProvider.storageType = 'localStorage';

  // Twitter (Work in progress)
  $authProvider.twitter({
    url: apiUrl + '/auth/twitter',
    clientId: 'fI1qz0H8qdBhk95AFVE1b1S3k',
    authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
    redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
    oauthType: '1.0',
    popupOptions: {
      width: 495,
      height: 645
    }
  });

  // Instagram
  $authProvider.instagram({
    url: apiUrl + '/auth/instagram',
    clientId: 'aa1fba4378b24fae8a3c6ae777e59a0f',
    redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host
  });

  // Google
  $authProvider.google({
    clientId: '356689716495-gd4ovrvbr019u7tr2blutmc4q91ot7v3.apps.googleusercontent.com',
    url: apiUrl + '/auth/google_oauth2',
    redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host
  });

  // Facebook
  $authProvider.facebook({
    clientId: '1744031425861866',
    responseType: 'code',
    name: 'facebook',
    url: apiUrl + '/auth/facebook',
    authorizationEndpoint: 'https://www.facebook.com/v2.8/dialog/oauth',
    redirectUri: window.location.origin + '/',
    requiredUrlParams: ['display', 'scope'],
    scope: ['email'],
    scopeDelimiter: ',',
    display: 'popup',
    oauthType: '2.0',
    popupOptions: {
      width: 580,
      height: 400
    }
  });

  // VK
  $authProvider.oauth2({
    name: 'vk',
    url: apiUrl + '/auth/vk',
    clientId: '5535231',
    redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
    authorizationEndpoint: 'https://oauth.vk.com/authorize',
    requiredUrlParams: ['display', 'scope'],
    scope: ['offline'],
    response_type: 'token',
    scopeDelimiter: ',',
    display: 'popup',
    type: '2.0',
    popupOptions: {
      width: 580,
      height: 400
    }
  });
}
