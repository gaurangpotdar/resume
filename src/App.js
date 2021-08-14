import { AppBar, Button, IconButton, TextField, Typography } from '@material-ui/core'
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
                    <Typography align="center">
                        Resume Builder
                    </Typography>
            </AppBar>

            <form>
                <TextField label = "Name" />
                <TextField label = "Age" />
                <TextField label = "Gender" /> 
                {/* Change the above to dropdown */}
                <TextField label = "Email" />
                <TextField label = "Phone Number" />

                {/* Professional Details */}
                <div id = "Educational Qualifications">
                    <Typography>
                        <IconButton onClick={() => addEdu_cb()}>
                            <AiOutlinePlusCircle />
                        </IconButton>
                        Add Educational Qualifications
                        <form>
                            <TextField label = "Name of Study Place" />
                            <TextField label = "Type of Education" />


                            <Button variant = "contained">
                                Submit
                            </Button>
                        </form>
                    </Typography>

                </div>

                <Typography>
                    <IconButton onClick={() => addProf_cb()}>
                        <AiOutlinePlusCircle />
                    </IconButton>
                    Add Professional Information
                </Typography>
                
                

            </form>
        </div>
    )
}

export default App
