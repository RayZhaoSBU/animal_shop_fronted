import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ProductInfo from "../productInfo/ProductInfo";
import SendIcon from "@material-ui/icons/Send";
import Fab from "@material-ui/core/Fab";
import {addProduct} from "../../actions/products.action";
import {Edit, SaveAlt} from "@material-ui/icons";


const EditProduct=(props)=>{
    const [editable,setEditable]=useState(false);
    const loginState = useSelector(appState => {
        return {
            user: appState.user,
            products:appState.products
        };
    });

    const [product,setProduct]=React.useState({
        id:'',
        name:'',
        price:90,
        description:'',
        brand:'',
        stock:322,
        tags:'',
        releaseDate:new Date(),
        soldNumber:0,
        image1:'',
        image2:'',
        image3:'',
        image4:'',
    })

    useEffect(()=>{
        let newProduct=loginState.products.find(p => +props.match.params.id === p.id);
        setProduct(newProduct);
    },[])

    const handleSubmit=()=>{
        addProduct(product);
        setEditable(false);
    }

    const handleEditable=()=>{
        setEditable(true);
    }
    return(
        <div>
            <ProductInfo product={product} setProduct={setProduct} editable={editable}/>
            {
                editable?
                    <Fab
                        variant="extended"
                        size="large"
                        aria-label="AddProduct"
                        className='add-btn'
                        onClick={handleSubmit}
                        style={{backgroundColor:"#228B22",color:"white",position:"fixed",right:25,bottom:25}}
                    >
                        Save <SaveAlt style={{margin:10}}/>
                    </Fab>
                    :
                    <Fab
                        variant="extended"
                        size="large"
                        aria-label="AddProduct"
                        className='add-btn'
                        onClick={handleEditable}
                        style={{backgroundColor:"#128ced",color:"white",position:"fixed",right:25,bottom:25}}
                    >
                        Edit <Edit style={{margin:10}}/>
                    </Fab>
            }

        </div>
    )
}

export default EditProduct;
