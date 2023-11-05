import React,{useState} from 'react';

function InputTextF(props) {
    const [value, setValue] = useState('');

    const handleSubmit = (event)=>{
          alert(value)
          event.preventDefault();
    }
    const handleChange = (event)=>{
      setValue(event.target.value)
    }
    
    return (
       <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={value} onChange={(event)=>handleChange(event)} />
        </label>
        <input type="submit" value="Submit" />
       </form>
    );
}

export default InputTextF;