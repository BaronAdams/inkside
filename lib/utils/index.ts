export const capitalizeLetter = (str:string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

export const formatDate = (isoDate: string) =>{
    const date = new Date(isoDate)
    const month = new Intl.DateTimeFormat('fr',{ month:'long' }).format(date)
    const day = date.getDate()
    const year = date.getFullYear()

    return `${capitalizeLetter(month)} ${day}, ${year}`
}