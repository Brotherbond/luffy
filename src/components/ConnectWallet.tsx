import Select from 'react-select';
import Alliances from '../data/alliances';

const options:Object[] = [];
Alliances.forEach(option => options.push({value:option.name, label:option.name}));

const ConnectWallet = ({ defaultValue}: {defaultValue:string}): JSX.Element =>         <Select
            defaultValue={defaultValue}
            options={options as string[]}
            placeholder={defaultValue}
            isSearchable={false}
        // onChange={setSelectedOption}
        />

export default ConnectWallet