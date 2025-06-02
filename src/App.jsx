import { useState } from "react";
import User from "./components/User";
import { userInfo } from "./util/mokUser";

import "./App.css";

function App() {
  const [loginInfo, setLoginInfo] = useState();

  const handleLogin = (enteredId, enteredPw) => {
    const foundUser = userInfo.find((user) => user.id === enteredId && user.pw === enteredPw);

    if (foundUser) {
      setLoginInfo(foundUser);
    } else {
      console.log("정보가 일치하지 않습니다.");
    }
  };

  return (
    <>
      {loginInfo ? (
        `${loginInfo.name}님 안녕하세요`
      ) : (
        <main>
          <h2>로그인</h2>
          <User onLogin={handleLogin} />
        </main>
      )}
    </>
  );
}

export default App;
