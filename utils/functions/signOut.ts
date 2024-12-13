import { StorageKeys } from "@/constants/StorageKeys";
import { clearUser } from "@/redux/slices/userSlice";
import LocalStorageService from "@/service/localStorageService"
import { router } from "expo-router";
import { useDispatch } from "react-redux";

export const signOut = async (dispatch: any) => {
    await LocalStorageService.removeData(StorageKeys.Token);
    await LocalStorageService.removeData(StorageKeys.User);
    await LocalStorageService.removeAllKeys();
    dispatch(clearUser());
    router.replace("login" as any);
  };