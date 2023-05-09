import Router from "next/router";
export default function signout(){
    sessionStorage.clear();
    Router.back();
}