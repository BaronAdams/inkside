"use client"

import React, { useContext, useEffect, useState, useTransition } from 'react'
import Select from 'react-select';
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.min.css'
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css";
import quillEmoji from "react-quill-emoji";
import parse, { HTMLReactParserOptions, Element, domToReact, attributesToProps } from 'html-react-parser'
import ImageUploader from "quill-image-uploader";
import "react-quill-emoji/dist/quill-emoji.css";
import 'quill-image-uploader/dist/quill.imageUploader.min.css';
import { categories } from '@/lib/data/categoriesData';
import { Input, Loading, Button } from 'react-daisyui';
import Image from 'next/image';
import { createDraft, createPost } from '@/lib/actions/posts'
import { MdOutlineAddPhotoAlternate, MdOutlinePhotoCamera } from 'react-icons/md';
import './style.css'
import { DarkLightContext } from '@/lib/context/DarkLightContext';

hljs.configure({
  languages: ['javascript', 'ruby', 'python', 'rust','php','dart','typescript','jsx','tsx']
})

const modules = {
  syntax: {
    highlight: (text) => hljs.highlightAuto(text).value,
  },
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{script:'sub'},{script:'super'}],
    [{indent:'-1'},{indent:'+1'}],
    ['link', 'image'],
    [{ align: [] }],
    [{ color: [] }],
    ['code-block'],
    ['clean'],
    ["emoji"]
  ],
  imageUploader: {
    upload: (file) => {
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append("image", file);

        fetch(
          "/api/uploadimage",
          {
            method: "POST",
            body: formData
          }
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            resolve(result.data.url);
          })
          .catch((error) => {
            reject("Upload failed");
            console.error("Error:", error);
          });
      });
    }
  },
  "emoji-toolbar": true,
  "emoji-textarea": true,
  "emoji-shortname": true,
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  },
  imageResize: {
    parchment: Quill.import('parchment'),
    modules: ['Resize', 'DisplaySize','Toolbar']
  }
}

const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'script',
    'indent',
    'link',
    'image',
    "imageBlot",
    'align',
    'color',
    'code-block',
    'emoji'
]

Quill.register("modules/imageResize", ImageResize);
Quill.register(
    {
      "formats/emoji": quillEmoji.EmojiBlot,
      "modules/emoji-toolbar": quillEmoji.ToolbarEmoji,
      "modules/emoji-textarea": quillEmoji.TextAreaEmoji,
      "modules/emoji-shortname": quillEmoji.ShortNameEmoji
    },
    true
  );
Quill.register("modules/imageUploader", ImageUploader);


