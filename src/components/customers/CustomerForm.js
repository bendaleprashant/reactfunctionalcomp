import { useState } from "react";

export default function CustomerForm(props) {

    const  [formData, setNewFormData]  = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: ""
    })

    const handleChange=(event)=>{
        const {name,value}=event.target;
        let customerdata={...formData};
        customerdata[name]=value;
        setNewFormData(customerdata);
    }

    const saveCustomer=()=>{
        const customer={...formData};
        props.addCustomer(customer)  //createCustomer(customer);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        saveCustomer();
    }

    return formData? (  
        <div>
            <h3>Add Customer</h3>
            <hr/>
            <form className="ui form" onSubmit={(event)=>handleSubmit(event)}>
                <div className="form-group">
                    <input type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={(event)=>handleChange(event)}/>
                </div>
                <div className="form-group">
                    <input type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={(event)=>handleChange(event)}/>
                </div>
                <div className="form-group">
                    <input type="text"
                    name="email"
                    value={formData.email}
                    onChange={(event)=>handleChange(event)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    ) :<></>

}