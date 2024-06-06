"use client"

import useSWR from "swr";
import { getPost } from "../actions/posts";

export function usePost( username:string, postCred:string ){
    let splitElts: string[] = postCred.split('-')
    const postId: string | undefined = splitElts.pop()
    let title = splitElts.join(" ")

    const fetcher = async (arg: string) => {
        try {
           const res = await getPost(arg)
           if(res?._id && res.title.toLowerCase() === title && res.author.username === username){
              return res;
            }
        } catch (error) {
           // @ts-ignore
           throw new Error(error?.message)
        }
    }

    const { data, error, isLoading, mutate } = useSWR(postId, fetcher)

    return {
        post:data,
        isLoading,
        error,
        mutate
    }
}