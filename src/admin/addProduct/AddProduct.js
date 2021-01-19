import React, {useState} from "react";
import './AddProduct.scss'
import ProductInfo from "../productInfo/ProductInfo";
import Fab from "@material-ui/core/Fab";
import SendIcon from '@material-ui/icons/Send';
import {addProduct} from "../../actions/products.action";
import {Backup} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {appConstant} from "../../constants/constant";
import Button from "@material-ui/core/Button";

const AddProduct=()=>{
    const [product,setProduct]=React.useState({
        id:'',
        name:'',
        price:100,
        description:'',
        brand:'',
        type:'food',
        animalType:'cat',
        stock:'',
        lifeStage:'kitten',
        tags:'dog cat toy food',
        releaseDate:new Date(),
        soldNumber:0,
        image1:'',
        image2:'',
        image3:'',
        image4:'',
    })

    const handleSubmit=()=>{
        console.log(product)
        let newProduct= {...product,
        tags:product.tags+' '+product.name+' '+product.type+' '+product.animalType+' '+product.brand+' '+product.lifeStage+' ',
        };

        addProduct(newProduct);
    }
    return(
        <div>
            <ProductInfo product={product} setProduct={setProduct} editable={true}/>
            <Fab
                variant="extended"
                size="large"
                aria-label="AddProduct"
                className='add-btn'
                onClick={handleSubmit}
                color="primary"
                style={{position:"fixed",right:25,bottom:25}}
                component={Link}
                to={appConstant.adminRoute}
            >
                Add Product <Backup style={{margin:10}}/>
            </Fab>



        </div>


    )
}

export default AddProduct;
