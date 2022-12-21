import React, {useState} from 'react'
import Select from "react-select";


const SmartSelect = ({getChanges, ...props}) => {
    
    const [selectedOptions, setSelectedOptions] = useState();

    function handleSelect(data) {
        setSelectedOptions(data);
        getChanges(selectedOptions)
    }

    return (
        <div>
            <Select
            options={props.options}
            placeholder={props.placeholder}
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={props.isSearchable}
            isMulti={props.isMulti}
            />
      </div>
    )
}

export default SmartSelect