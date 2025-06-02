import React, { useRef } from "react";

function User({ onLogin }) {
  const userId = useRef();
  const userPw = useRef();

  const handleSave = () => {
    const enteredId = userId.current.value;
    const enteredPw = userPw.current.value;

    onLogin(enteredId, enteredPw);
  };

  return (
    <div className="sign-in_form">
      <label htmlFor="user_id">ID</label>
      <input type="text" id="user_id" ref={userId} />
      <label htmlFor="user_pw">PW</label>
      <input type="password" id="user_pw" ref={userPw} />
      <button onClick={handleSave}>sign in</button>
    </div>
  );
}

export default User;
