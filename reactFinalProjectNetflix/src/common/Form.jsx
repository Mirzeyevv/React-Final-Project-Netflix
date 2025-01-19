import {useState,useEffect} from 'react'
import FormInput from './FormInput'

const Form = ({formItems}) => {

    const [formData,setFormData] = useState({})

    const handleInputChange = (name,value) => 
    {
        setFormData(prevState => ({...prevState,[name]:value}))        
    }

    useEffect(() => {console.log(formData)},[formData])


  return (

    <form className="flex flex-col">
    {
        formItems.map(item => <FormInput handleInputChange={handleInputChange} name={item.name} type={item.type} placeholder={item.placeholder} />)
    }
    </form>

  )
}
export default Form