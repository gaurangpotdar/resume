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
                    <Typography align="center" component={'span'} style={{height: 50, justifyItems:'center'}}>
                        Resume Builder
                    </Typography>
            </AppBar>

            <span style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
                <h2>Basic Details</h2>
            </span>
            <Container fixed style={{display: 'flex', maxWidth:'80%', alignItems: 'center', justifyContent: 'center'}}>
                <form id = "Basic Details" style={{display: 'inline-block', width: '100'} }>
                    <TextField label = "Name" fullWidth/>
                    <TextField label = "Age" />
                    <TextField label = "Gender" /> 
                    {/* Change the above to dropdown */}
                    <TextField label = "Email" />
                    <TextField label = "Phone Number" />
                </form>
            </Container>


            {/* Professional Details */}
            <h2>Add Qualifications</h2>
            <Container style = {{display: 'flex'}}>

                <Container fixed style={{display: 'block'}}>
                    <IconButton onClick={() => addEdu_cb()}>
                        <AiOutlinePlusCircle />
                    </IconButton>

                    <Typography component={'span'}>
                        Add Educational Qualifications
                    </Typography>

                    <form>
                        <TextField label = "Name of Study Place" fullWidth/>
                        <TextField label = "Type of Education" fullWidth/>

                        <Button variant = "contained" type = "submit" style={{marginTop: 15 }}>
                            Submit
                        </Button>
                    </form>
                </Container>

                <Container fixed>
                    <Typography>
                        <IconButton onClick={() => addProf_cb()}>
                            <AiOutlinePlusCircle />
                        </IconButton>
                            Add Professional Information

                        <form>
                            <TextField label = "Name of Study Place" fullWidth />
                            <TextField label = "Type of Education" fullWidth />
                            <Button variant = "contained" type = "submit">
                                    Submit
                            </Button>
                        </form>
                    </Typography>
                </Container>

            </Container>

        </div>
    )
}

export default App
