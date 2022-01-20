import React, { useState } from 'react';
import Select from 'react-select';
import { options } from './Main';

const ConnectWallet = ({ defaultValue }) => {
    // const [selectedOption, setSelectedOption] = useState(null);

    return (
        <Select
            defaultValue={defaultValue}
            options={options}
            placeholder={defaultValue}
            isSearchable={false}
        // onChange={setSelectedOption}
        />
    );
}
export default ConnectWallet