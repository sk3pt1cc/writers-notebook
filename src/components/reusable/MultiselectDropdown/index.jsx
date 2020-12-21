import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const MultiselectDropdown = ({ options, onSelect, label, selected }) => {
    const animatedComponents = makeAnimated()

    return (
        <label>
            <b>{label}</b>
            <Select
                options={options}
                isMulti
                closeMenuOnSelect={false}
                components={animatedComponents}
                onChange={onSelect}
                value={selected}
            />
        </label>
    )
}

export default MultiselectDropdown