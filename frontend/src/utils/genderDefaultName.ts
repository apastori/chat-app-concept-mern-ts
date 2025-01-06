import { Gender } from "../types/Gender"
import { genderDefault } from "../types/genderDefault"
import { userDefault } from "../types/userDefault"

export function genderDefaultName(gender: Gender): genderDefault | userDefault {
    return (gender === "male" ? 
        "John Doe" : 
        (gender === "female") ? 
        "Jane Doe" : 
        "User"
    )
}