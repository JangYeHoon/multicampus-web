import React,{useState} from 'react';

function InputTextareaF(props) {
    const [value, setValue] = useState( 'Please write an essay about your favorite DOM element.');
   
    const handleSubmit = (event)=>{
          alert('An essay was submitted: ' + value);
          event.preventDefault();
      }
  
    const handleChange = (event)=>{
          setValue(event.target.value);     
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Essay:
          <textarea value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
}

export default InputTextareaF;