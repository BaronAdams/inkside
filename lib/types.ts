export type ErrorPostFields = {
    title?: string,
    content?: string,
    categories?: string,
    coverPic?: string,
    msg?: string
}

export type ErrorAuthFields = {
    name?: string,
    username?: string,
    email?: string,
    password?: string,
    msg?: string
}

export type PostFields = {
    content?: string,
    title?: string,
    coverPic?: string,
    categories?: string[]
}