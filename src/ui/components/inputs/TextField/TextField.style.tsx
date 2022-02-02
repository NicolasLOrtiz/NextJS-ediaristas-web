import {styled, TextField} from "@mui/material";


export const TextFieldStyled = styled(TextField)`
  .MuiInputBase-root {
    background-color: ${({theme}) => theme.palette.grey[50]};
    }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${({theme}) => theme.palette.grey[100]};
    }
`;