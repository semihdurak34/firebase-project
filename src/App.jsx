import { useRef, useState } from "react";

import Auth from "./components/Auth";
import Chat from "./components/Chat";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("valueToken"));
  const [room, setRoom] = useState(null);
  const inputRef = useRef(null);
  console.log(inputRef);

  const closePage = () => {
    localStorage.removeItem("valueToken");
    setIsAuth(false);
  };
  console.log(isAuth);
  if (!isAuth) {
    return (
      <div className="container">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  } else {
    return (
      <div className="container">
        {room ? (
          <Chat room={room} />
        ) : (
          <div className="room-container">
            <h1>Chat Odası</h1>
            <p>Hnagi Odaya Girmek İstersin?</p>
            <input ref={inputRef} type="text" />
            <button onClick={() => setRoom(inputRef.current.value)}>
              Odaya Gir
            </button>
            <button onClick={closePage}>Çıkış Yap</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
