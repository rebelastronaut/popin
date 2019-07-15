import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { TagFaces, Home, Phone, Email } from '@material-ui/icons';
import styled from 'styled-components'


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "40%",
    },
    textArea: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "82%",
        height: "40%",
    },
    menu: {
        width: 200,
    },
    button: {
        left: "1%",
        top: "10%",
        width: "82%",
        bottom: "20%"
    },
});

class TextFields extends React.Component {

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div style={{
                height: "300px",
                padding: "1%",
                width: "98%",
                backgroundColor: "#FE65B7",
            }}>
                {/* <StyleWrapper> */}
                    <Grid
                        justify="space-between" // Add it here :)
                        container
                    >
                        <Grid item>
                            <Typography style={{width:"40%", padding: "20px", fontColor:"white"}} variant="h5" color="inherit" noWrap>Contact Us</Typography>
                            <form className={classes.container} noValidate autoComplete="off">
                                <TextField
                                    id="standard-dense"
                                    label="Name"
                                    variant="outlined"
                                    className={classNames(classes.textField)}
                                    margin="dense"
                                />
                                <TextField
                                    id="standard-dense"
                                    label="Email"
                                    variant="outlined"
                                    className={classNames(classes.textField)}
                                    margin="dense"
                                />
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows="4"
                                    className={classes.textArea}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <Button variant="contained" color="primary" className={classes.button}>
                                    Submit
                                </Button>
                            </form>
                        </Grid>
                        <Grid item>
                            <Home style={{ color: "white" }} /><Typography style={{ color: "white", width: "100%", alignItems: "left" }} variant="h5" color="inherit" noWrap>Address</Typography>
                            <Typography style={{ color: "white", width: "100%", alignItems: "left" }} variant="body2" color="inherit" noWrap>2 Newent Close London {'\n'} SE15 6EF</Typography>
                        </Grid>
                        <Grid item>
                            <Phone style={{color:"white"}}/><Typography style={{ color:"white", width: "100%", alignItems: "left" }} variant="h5" color="inherit" noWrap>Phone</Typography>
                            <Typography style={{ color: "white", width: "100%", alignItems: "left" }} variant="body2" color="inherit" noWrap>blah blah</Typography>
                            <Email style={{color:"white"}} /><Typography style={{ color: "white", width: "100%", alignItems: "left" }} variant="h5" color="inherit" noWrap>Email</Typography>
                            <Typography style={{ color: "white", width: "100%", alignItems: "left" }} variant="body2" color="inherit" noWrap>blah blah</Typography>                          
                        </Grid>   
                    </Grid>
                    <Grid container justify="center" style={{ color: "white" }}>
                        All rights reserved etc etc <TagFaces style={{ color: "white" }}/>
                    </Grid>       
                {/* </StyleWrapper>          */}
            </div>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);

// const StyleWrapper = styled.div`
// background-color: #FE65B7;
// width: 99vw;
// height: 35vh;
// right: -50px;
// `
