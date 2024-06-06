"use server"

import { redirect } from "next/navigation";
import { auth, signOut } from "../auth";
import { Post } from "../database/models";


export async function navigate(path : string){
  redirect(path);
}
export async function logOut(){
  await signOut();
}

