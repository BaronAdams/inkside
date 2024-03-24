import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.min.css'
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css";
import quillEmoji from "react-quill-emoji";
import "react-quill-emoji/dist/quill-emoji.css";
import parse, { HTMLReactParserOptions, Element, domToReact, attributesToProps } from 'html-react-parser'
import { useEffect, useState } from 'react'

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
  "emoji-toolbar": true,
  "emoji-textarea": true,
  "emoji-shortname": true,
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
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

function Editor() {
    const [value, setValue] = useState('') 
    const [template, setTemplate] = useState('') 

    // useEffect(() => {
    //   console.log(value)
    // }, [value])

    useEffect(() => {
      hljs.configure({
        languages: ['javascript', 'ruby', 'python', 'rust','php','dart','typescript','jsx','tsx']
      })
      //@ts-ignore
      if(document.querySelector('.template pre code')) {
        console.log(document.querySelector('.template pre code'))
        hljs.highlightElement(document.querySelector('.template pre code'))
      }
      const detectedLang = document.querySelector('.template pre code')?.className.split(' ')[1]
      console.log(detectedLang)
    }, [template])

    const options = {
      replace(domNode){
        const typedDomNode = domNode
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

    const handleEditorChange = (text)=>{
      setValue(text)
      setTemplate(parse(text,options))
  }

    return (
        <>
            <ReactQuill
                value={value}
                onChange={handleEditorChange}
                theme="snow"
                modules={modules}
                formats={formats}
                className='w-[50vw] max-[800px]:w-[75vw] max-[572px]:w-[85vw] '
            />
            {/* <Button >Send Code</Button> */}
            <div className="template rounded-2xl bg-[#2B3440]">
              {template}
            </div>
        </>
      )
}

export default Editor