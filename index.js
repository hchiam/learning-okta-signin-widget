// Okta account has it set up to work when served at: http://localhost:8080

var signIn = new OktaSignIn({
  baseUrl: "https://dev-422326.okta.com",
  clientId: "0oarxj0d6JNIGrBm94x6", // this has to match setup in Okta account
  redirectUri: "https://okta-signin-demo-success.surge.sh", // this has to match setup in Okta account
  authParams: {
    responseType: "id_token",
    display: "page",
  },
});

signIn.renderEl({ el: "#okta-login-container" }, function (res) {
  if (res.status === "SUCCESS") {
    res.session.setCookieAndRedirect(orgUrl);
  }
});
