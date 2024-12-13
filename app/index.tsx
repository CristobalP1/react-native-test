import React, { useEffect, useState } from "react";
import SignInContainer from "@/modules/login/screens/signIn/SignInContainer";
import { useDispatch } from "react-redux";
import LocalStorageService from "@/service/localStorageService";
import { setUser } from "@/redux/slices/userSlice";
import { Redirect, Route, router } from "expo-router";

export default function index() {
  const dispatch = useDispatch();
  const [initialRoute, setInitialRoute] = useState<string | undefined>(undefined);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const value = await LocalStorageService.getToken();
        const userData = await LocalStorageService.getUserData();

        if (value && userData) {
          dispatch(
            setUser({
              userName: userData.username,
              password: userData.password,
              token: value,
            })
          );
          setInitialRoute("/(products)/products");
        } else {
          setInitialRoute("login");
        }
      } catch (e) {
        setInitialRoute("login");
      }
    };

    checkLoginStatus();
  }, [dispatch]);

  if (initialRoute === undefined) {
    return null; // Mientras no se haya determinado la ruta, no mostramos nada
  }

  return <Redirect href={initialRoute as any} />;
}
