import {
  GoogleLoginButton,
  FacebookLoginButton,
} from "react-social-login-buttons";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";

function Google() {
  return (
    <div>
      <div className="googleButton">
        <LoginSocialGoogle
          client_id={
            "480967130478-tsiamqd18rv854fvr7in1g02v3j7i2gn.apps.googleusercontent.com"
          }
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={({ provider, data }) => {
            console.log(provider, data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>
      </div>

      <div className="facebookButton">
        <LoginSocialFacebook
          appId="611049337743508"
          onResolve={(response) => {
            console.log(response);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      </div>
    </div>
  );
}

export default Google;
