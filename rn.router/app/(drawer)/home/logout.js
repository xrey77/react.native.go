import { Redirect } from "expo-router";

export default function LogOut() {
    return <Redirect href={"/(drawer)/home"}/>
}