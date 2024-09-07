import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export const AnimatedMulti = React.memo(({ options, onChange , extraClass }) => {
    const handleChange = (selectedOptions) => {
        if (onChange) {
            onChange(selectedOptions);
        }
    };

    return (
        <Select
            className={extraClass}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    fontSize: '20px',
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
