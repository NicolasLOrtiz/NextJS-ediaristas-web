import InputMask from 'react-input-mask';
import TextField from "../TextField/TextField";
import React from "react";
import {OutlinedTextFieldProps} from "@mui/material";

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
    value: string;
    mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({
                                                         mask,
                                                         value,
                                                         onChange,
                                                         ...rest
                                                     }) => {
    return (
        <InputMask mask={mask} value={value} onChange={onChange}>
            {
                () => {
                    return <TextField {...rest}/>
                }
            }
        </InputMask>)
}

export default TextFieldMask;