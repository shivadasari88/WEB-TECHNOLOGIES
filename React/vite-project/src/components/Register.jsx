import { useState } from "react"

const UserRegForm =() =>{
    const initValues ={uname:"",email:"",password:""}
    const [formValues, setFormValues] = useState(initValues)

    let handleChange =(e) => {
        const {name, value} = e.target
        setFormValues({...formValues,[name]:value})
    }
    let submitHandler =(e) =>{
        event.preventDefault()
        console.log(formValues)
        setFormValues({uname :"",email:"",password:"" })
    }
    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="uname">Username</label>
            <input name="uname" value={formValues.uname} onChange={handleChange}/>
            <label htmlFor="email">Email</label>
            <input name="email" value={formValues.email} onChange={handleChange}/>
            <label htmlFor="password">password</label>
            <input name="password" value={formValues.password} onChange={handleChange}/>
            <button type ="submit">sign up</button>
        </form>
    )
}