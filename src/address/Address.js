import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React from "react";
import './Address.scss'


const Address=(props)=>{

    const handleFormControl = (event) => {
        const newAddress = {...props.address};
        newAddress[event.target.name] = event.target.value;
        props.setAddress(newAddress);
    };
    return (

            <form className='info'>

                <Grid item container lg={10} spacing={1} md={10} sm={10} xs={10} className='info-name'>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic"
                                   label="First Name"
                                   name='firstName'
                                   variant="outlined"
                                   className='info-name-field'
                                    onChange={handleFormControl}
                                    value={props.address.firstName}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic"
                                   label="Last Name"
                                   name='lastName'
                                   variant="outlined"
                                   className='info-name-field'
                                    onChange={handleFormControl}
                                    value={props.address.lastName}
                        />
                    </Grid>
                </Grid>
                <br/>
                <br/>
                <br/>
                <Grid item lg={10} md={10} sm={10} xs={10}  className='center'>
                    <TextField id="outlined-basic"
                               label="Address"
                               name='address'
                               variant="outlined"
                               className='info-text-field'
                               // disabled={!editable}
                               onChange={handleFormControl}
                               value={props.address.address}
                    />

                </Grid>
                <br/>
                <br/>
                <br/>
                <br/>
                <Grid item container spacing={1} lg={10} md={10} sm={10} xs={10} className='info-name'>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic"
                                   label="City"
                                   variant="outlined"
                                   name='city'
                                   className='info-name-field'
                                   // disabled={!editable}
                                   onChange={handleFormControl}
                                   value={props.address.city}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic"
                                   label="Zip"
                                   name='zip'
                                   variant="outlined"
                                   className='info-name-field'
                                   // disabled={!editable}
                                   onChange={handleFormControl}
                                   value={props.address.zip}
                        />
                    </Grid>
                </Grid>
                <br/>
                <br/>
                <br/>
                <br/>
                <Grid item container lg={10} spacing={1} md={10} sm={10} xs={10} className='info-name'>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic"
                                   label="Country/Region"
                                   name='country'
                                   variant="outlined"
                                   className='info-name-field'
                                   // disabled={!editable}
                                   onChange={handleFormControl}
                                   value={props.address.country}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic"
                                   label="State"
                                   name='state'
                                   variant="outlined"
                                   className='info-name-field'
                                   // disabled={!editable}
                                   onChange={handleFormControl}
                                   value={props.address.state}
                        />
                    </Grid>
                </Grid>
            </form>

    )
}


export default Address;
