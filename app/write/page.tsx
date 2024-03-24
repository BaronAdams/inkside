"use client"

// import hljs from 'highlight.js'
// import 'highlight.js/styles/atom-one-dark.min.css'
// import ReactQuill, { Quill } from "react-quill";
// import ImageResize from "quill-image-resize-module-react";
// import "react-quill/dist/quill.snow.css";
// import quillEmoji from "react-quill-emoji";
// import "react-quill-emoji/dist/quill-emoji.css";
// import parse, { HTMLReactParserOptions, Element, domToReact, attributesToProps } from 'html-react-parser'
// import { Button } from 'react-daisyui'
// import { useEffect, useState } from 'react'
import Editor from '@/components/Editor'

// hljs.configure({
//   languages: ['javascript', 'ruby', 'python', 'rust','php','dart','typescript','jsx','tsx']
// })

// const modules = {
//   syntax: {
//     highlight: (text : string) => hljs.highlightAuto(text).value,
//   },
//   toolbar: [
//     [{ header: [1, 2, 3, false] }],
//     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//     [{ list: 'ordered' }, { list: 'bullet' }],
//     [{script:'sub'},{script:'super'}],
//     [{indent:'-1'},{indent:'+1'}],
//     ['link', 'image'],
//     [{ align: [] }],
//     [{ color: [] }],
//     ['code-block'],
//     ['clean'],
//     ["emoji"]
//   ],
//   "emoji-toolbar": true,
//   "emoji-textarea": true,
//   "emoji-shortname": true
// }

// const formats = [
//     'header',
//     'bold',
//     'italic',
//     'underline',
//     'strike',
//     'blockquote',
//     'list',
//     'bullet',
//     'script',
//     'indent',
//     'link',
//     'image',
//     'align',
//     'color',
//     'code-block',
// ]

// Quill.register("modules/imageResize", ImageResize);
//   Quill.register(
//     {
//       "formats/emoji": quillEmoji.EmojiBlot,
//       "modules/emoji-toolbar": quillEmoji.ToolbarEmoji,
//       "modules/emoji-textarea": quillEmoji.TextAreaEmoji,
//       "modules/emoji-shortname": quillEmoji.ShortNameEmoji
//     },
//     true
//   );

function Page() {
  //   const [value, setValue] = useState<string>('') 
  //   const [template, setTemplate] = useState<any>('') 

  //   useEffect(() => {
  //     console.log(value)
  //   }, [value])

  //   useEffect(() => {
  //     // console.log(template)
  //     const templateElt = document.querySelector('.template pre code')
  //     //@ts-ignore
  //     if(templateElt) hljs.highlightElement(templateElt)
  //     const detectedLang = document.querySelector('.template pre code')?.className.split(' ')[1]
  //     console.log(detectedLang)
  //   }, [template])

  //   const options : HTMLReactParserOptions = {
  //     replace(domNode){
  //       const typedDomNode = domNode as Element
  //       if(typedDomNode.name ==="pre" && typedDomNode.attribs.class === "ql-syntax" && typedDomNode.attribs.spellcheck === "false"){
  //         return (
  //           <>
  //         <pre className='ql-syntax bg-[#2B3440] p-5 text-cyan-50 rounded-2xl data-[lang]:before:content-[attr(data-lang)] data-[lang]:before:block' spellCheck="false"><code>{   //@ts-ignore  
  //           typedDomNode.children && domToReact(typedDomNode.children, options)}</code></pre>
  //           </>
  //         )
  //       }  
  //     }
  //   }

  //   const handleEditorChange = (text:string)=>{
  //     setValue(text)
  //     setTemplate(parse(value,options))
  // }

    return (
        <div className="w-screen pt-5 pb-11 flex flex-col items-center justify-center">
           <Editor />
        </div>
      )
}

export default Page








