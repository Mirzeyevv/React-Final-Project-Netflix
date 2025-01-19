import React from "react"

const FormInput = ({name,type,placeholder,handleInputChange}) => {
    return (
      <div className='flex flex-col'>
          <input className='border rounded-md p-2' name={name} type={type} placeholder={placeholder}
              onChange={(e) => 
              {
                  handleInputChange(e.target.name,e.target.value)
              }} 
          />
      </div>
    )
  }
export default FormInput