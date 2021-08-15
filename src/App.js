import { AppBar, Button, Container, IconButton, TextField, Typography } from '@material-ui/core'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import React from 'react'

const addEdu_cb = () => {
    console.log('clicked')
}

const addProf_cb = () => [
    console.log('new clicked')
]

const App = () => {
    return (
        <div>
            <AppBar position = "static">
                    <Typography align="center" component={'span'}>
                        Resume Builder
                    </Typography>
            </AppBar>

            <TextField label = "Name" />
            <TextField label = "Age" />
            <TextField label = "Gender" /> 
            {/* Change the above to dropdown */}
            <TextField label = "Email" />
            <TextField label = "Phone Number" />

            {/* Professional Details */}
            <IconButton onClick={() => addEdu_cb()}>
                <AiOutlinePlusCircle />
            </IconButton>

            <Typography component={'span'}>
                Add Educational Qualifications
            </Typography>

            <form>
                <TextField label = "Name of Study Place" />
                <TextField label = "Type of Education" />

                <Button variant = "contained" type = "submit">
                    Submit
                </Button>
            </form>

            <Container>

            </Container>


            <Typography>
                <IconButton onClick={() => addProf_cb()}>
                    <AiOutlinePlusCircle />
                </IconButton>
                    Add Professional Information

                <form>
                    <TextField label = "Name of Study Place" />
                    <TextField label = "Type of Education" />
                    <Button variant = "contained" type = "submit">
                            Submit
                    </Button>
                </form>
            </Typography>
            
                

        </div>
    )
}

export default App
