let someObje = '[{"value":"Technologie","label":"Technologie"},{"value":"Ingénierie","label":"Ingénierie"}]'
let str = "764aefd3"
let splitEls = str.split('-')
let id = splitEls.pop()

let lastTitle = "Les bases de Python"

let title = lastTitle.toLowerCase().split(" ").join("-")
//@ts-ignore
console.log(`${title}-${id}`)

// CATEGORIES
// DISCUSSIONS
// POSTS