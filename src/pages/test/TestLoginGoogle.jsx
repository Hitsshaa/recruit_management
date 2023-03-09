import React, { useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

function TestLoginGoogle() {
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({
        client:
          "425255993918-d6pm68qh0jquti8kradsmkm2uefnbund.apps.googleusercontent.com",
      });
    });
  });
  const responseGoogle = (res) => {
    console.log(res);
  };

  return (
    <div>
      <GoogleLogin
        clientId="425255993918-d6pm68qh0jquti8kradsmkm2uefnbund.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default TestLoginGoogle;
