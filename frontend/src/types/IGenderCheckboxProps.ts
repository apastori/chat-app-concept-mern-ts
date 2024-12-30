import { Gender } from "./Gender"
import { GenderOrEmpty } from "./GenderOrEmpty"

export interface IGenderCheckBoxProps {
    onCheckboxChange: (gender: Gender) => void,
    selectedGender: GenderOrEmpty 
}