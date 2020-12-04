import {useState} from 'react';

function useForm(callback,defaults){
    const [inputs,setInputs] = useState(defaults) //aqui vamos a estar guardando los valores de mis formularios
    
    const handleSubmit = (event) => {
        //HandleSubmit va a ser ocupada en el submit de mi form
        event.preventDefault(); // evita el refresh al enviar un form
        callback(inputs);
    }

    const handleInputChange = (event) =>{
        const {name,value} =event.target;
        //NUNCA DEJARLO ACTIVO
        //console.log(name,value); 
        // QUE LO APAGUES
        setInputs({...inputs,[name]:value})
        //console.log(inputs);
    }

    return{ // Los hooks no regresan jsx
        inputs,
        handleInputChange,
        handleSubmit
    }
}

export default useForm;