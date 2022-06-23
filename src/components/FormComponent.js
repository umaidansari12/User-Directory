import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';



const FormComponent = () => {
    return (
        <Stack spacing={2} border={5} m={5} minHeight={500}>
            <p>User-Directory App</p>
            <TextField>Item 1</TextField>
            <TextField>Item 2</TextField>
            <TextField>Item 3</TextField>
        </Stack>
    )
}

export default FormComponent