export default function CreatePostForm() {
  const [title, setTitle] = useState(null);
  const [value, setValue] = useState(null); 
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null) ;
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isPendingCreatePost, startTransitionCreatePost] = useTransition();
  const [isPendingCreateDraft, startTransitionCreateDraft] = useTransition();
  const { modeState, toggleMode } = useContext(DarkLightContext)

  const handleCreatePost = ()=>{
      let formData = new FormData()
      formData.append('content', value)
      formData.append('title', title)
      formData.append('categories', selectedOptions.map((opt)=> opt.value))
      formData.append('coverImage', file)
      startTransitionCreatePost(async()=>{
        const res = await createPost(formData)
        if(res.error && Object.keys(res.error).length > 0){
          setError(res.error);
          return;
        }
      })
  }

    const toolbar = document.querySelector('.ql-toolbar.ql-snow')
    const selectValueContainer = document.querySelector('.select__value-container.select__value-container--is-multi.css-1fdsijx-ValueContainer')
    const selectIndicators = document.querySelector('.select__indicators.css-1hb7zxy-IndicatorsContainer')
    const selectMenu = document.querySelector('.select__menu.css-1nmdiq5-menu')
    const selectMenuFarChilds = [...document.querySelectorAll('.select__menu.css-1nmdiq5-menu>*>*')]
    const svgRemoveElts = [...document.querySelectorAll('.select__multi-value__remove.css-12a83d4-MultiValueRemove > svg')]
    const selectValueContainerHasValue = document.querySelector('.select__value-container.select__value-container--is-multi.select__value-container--has-value.css-3w2yfm-ValueContainer')
    
  useEffect(() => {
    if(toolbar){
      if(modeState === "dark"){
        toolbar?.classList.add("bg-[#dfdcdd]")
      }else{
        toolbar?.classList.remove("bg-[#dfdcdd]")
      }
    }

    if(selectValueContainer){
      if(modeState === "dark"){
        selectValueContainer?.classList.add("bg-[#181a2a]")
      }else{
        selectValueContainer?.classList.remove("bg-[#181a2a]")
      }
    }

    if(selectIndicators){
      if(modeState === "dark"){
        selectIndicators?.classList.add("bg-[#181a2a]")
      }else{
        selectIndicators?.classList.remove("bg-[#181a2a]")
      }
    }
  
    if(selectMenu){
      if(modeState === "dark"){
        selectMenu?.classList.add("bg-[#181a2a]")
      }else{
        selectMenu?.classList.remove("bg-[#181a2a]")
      }
    }

    selectMenuFarChilds.forEach((elt)=>{
      if(elt){
        if(modeState === "dark"){
          elt?.classList.add("bg-[#181a2a]","hover:bg-[rgba(58, 58, 58, 0.5)]")
        }else{
          elt?.classList.remove("bg-[#181a2a]","hover:bg-[rgba(58, 58, 58, 0.5)]")
        }
      }
    })

    svgRemoveElts.forEach((elt)=>{
      if(elt){
        if(modeState === "dark"){
          elt?.classList.add("text-black")
        }else{
          elt?.classList.remove("text-black")
        }
      }
    })

    if(selectValueContainerHasValue){
      if(modeState === "dark"){
        selectValueContainerHasValue?.classList.add("bg-[#181a2a]")
      }else{
        selectValueContainerHasValue?.classList.remove("bg-[#181a2a]")
      }
    }
  }, [modeState])
  
  
  const handleCreateDraft = ()=>{
      let formData = new FormData()
      if(value) formData.append('content', value)
      if(title) formData.append('title', title)
      if(selectedOptions.length) formData.append('categories', selectedOptions.map((opt)=> opt.value))
      if(file) formData.append('coverImage', file)
      startTransitionCreateDraft(async()=>{
        const res = await createDraft(formData)
        if(res.error && Object.keys(res.error).length > 0){
          setError(res.error);
          return;
        }
      })
  }

  const handleEditorChange = (text)=>{
    setValue(text)   
  }

  const handleFocusEditor = ()=>{
    document.querySelector('.ql-editor').focus()
  }

    return (
        <div className="flex flex-col gap-4 pb-12 items-center justify-center">
            <div className='w-[50vw] max-[800px]:w-[75vw] max-[572px]:w-[85vw] text-left mb-[20px]'>
              <div className='flex gap-3'>
                <h1 className='text-[60px] mb-[20px] dark:text-red-400'>Créer un article</h1>
                <label className="swap swap-rotate" >
                        {/*@ts-ignore */}
                        <input type="checkbox" onClick={toggleMode} />
                        <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                        <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                     </label>
              </div>
              <label htmlFor="coverImage">Uploadez une image <MdOutlinePhotoCamera className='inline ml-3' size={20}/> </label>
              <div className='w-[50vw] mt-[8px] max-[800px]:w-[75vw] max-[572px]:w-[85vw] rounded-xl box-border border-[2.5px] h-[45vh] relative flex justify-center items-center'>
                {file instanceof File ? 
                  (<Image 
                    width={600} 
                    height={600} 
                    src={URL.createObjectURL(file)}
                    alt={'Cover image'}
                    className='w-full rounded-xl h-full object-cover'
                    /> ) : (<><MdOutlineAddPhotoAlternate size={30}/></>)
                }
              </div>
              <Input 
                type="file" 
                name="coverImage" 
                id="coverImage" 
                onChange={(e)=>setFile(e.target.files[0])}
                className='hidden'
              />
            </div>
            <div>
              <label htmlFor="title" className='block'>Titre de l'article</label>
              <Input 
                type="text" 
                name="title" 
                id="title" 
                onChange={(e) => setTitle(e.target.value)}
                className='w-[50vw] max-[800px]:w-[75vw] max-[572px]:w-[85vw] px-4 py-3 border-2 '
              />
            </div>
            <div>
              <label htmlFor="content" className='block' onClick={() => handleFocusEditor()} >Contenu de l'article</label>
              <ReactQuill
                  id='content'
                  value={value}
                  onChange={handleEditorChange}
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  className='w-[50vw] max-[800px]:w-[75vw] max-[572px]:w-[85vw]'
              />
            </div>
            {/*defaultOptions.map(elt => elt) <div className='w-[50vw] max-[800px]:w-[75vw] max-[572px]:w-[85vw]'>{template} </div> */}
           <Select
              isMulti
              onChange={setSelectedOptions}
              name="categories"
              options={categories}
              className='basic-multi-select w-[52vw] max-[800px]:w-[75vw] max-[572px]:w-[85vw] px-4 py-1 rounded-md outline-none text-base-content placeholder:text-base bg-base-100 focus:border-black'
              classNamePrefix="select"
          />
            <div>
              <Button disabled={isPendingCreateDraft || isPendingCreatePost} onClick={()=> handleCreateDraft()} className='btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm mr-7'>{isPendingCreateDraft ? (<>En cours de traitement <Loading size='md'/></>) : "Enregistrer comme brouillon"}</Button>
              <Button disabled={isPendingCreateDraft || isPendingCreatePost} onClick={()=> handleCreatePost()} className='btn btn-primary'>{isPendingCreatePost ? (<>En cours de traitement <Loading size='md'/></>) : "Publier l'article"}</Button>
           </div>
        </div>
    )
}
