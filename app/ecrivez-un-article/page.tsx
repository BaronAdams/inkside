"use client"

import hljs from 'highlight.js'
import 'react-quill/dist/quill.snow.css'
import 'highlight.js/styles/atom-one-dark.min.css'
import ReactQuill from 'react-quill'
import parse, { HTMLReactParserOptions, Element, domToReact, attributesToProps } from 'html-react-parser'
import { Button } from 'react-daisyui'
import { useEffect, useState } from 'react'

hljs.configure({
  languages: ['javascript', 'ruby', 'python', 'rust','php','dart','typescript','jsx','tsx']
})

const modules = {
  syntax: {
    highlight: (text : string) => hljs.highlightAuto(text).value,
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
  ],
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
    'align',
    'color',
    'code-block',
]

function Page() {
    const [value, setValue] = useState<string>('') 
    const [template, setTemplate] = useState<any>('') 

    useEffect(() => {
      console.log(value)
    }, [value])

    useEffect(() => {
      // console.log(template)
      const templateElt = document.querySelector('.template pre code')
      //@ts-ignore
      if(templateElt) hljs.highlightElement(templateElt)
      const detectedLang = document.querySelector('.template pre code')?.className.split(' ')[1]
      console.log(detectedLang)
    }, [template])

    const options : HTMLReactParserOptions = {
      replace(domNode){
        const typedDomNode = domNode as Element
        if(typedDomNode.name ==="pre" && typedDomNode.attribs.class === "ql-syntax" && typedDomNode.attribs.spellcheck === "false"){
          return (
            <>
          <pre className='ql-syntax bg-[#2B3440] p-5 text-cyan-50 rounded-2xl data-[lang]:before:content-[attr(data-lang)] data-[lang]:before:block' spellCheck="false"><code>{   //@ts-ignore  
            typedDomNode.children && domToReact(typedDomNode.children, options)}</code></pre>
            </>
          )
        }  
      }
    }

    const handleEditorChange = (text:string)=>{
      setValue(text)
      setTemplate(parse(value,options))
  }

    return (
        <div className="w-screen flex flex-col items-center justify-center">
            <ReactQuill
                value={value}
                onChange={handleEditorChange}
                theme="snow"
                modules={modules}
                formats={formats}
                className='w-[50vw] '
            />
            {/* <Button >Send Code</Button> */}
            <div className="template rounded-2xl bg-[#2B3440]">
            {template}
            </div>
        </div>
      )
}

export default Page








