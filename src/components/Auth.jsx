import { auth, provider } from "../firebase/Firebase.Config";
import { signInWithPopup } from "firebase/auth";

const Auth = ({ setIsAuth }) => {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem("valueToken", res.user.refreshToken);
        setIsAuth(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="auth">
      <h1>Chat Odası</h1>
      <p>Devam Etmek İçin Giriş Yap</p>
      <button onClick={signIn}>Google ile Gir</button>
    </div>
  );
};

export default Auth;
