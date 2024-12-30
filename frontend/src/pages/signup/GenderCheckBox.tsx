import { IGenderCheckBoxProps } from "../../types/IGenderCheckboxProps"

export const GenderCheckbox: React.FC<IGenderCheckBoxProps> = ({onCheckboxChange, selectedGender}: IGenderCheckBoxProps) => {
	return (
		<div className='flex my-[5px]'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
					<span className='label-text text-white'>Male</span>
					<input 
						type='checkbox' 
						className='checkbox border-white text-white' 
						checked={selectedGender === 'male'}
						onChange={() => onCheckboxChange("male")}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? 'selected' : ''}`}>
					<span className='label-text text-white'>Female</span>
					<input 
						type='checkbox' 
						className='checkbox border-white text-white' 
						checked={selectedGender === 'female'}
						onChange={() => onCheckboxChange("female")}
					/>
				</label>
			</div>
		</div>
	)
}