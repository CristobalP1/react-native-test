import React, { useState } from "react";
import SignInComponent from "./SignInComponent";
import { router } from "expo-router";
import useAuth from "../../hooks/useAuth";
import { LoginService } from "@/ddd/login/infrastructure/LoginService";

export default function SignInContainer() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { authenticateUser, isLoading, errorService } = useAuth(
    new LoginService()
  );

  const handleLogin = async () => {
    await authenticateUser(userName, password);
  };

  return (
    <>
      <SignInComponent
        userName={userName}
        setUserName={setUserName}
        setPassword={setPassword}
        handleLogin={handleLogin}
        password={password}
        errorService={errorService}
        isLoading={isLoading}
      />
    </>
  );
}
