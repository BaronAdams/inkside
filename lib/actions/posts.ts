"use server"

import mongoose from 'mongoose'
import { z } from "zod"
import { redirect } from "next/navigation";
import { Post, User } from "../database/models"
import { auth } from "../auth";
import { uploadImagetoServer } from '../utils/images';
import { ErrorPostFields, PostFields } from '../types';

export async function getNumberofUntitledPosts( author:string ) {
    try {
      let count = await Post.countDocuments({
        author: author,
        title: { $regex: /^Aucun Titre n°\d+$/ }
      })
      return count
    } catch (error) {
      return null
    }
}

export async function updateDraft( postId:string, formData: FormData ){
  let session = await auth();
  if(!session?.user?.id) redirect('/login');
  
  const { content, title, coverImage, categories } = Object.fromEntries(formData)
  
  let updatedFields : PostFields = {};
  let error : ErrorPostFields = {};
  // @ts-ignore
  if(content) updatedFields.content = content
  // @ts-ignore
  if(title) updatedFields.title = title
  // @ts-ignore
  if(categories) updatedFields.categories = categories.split(",")
  if(coverImage instanceof File) {
    const img = await uploadImagetoServer(coverImage)
    if(img?.url){
      updatedFields.coverPic = img.url
    }else{
      error = { ...error, coverPic: "Une erreur est survenue lors de l'upload du fichier" }
      return { error }
    }
  }

  try {
    if(mongoose.isValidObjectId(postId)){
      await Post.findByIdAndUpdate(postId, { ...updatedFields, isDraft:true });
      return { success:true }
    }
  } catch (error) {
    error = { msg: "Une erreur est survenue " }
    return { error }
  }
}

export async function updatePost( postId:string, formData: FormData){
  let session = await auth();
  if(!session?.user?.id) redirect('/login');
  
  const { content, title, coverImage, categories } = Object.fromEntries(formData)
  
  let updatedFields : PostFields = {}
  let error : ErrorPostFields = {};

  try {
    // @ts-ignore
    postFieldsSchema.parse({ content, title, categories: categories?.split(","), coverImage });
 } catch (err){
    if (err instanceof z.ZodError){
      for(let iss of err.issues){
        error = { ...error, [iss.path[0]]: iss.message }
      }
      return { error }
    }
 }

  const img = await uploadImagetoServer(coverImage)
  if(img?.url){
    updatedFields.coverPic = img.url
  }else{
    error = { ...error, coverPic: "Une erreur est survenue lors de l'upload du fichier" }
    return { error }
  }
  
  //@ts-ignore
  updatedFields = { ...updatedFields, content, title, categories: categories?.split(",") }

  try {
    if(mongoose.isValidObjectId(postId)){
      await Post.findByIdAndUpdate(postId, { ...updatedFields, isDraft:false })
      return { success: true }
    }
  } catch (error) {
    error = { msg: "Une erreur est survenue " }
    return { error }
  }
}

export async function createDraft(formData: FormData){
  let session = await auth();
  if(!session?.user?.id) redirect('/login');

  let postFields : PostFields = {}
  let error : ErrorPostFields = {}

  const { content, title, coverImage, categories } = Object.fromEntries(formData)

  // @ts-ignore
  if(content) postFields.content = content
  // @ts-ignore
  if(title) postFields.title = title
  // @ts-ignore
  if(categories) postFields.categories = categories.split(",")
      
  if(coverImage instanceof File) {
    const img = await uploadImagetoServer(coverImage)
    if(img?.url){
      postFields.coverPic = img.url
    }else{
      error = { ...error, coverPic: "Une erreur est survenue lors de l'upload du fichier" }
      return { error }
    }
  }

  const newDraftPost = await Post.create({
    ...postFields,
    author: session?.user?.id
  })

  if(newDraftPost?._id) {
    redirect(`/myspace`)
  }else{
    error = { ...error, msg: "Une erreur est survenue lors de la creation de l'article, Veuillez réessayer" }
    return { error };
  }
}

export async function createPost(formData: FormData){
  let session = await auth();
  if(!session?.user?.id) redirect('/login');

  let postFields : PostFields = {}
  let error : ErrorPostFields = {}

  const { content, title, coverImage, categories } = Object.fromEntries(formData)

  try {
    // @ts-ignore
    postFieldsSchema.parse({ content, title, categories: categories?.split(","), coverImage });
 } catch (err){
  // @ts-ignore
    console.log(err.issues)
    if (err instanceof z.ZodError){
      for(let iss of err.issues){
        error = { ...error, [iss.path[0]]: iss.message }
      }
      return { error }
    }
 }

  const img = await uploadImagetoServer(coverImage)
  if(img?.url){
    postFields.coverPic = img.url
  }else{
    error = { ...error, coverPic: "Une erreur est survenue lors de l'upload du fichier" }
    return { error }
  }
  
  //@ts-ignore
  postFields = { ...postFields, content, title, categories: categories?.split(",") }

  const newPost = await Post.create({
    ...postFields,
    isDraft:false,
    author: session?.user?.id
  })

  if(newPost?._id) {
    let title = newPost.title.toLowerCase().split(" ").join("-")
    // @ts-ignore
    redirect(`/${session?.user?.username}/${title}-${newPost?._id.toString()}`)
  }else{
    error = { ...error, msg: "Une erreur est survenue lors de la creation de l'article, Veuillez réessayer" }
    return { error };
  }
}

