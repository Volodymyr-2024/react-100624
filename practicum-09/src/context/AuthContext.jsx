import { createContext, useState, useContext } from "react";
import { set } from "react-hook-form";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

  function logIn(identity, password) {
    setLoading(true);
    setError(null);
    // POST https://pocketbase-ns48884kwosgw00swo440g0o.ipbez.kz/api/collections/users/auth-with-password
    /*  {
        "identity": "user1@test.com",
        "password": "user1password"
        }
    */
    // Response - { record, token }
    fetch(
      "https://pocketbase-ns48884kwosgw00swo440g0o.ipbez.kz/api/collections/users/auth-with-password",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identity: identity,
          password: password,
        }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка авторизации");
        }
        return response.json();
      })
      .catch(() => {
        setError("Ошибка авторизации");
      })
      .then((data) => {
        setUserData(data.record);
        setToken(data.token);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function logOut() {
    setUserData(null);
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{
        userData,
        token,
        error,
        loading,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
