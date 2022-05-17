import { useState } from "react";
import PropTypes from 'prop-types';


const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({target:{value}}) => {
        setInputValue(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats]); // al hacer el call back, llama al estado anterior
            setInputValue('');
        }
  
    }

    return(
        <form onSubmit={ handleSubmit}>
            <input 
                type="text" 
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    );
};


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}


export default AddCategory;