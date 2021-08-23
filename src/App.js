import { AppBar, Button, Container, Grid, IconButton, MenuItem, TextField, Typography} from '@material-ui/core'
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
            {/* <Box  style={{display: 'flex', maxWidth:'80%', alignItems: 'center', justifyContent: 'center'}}> */}
            {/* <Box component = "div" display="flex" style={{width: 350, justifyContent: 'center', alignContent: 'center'}} > */}
            <Grid container direction="column" justifyContent='center' alignItems='center'>
                <form id = "Basic Details" display="block">
                    <div>
                        <TextField label = "Name" fullWidth/>
                    </div>
                    <div>
                        <TextField label = "Age" type="number"/>
                        <TextField label = "Gender" select style={{width:100, marginLeft: 5}}>
                            <MenuItem>
                                Male
                            </MenuItem>
                            <MenuItem>
                                Female
                            </MenuItem>
                            <MenuItem>
                                Other
                            </MenuItem>    
                        </TextField>
                    </div>
                    {/* Change the above to dropdown */}
                    <div>
                        <TextField label = "Email" fullWidth/>
                    </div>
                    <div>
                        <TextField label = "Phone Number" fullWidth/>
                    </div>
                </form>
            </Grid>

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
