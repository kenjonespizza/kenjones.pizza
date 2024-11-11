import {atom} from 'nanostores'

export const theme = atom(localStorage.getItem("theme") ?? "dark")
export const isMenuOpen = atom(true)
