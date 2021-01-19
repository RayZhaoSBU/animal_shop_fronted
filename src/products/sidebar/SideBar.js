import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import React, {useEffect, useState} from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import './SideBar.scss'

export const SideBar=(props)=>{

    // const [filters,setFilters]=useState({
    //     search:' ',
    //     sport: {
    //         running:false,
    //         lifeStyle:false,
    //         soccer:false,
    //         basketball:false,
    //         hiking:false,
    //         gym:false,
    //
    //     },
    //     size: {
    //         four:false,
    //         five:false,
    //         six:false,
    //         seven:false,
    //         eight:false,
    //         nine:false,
    //         ten:false,
    //         eleven:false,
    //         twelve:false
    //     },
    //     color:{
    //         red:false,
    //         blue:false,
    //         gray:false,
    //         white:false,
    //         orange:false,
    //         pink:false,
    //     },
    //     brand:{
    //         nike:false,
    //         adidas:false,
    //         jordan:false,
    //         newBalance:false
    //     },
    //     price:{
    //         "0-100":false,
    //         '100-200':false,
    //         '200-300':false,
    //         '400-500':false,
    //         'above500':false,
    //     },
    // })
    // const handleFormControl = (event) => {
    //     const newProduct = {...props.product};
    //     newProduct[event.target.name] = event.target.value;
    //     props.setProduct(newProduct);
    // };

    const handleFormChange=(title,event)=>{
        // console.log(event.target)
        // console.log(title)
        const newFilters={
            ...props.filters
        }
        newFilters[title][event.target.name]=!props.filters[title][event.target.name]
        // console.log(event.target)
        props.setFilters(newFilters);

    }


    return(
        <div className='sideBar-main'>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Pet</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <FormGroup row>
                        <FormControlLabel
                            checked={props.filters.pet.cat}
                            control={<Checkbox name="cat"/>}
                            onClick={handleFormChange.bind(this,'pet')}
                            label="Cat"
                        />
                        <FormControlLabel
                            checked={props.filters.pet.dog}
                            control={<Checkbox name="dog" />}
                            onClick={handleFormChange.bind(this,'pet')}
                            label="Dog"
                        />
                        <FormControlLabel
                            checked={props.filters.pet.fish}
                            control={<Checkbox name="fish" />}
                            onClick={handleFormChange.bind(this,'pet')}
                            label="Fish"
                        />
                        <FormControlLabel
                            checked={props.filters.pet.bird}
                            control={<Checkbox name="bird" />}
                            onClick={handleFormChange.bind(this,'pet')}
                            label="Bird"
                        />
                        <FormControlLabel
                            checked={props.filters.pet.reptile}
                            control={<Checkbox name="reptile" />}
                            onClick={handleFormChange.bind(this,'pet')}
                            label="Reptile"
                        />
                    </FormGroup>
                </ExpansionPanelDetails>
            </ExpansionPanel>


            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Brand</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='sideBar-wrap'>
                    <FormControlLabel
                        checked={props.filters.brand.purina}
                        onClick={handleFormChange.bind(this,'brand')}
                        control={<Checkbox name="purina" />}
                        label="Purina"
                    />
                    <FormControlLabel
                        checked={props.filters.brand.greenies}
                        onClick={handleFormChange.bind(this,'brand')}
                        control={<Checkbox name="greenies" />}
                        label="Greenies"
                    />
                    <FormControlLabel
                        checked={props.filters.brand.petmate}
                        onClick={handleFormChange.bind(this,'brand')}
                        control={<Checkbox name="petmate" />}
                        label="Petmate"
                    />
                    <FormControlLabel
                        checked={props.filters.brand.orijen}
                        control={<Checkbox name="merrick" />}
                        onClick={handleFormChange.bind(this,'brand')}
                        label="Orijen"
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            {/*<ExpansionPanel>*/}
            {/*    <ExpansionPanelSummary*/}
            {/*        expandIcon={<ExpandMoreIcon />}*/}
            {/*        aria-controls="panel2a-content"*/}
            {/*        id="panel2a-header"*/}
            {/*    >*/}
            {/*        <Typography>Service</Typography>*/}
            {/*    </ExpansionPanelSummary>*/}
            {/*    <ExpansionPanelDetails className='sideBar-wrap'>*/}
            {/*        <FormControlLabel*/}
            {/*            checked={props.filters.services.grooming}*/}
            {/*            onClick={handleFormChange.bind(this,'services')}*/}
            {/*            control={<Checkbox name="grooming" />}*/}
            {/*            label="Grooming"*/}
            {/*        />*/}
            {/*        <FormControlLabel*/}
            {/*            checked={props.filters.services.veterinarian}*/}
            {/*            onClick={handleFormChange.bind(this,'services')}*/}
            {/*            control={<Checkbox name="veterinarian" />}*/}
            {/*            label="Veterinarian"*/}
            {/*        />*/}
            {/*        <FormControlLabel*/}
            {/*            checked={props.filters.services.training}*/}
            {/*            onClick={handleFormChange.bind(this,'services')}*/}
            {/*            control={<Checkbox name="training" />}*/}
            {/*            label="Training"*/}
            {/*        />*/}
            {/*        <FormControlLabel*/}
            {/*            checked={props.filters.services.insurance}*/}
            {/*            onClick={handleFormChange.bind(this,'services')}*/}
            {/*            control={<Checkbox name="insurance" />}*/}
            {/*            label="Insurance"*/}
            {/*        />*/}
            {/*    </ExpansionPanelDetails>*/}
            {/*</ExpansionPanel>*/}
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Pharmacy</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='sideBar-wrap'>
                    <FormControlLabel
                        checked={props.filters.pharmacy.heartworm}
                        onClick={handleFormChange.bind(this,'pharmacy')}
                        control={<Checkbox name="heartworm" />}
                        label="Heartworm"
                    />
                    <FormControlLabel
                        checked={props.filters.pharmacy.skin}
                        onClick={handleFormChange.bind(this,'pharmacy')}
                        control={<Checkbox name="skin" />}
                        label="Skin"
                    />
                    <FormControlLabel
                        checked={props.filters.pharmacy.ear}
                        onClick={handleFormChange.bind(this,'pharmacy')}
                        control={<Checkbox name="ear" />}
                        label="Ear"
                    />
                    <FormControlLabel
                        checked={props.filters.pharmacy.allergy}
                        onClick={handleFormChange.bind(this,'pharmacy')}
                        control={<Checkbox name="allergy" />}
                        label="Allergy"
                    />
                    <FormControlLabel
                        checked={props.filters.pharmacy.eye}
                        onClick={handleFormChange.bind(this,'pharmacy')}
                        control={<Checkbox name="eye" />}
                        label="Eye"
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Price</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='sideBar-wrap'>
                    <FormControlLabel
                        checked={props.filters.price["0-5"]}
                        onClick={handleFormChange.bind(this,'price')}
                        control={<Checkbox name="0-5" />}
                        label="0-5"
                    />
                    <FormControlLabel
                        checked={props.filters.price["5-20"]}
                        onClick={handleFormChange.bind(this,'price')}
                        control={<Checkbox name="5-20" />}
                        label="5-20"
                    />
                    <FormControlLabel
                        checked={props.filters.price["20-50"]}
                        onClick={handleFormChange.bind(this,'price')}
                        control={<Checkbox name="20-50" />}
                        label="20-50"
                    />
                    <FormControlLabel
                        checked={props.filters.price["50-100"]}
                        onClick={handleFormChange.bind(this,'price')}
                        control={<Checkbox name="50-100" />}
                        label="50-100"
                    />
                    <FormControlLabel
                        checked={props.filters.price["100-500"]}
                        onClick={handleFormChange.bind(this,'price')}
                        control={<Checkbox name="100-500" />}
                        label="100-500"
                    />
                    <FormControlLabel
                        checked={props.filters.price["above500"]}
                        onClick={handleFormChange.bind(this,'price')}
                        control={<Checkbox name="above500" />}
                        label="above 500"
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}




