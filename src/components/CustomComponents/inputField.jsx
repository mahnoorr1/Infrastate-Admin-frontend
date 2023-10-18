import { TextField } from "@mui/material"

const InputField = ({isrequired, label, initialValue, inputType, updateValue}) => {
    return(
        <TextField 
        value={initialValue}
        onChange={updateValue}
        inputMode= {inputType}
        placeholder={label}
        required = {isrequired}
        style={{
            width: '300px',
        }}
        variant="outlined"
        InputProps={{
            style: {
            height: 'auto', 
            overflowY: 'auto', 
            },
        }}></TextField>
    )
}

export default InputField;