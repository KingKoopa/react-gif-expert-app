import React, {useState} from "react";
import PropsTypes from "prop-types";

const AddCategory = ({setCategories}) => {


    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit hecho");
        if(inputValue.trim().length > 2){
            setCategories(cats => [ inputValue, ...cats]);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}

AddCategory.propsTypes = {
    setCategories: PropsTypes.string.isRequired
}

export default AddCategory;