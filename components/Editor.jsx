import Select from 'react-select';
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.min.css'
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css";
import quillEmoji from "react-quill-emoji";
import parse, { HTMLReactParserOptions, Element, domToReact, attributesToProps } from 'html-react-parser'
import React, { useEffect, useState, useTransition } from 'react'
import ImageUploader from "quill-image-uploader";
import "react-quill-emoji/dist/quill-emoji.css";
import 'quill-image-uploader/dist/quill.imageUploader.min.css';
import { categories } from '@/lib/data/categoriesData';
import { Input } from 'react-daisyui';
import Image from 'next/image';
import { updatePost } from '@/lib/actions/posts';


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

function Editor({post}) {
    const [title, setTitle] = useState(null);
    const [value, setValue] = useState(null); 
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null) ;
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isPending, startTransition] = useTransition();
    let defaultOptions = post.categories.map(elt => ({ label:elt , value: elt }))

    useEffect(() => {
      setValue(post.content)
      setFile(post.coverPic)
    }, [])
    
    const handleEditorChange = (text)=>{
      setValue(text)   
    }

    const handleFocusEditor = ()=>{
      document.querySelector('.ql-editor').focus()
    }

    // const sendUpdateData = async()=>{

    // }

    useEffect(() => {
      const formData = new FormData()
      formData.append('file', file)

      if(file instanceof File){
        (async () => {
          const err = await updatePost(post._id,formData)
            if(err){
               setError(err);
               return;
            }
        })()
      }
    }, [file])

    useEffect(() => {
      const formData = new FormData()
      formData.append('content', value)

      if(value){
        (async () => {
          const err = await updatePost(post._id,formData)
            if(err){
               setError(err);
               return;
            }
        })()
      }
    }, [value])

    useEffect(() => {
      const formData = new FormData()
      formData.append('title', title)

      if(title){
        (async () => {
          const err = await updatePost(post._id,formData)
            if(err){
               setError(err);
               return;
            }
        })()
      }
    }, [title])

    useEffect(() => {
      const formData = new FormData()
      formData.append('categories', selectedOptions.map((opt)=> opt.value))
      if(formData.get('categories').length != 0){
        (async () => {
          const err = await updatePost(post._id,formData)
            if(err){
               setError(err);
               return;
            }
        })()
      }
    }, [selectedOptions])

    return (
        <>
            <div className='z-100'>
              <h1 className='text-[60px] mb-[40px]'>Editer l'article</h1>
              <label htmlFor="coverImage" className="mb-[40px]">
                {file && 
                  (<Image 
                    width={600} 
                    height={600} 
                    src={typeof file === "string" ? file : URL.createObjectURL(file) }
                    alt={post.title + ' Cover image'}
                    className='w-[50vw] max-[800px]:w-[75vw] max-[572px]:w-[85vw] rounded-lg h-[45vh] object-cover mb-[40px]'
                    /> )
                }
              </label>
              <Input 
                type="file" 
                name="coverImage" 
                id="coverImage" 
                onChange={(e)=> setFile(e.target.files[0])}
                className='hidden'
              />
              <label htmlFor="title" className='block'>Titre de l'article</label>
              <Input 
                type="text" 
                name="title" 
                id="title" 
                defaultValue={post.title}
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
              defaultValue={[defaultOptions[0],defaultOptions[1],defaultOptions[2]]}
              onChange={setSelectedOptions}
              name="categories"
              options={categories}
              className='basic-multi-select w-[52vw] max-[800px]:w-[75vw] max-[572px]:w-[85vw] px-4 py-1 rounded-md outline-none text-base-content placeholder:text-base bg-base-100 focus:border-black'
              classNamePrefix="select"
          />
            <div>
              <button className='btn btn-outline btn-secondary text-secondary-content/60 font-medium text-sm mr-7'>Voir l'aperçu</button>
              <button className='btn btn-primary'>Poster l'article</button>
           </div>
        </>
      )
}

export default Editor

export const formatHTML = (html) =>{
  const options = {
    replace(domNode){
      const typedDomNode = domNode
      if(typedDomNode.name ==="pre" && typedDomNode.attribs.class === "ql-syntax" && typedDomNode.attribs.spellcheck === "false"){
        return (
          <>
            <pre className='mockup-code pl-5 text-cyan-50 data-[lang]:before:content-[attr(data-lang)] data-[lang]:before:block' spellCheck="false">
              <code className='bg-inherit pl-5'>{typedDomNode.children && domToReact(typedDomNode.children, options)}
              </code>
            </pre>
          </>
        )
      } 
      if(typedDomNode.name ==="p"){
        return(
          <p className='text-xl leading-8 text-base-content/80'>
            {typedDomNode.children && domToReact(typedDomNode.children, options)}
          </p>
        )
      }
    }
  }

  return parse(html,options)
}