import { ADD_NOTE } from './types'
let noteID = 0

export function addnote(note) {
    return {
        type: ADD_NOTE,
        id: noteID++,
        note
    }
}