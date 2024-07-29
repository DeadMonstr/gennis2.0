import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export const AnimatedMulti = React.memo(({ options }) => {
    const handleChange = (selectedOptions) => {
        console.log('Selected options:', selectedOptions);
        // Handle removal or any other logic here if needed
    };

    return (
        <Select
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    fontSize: 20 + "px",
                }),
            }}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={options}
            onChange={handleChange}
        />
    );
});