export async function getPost(postId:string) {
    try {
      if(mongoose.isValidObjectId(postId)){
        let rawPost = await Post.findOne({ _id:postId, isDraft:false }).populate('author', 'name username email').exec()
        if(rawPost?._id){
          // console.log(rawPost._doc)
          const { _id, author,  ...others } = rawPost.toObject()
          return { _id: _id.toString(), author:{ ...author, _id: author._id.toString() },  ...others }
          // return rawPost.toObject()
        }else{
          console.log("Urghh")
          return null
        }
      }
    } catch (error) {
        console.log(error)
        throw new Error('Une erreur est survenue')
        // return 'Une erreur est survenue'
    }
}

export async function getMyDrafts(){
  const session = await auth()
  if(!session?.user?.id) redirect('/login')

  let userId = session?.user?.id

  try {
    if(mongoose.isValidObjectId(userId)){
      let rawDrafts = await Post.find({ isDraft:true ,author: userId})
      if(rawDrafts.length){
        let drafts = rawDrafts.map((elt)=>{
          const { _id, author, ...others } = elt
          return { _id: _id.toString(), author: author.toString(), ...others }
        })
        return drafts
      }
    }
  } catch (error) {
      throw new Error('Une erreur est survenue')
  }
}

export async function getMyPublishedPosts(){
  const session = await auth()
  if(!session?.user?.id) redirect('/login')

  let userId = session?.user?.id

  try {
    if(mongoose.isValidObjectId(userId)){
      let rawPublishedPosts = await Post.find({ isDraft:false ,author: userId})
      if(rawPublishedPosts.length){
        let publishedPosts = rawPublishedPosts.map((elt)=>{
          const { _id, author, ...others } = elt
          return { _id: _id.toString(), author: author.toString(), ...others }
        })
        return publishedPosts
      }
    }
  } catch (error) {
      throw new Error('Une erreur est survenue')
  }
}

export async function setCategories( categories:string[] ){
  let session = await auth();
  if(!session?.user?.id) redirect('/login')
  let success = false;
  
  try {
    await User.findByIdAndUpdate(session?.user?.id, { followingCategories: categories })
    success = true
  } catch (error) {
    return "Une erreur est survenue! Veuillez réessayer"
  }finally{
    if(success) redirect('/posts')
  }


}

export async function increasePostViews(postId:string) {
  try {
    if(mongoose.isValidObjectId(postId)){
      await Post.findByIdAndUpdate(postId, { $inc : { views:1 } })
    }
  } catch (error) {
    throw new Error("Une erreur est survenue")
  }
}

export async function like(postId:string){
  let session = await auth();
  if(!session?.user?.id) redirect('/login');

  const userId = session?.user?.id
  try {
    if(mongoose.isValidObjectId(postId) && mongoose.isValidObjectId(userId)){
        const updatedPost = await Post.findByIdAndUpdate(postId, { $push : { likes: userId } },{ new: true}).populate('author', 'name username email').exec()
        console.log(`User ${userId} has been added to the ${postId} post likes list `)
        const { _id, author,  ...others } = updatedPost.toObject()
        return { _id: _id.toString(), author:{ ...author, _id: author._id.toString() },  ...others }
    }
  } catch (error) {
    throw new Error("Une erreur est survenue")
  }
}
export async function dislike(postId:string){
  let session = await auth();
  if(!session?.user?.id) redirect('/login');

  const userId = session?.user?.id
  try {
    const post = await getPost(postId)
    if(mongoose.isValidObjectId(postId) && mongoose.isValidObjectId(userId)){
        const updatedPost = await Post.findByIdAndUpdate(postId, { $pull : { likes: userId } },{ new: true}).populate('author', 'name username email').exec()
        console.log(`User ${userId} has been removed to the ${postId} post likes list `)
        const { _id, author,  ...others } = updatedPost.toObject()
        return { _id: _id.toString(), author:{ ...author, _id: author._id.toString() },  ...others }
    }
  } catch (error) {
    throw new Error("Une erreur est survenue")
  }
}