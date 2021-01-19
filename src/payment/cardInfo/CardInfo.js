import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import './CardInfo.scss'

const CardInfo=(props)=>{

    const handleFormControl = (event) => {
        const newCard = {...props.card};
        newCard[event.target.name] = event.target.value;
        props.setCard(newCard);
    };

    return(
        <form className='card-info'>
            <Grid item container spacing={1} lg={10}  md={10} sm={10} xs={10} className='info-row'>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <TextField id="outlined-basic"
                               label="Card Number"
                               name='cardNumber'
                               variant="outlined"
                               className='card-num'
                        // disabled={!editable}
                                onChange={handleFormControl}
                                value={props.card.cardNumber}
                    />
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                    <TextField id="outlined-basic"
                               label="Expiration Date"
                               name='expirationDate'
                               variant="outlined"
                               className='card-date'
                        // disabled={!editable}
                                onChange={handleFormControl}
                                value={props.card.expirationDate}
                    />
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3}>
                    <TextField id="outlined-basic"
                               label="Security Code"
                               name='securityCode'
                               variant="outlined"
                               className='card-css'
                        // disabled={!editable}
                                onChange={handleFormControl}
                                value={props.card.securityCode}
                    />
                </Grid>
            </Grid>
        </form>
    )
}

export default CardInfo;