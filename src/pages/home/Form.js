import React, { memo } from 'react';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
    name: yup.string().required().min(3, 'Must be exactly 3 digits')
	/*age: yup.number().positive().required().min(3, 'Must be exactly 3 digits')*/
}).required();
	
const Form = () => {
    const { register, handleSubmit, setValue, formState:{ errors } } = useForm({
		resolver: yupResolver(schema)
	}); 
	
    const onSubmit = (data) => {
		console.log(data)
		setValue('name', '')
	};
	
    

    return (
        <div className='warp'>
		<br/>
            <form onSubmit={handleSubmit(onSubmit)}>
               <input
				{...register('name')} placeholder="Name" 
				/>
               <p>{errors.name?.message}</p>
			   <br/>
               <button type='submit'>Data</button>
           </form>
		  <br/>
        </div>
		
    );
};

export default Form;    