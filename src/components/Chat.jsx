import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database, auth } from "../firebase/Firebase.Config";
console.log(auth);
const Chat = ({ room }) => {
  const [newMsg, setNewMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const messageRef = collection(database, "messages");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMsg) return;
    addDoc(messageRef, {
      text: newMsg,
      user: auth.currentUser.displayName,
      room: room,
      createdAt: serverTimestamp(),
    });

    console.log(newMsg);
    setNewMsg("");
  };
  const toUpperCase = room.toUpperCase();
  useEffect(() => {
    const queryMessage = query(
      messageRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    onSnapshot(queryMessage, (snapshot) => {
      let commingMessages = [];
      snapshot.forEach((doc) => {
        commingMessages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(commingMessages);
    });
  }, []);
  return (
    <div className="chat">
      <div className="chat-infoo">
        <p>{auth.currentUser.displayName}</p>
        <h4>{toUpperCase}</h4>
        <a href="/">Farklı Oda</a>
      </div>
      <div className="messages">
        {messages.map((message) => (
          <>
            {auth.currentUser.displayName == message.user ? (
              <p className="user-message">{message.text}</p>
            ) : (
              <p className="other-message">
                <span>{message.user}</span>: {message.text}
              </p>
            )}
          </>
        ))}
      </div>
      <form className="chat-form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setNewMsg(e.target.value)}
          className="chat-input"
          type="text"
          value={newMsg}
        />
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default Chat;
