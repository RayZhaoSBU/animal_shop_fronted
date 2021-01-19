import Grid from "@material-ui/core/Grid";
import React, {useState} from "react";
import Paper from "@material-ui/core/Paper";
import './ProductInfo.scss'
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Fab from "@material-ui/core/Fab";
import Chip from "@material-ui/core/Chip";
// import DoneIcon from '@material-ui/icons/Done';
import {MoreOutlined} from "@material-ui/icons";

const ProductInfo=(props)=>{

    const handleFormControl = (event) => {
        const newProduct = {...props.product};
        newProduct[event.target.name] = event.target.value;
        props.setProduct(newProduct);
    };


    const handleDelete=(item)=>{
        let chips=props.product.tags.split(' ');
        let index=chips.findIndex(chip=>{
            return chip===item;
        })
        chips.splice(index,1);
        let newTags=chips.join(" ");
        let newProduct={
            ...props.product,
            tags:newTags
        }
        props.setProduct(newProduct);
    }

    const [tagInput,setTagInput]=useState('cat');

    const handleChipChange=(event)=>{
        setTagInput(event.target.value);
    }
    const handleAddChip=(event)=>{
        let newTags=props.product.tags+' '+tagInput;
        let newProduct={
            ...props.product,
            tags:newTags
        }
        props.setProduct(newProduct);
    }

    return(
        <Grid container className='product' spacing={2}>
            {/*<Grid item container lg={4} md={4} sm={4} xs={4} className='left' spacing={1}>*/}
            {/*    <Grid item lg={6} md={6} sm={6} xs={6} >*/}
            {/*        <Paper className="product-wrapper">*/}
            {/*            <div className='image-wrapper'>*/}
            {/*                <img src={props.product.image1} alt='product image 1'  className='image'/>*/}
            {/*            </div>*/}
            {/*        </Paper>*/}
            {/*    </Grid>*/}
            {/*    <Grid item lg={6} md={6} sm={6} xs={6} >*/}
            {/*        <Paper className="product-wrapper">*/}
            {/*            <div className='image-wrapper'>*/}
            {/*                <img src={props.product.image2} alt='product image 2'  className='image'/>*/}
            {/*            </div>*/}
            {/*        </Paper>*/}
            {/*    </Grid>*/}
            {/*    <Grid item lg={6} md={6} sm={6} xs={6} >*/}
            {/*        <Paper className="product-wrapper">*/}
            {/*            <div className='image-wrapper'>*/}
            {/*                <img src={props.product.image3} alt='product image 3'  className='image'/>*/}
            {/*            </div>*/}
            {/*        </Paper>*/}
            {/*    </Grid>*/}
            {/*    <Grid item lg={6} md={6} sm={6} xs={6} >*/}
            {/*        <Paper className="product-wrapper">*/}
            {/*            <div className='image-wrapper'>*/}
            {/*                <img src={props.product.image4} alt='product image 4'  className='image'/>*/}
            {/*            </div>*/}
            {/*        </Paper>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}


            <Grid container item lg={10} md={10} sm={10} xs={10} spacing={3} className='bottom'>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TextField id="outlined-basic"
                               label="Name"
                               name='name'
                               variant="outlined"
                               className='input'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.name}
                    />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <TextField id="outlined-basic"
                               label="Price"
                               name='price'
                               variant="outlined"
                               className='input'
                               type='number'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.price}
                    />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <TextField id="outlined-basic"
                               label="Brand"
                               name='brand'
                               variant="outlined"
                               className='input'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.brand}
                    />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <TextField id="outlined-basic"
                               label="Type"
                               name='type'
                               variant="outlined"
                               className='input'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.type}
                    />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <TextField id="outlined-basic"
                               label="Animal Type"
                               name='animalType'
                               variant="outlined"
                               className='input'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.animalType}
                    />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <TextField id="outlined-basic"
                               label="Life Stage"
                               name='lifeStage'
                               variant="outlined"
                               className='input'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.lifeStage}
                    />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <TextField id="outlined-basic"
                               label="Stock"
                               name='stock'
                               variant="outlined"
                               className='input'
                               type='number'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.stock}
                    />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TextField id="outlined-basic"
                               label="Image 1"
                               name='image1'
                               variant="outlined"
                               className='input'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.image1}
                    />
                </Grid>

                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TextField id="outlined-basic"
                               label="Image 2"
                               name='image2'
                               variant="outlined"
                               className='input'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.image2}
                    />
                </Grid>

                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TextField id="outlined-basic"
                               label="Image 3"
                               name='image3'
                               variant="outlined"
                               className='input'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.image3}
                    />
                </Grid>

                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TextField id="outlined-basic"
                               label="Image 4"
                               name='image4'
                               variant="outlined"
                               className='input'
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.image4}
                    />
                </Grid>


                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TextField
                               label="Description"
                               name='description'
                               variant="outlined"
                               className='input'
                               id="outlined-multiline-static"
                               multiline
                               rows={4}
                               disabled={!props.editable}
                               onChange={handleFormControl}
                               value={props.product.description}
                    />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} className='showTag'>
                    {
                        props.product.tags.split(' ').map(chip=>(
                            <Chip
                                label={chip}
                                name={chip}
                                clickable
                                disabled={!props.editable}
                                // color="Success"
                                onDelete={handleDelete.bind(this,chip)}
                            />
                        ))
                    }
                </Grid>
                <Grid item container lg={12} md={12} sm={12} xs={12} className='addTag'>
                    <Grid item lg={5} md={5} sm={5} xs={5}>
                        <TextField
                            label="Add Tags"
                            name='description'
                            variant="outlined"
                            className='input'
                            id="outlined-multiline-static"
                            disabled={!props.editable}
                            onChange={handleChipChange}
                            value={tagInput}
                        />
                    </Grid>
                    <br/>
                    <br/>
                    <br/>
                    <Grid item lg={8} md={8} sm={8} xs={8}>
                        <Fab
                            variant="extended"
                            size="large"
                            aria-label="AddProduct"
                            disabled={!props.editable}
                            onClick={handleAddChip}
                            color="primary"
                            style={{backgroundColor:"Peru",color:"white"}}
                        >
                            <MoreOutlined style={{marginRight:10}}/> Add
                        </Fab>
                    </Grid>

                </Grid>
            </Grid>
            {/*<Grid item container lg={8} md={8} sm={8} xs={8} className='right'>*/}
            {/*    <Grid item container lg={12} md={12} sm={12} xs={12} className='other-size'>*/}
            {/*        Name: {props.product.name}*/}
            {/*    </Grid>*/}
            {/*    <Grid item container  lg={4} md={4} sm={4} xs={4} className='other-size'>*/}
            {/*        Price: ${props.product.price}*/}
            {/*    </Grid>*/}
            {/*    <Grid item container  lg={4} md={4} sm={4} xs={4} className='other-size'>*/}
            {/*        Color: {props.product.color}*/}
            {/*    </Grid>*/}
            {/*    <Grid item container  lg={4} md={4} sm={4} xs={4} className='other-size'>*/}
            {/*        Size: {props.product.size}*/}
            {/*    </Grid>*/}
            {/*    <Grid item container  lg={4} md={4} sm={4} xs={4} className='other-size'>*/}
            {/*        Brand: {props.product.brand}*/}
            {/*    </Grid>*/}
            {/*    <Grid item container  lg={4} md={4} sm={4} xs={4} className='other-size'>*/}
            {/*        stock: {props.product.stock}*/}
            {/*    </Grid>*/}
            {/*    <Grid item container  lg={12} md={12} sm={12} xs={12} className='other-size'>*/}
            {/*        description: {props.product.description}*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </Grid>
    )
}
export default ProductInfo;
