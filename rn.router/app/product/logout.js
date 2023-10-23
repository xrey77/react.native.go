import { Redirect } from "expo-router";

export default function SignOut() {
    return <Redirect href={"/(drawer)/home"}/>
}