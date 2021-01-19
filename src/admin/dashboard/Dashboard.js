import React, {forwardRef, useEffect, useState} from "react";
import './Dashboard.scss'
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../actions/products.action";
import {appConstant} from "../../constants/constant";
import {Link, useHistory} from "react-router-dom";
import AddBox from "@material-ui/icons/AddBox";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Edit from "@material-ui/icons/Edit";
import SaveAlt from "@material-ui/icons/SaveAlt";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Search from "@material-ui/icons/Search";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Remove from "@material-ui/icons/Remove";
import ViewColumn from "@material-ui/icons/ViewColumn";
import MaterialTable from "material-table";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


const Dashboard=(props)=>{
    const history=useHistory();
    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(getProducts());
    },[])

    const loginState = useSelector(appState => {
        return {
            products:appState.products,
        };
    });

    return (
        <div style={{ width: '100%' }}>
            {
                loginState.products?
                    <MaterialTable
                        icons={tableIcons}
                        options={{
                            pageSize: 10,
                            pageSizeOptions: [10, 20, 30 ,50],
                            search: true,
                            // filtering: true,
                        }}
                        columns={[
                            { title: 'Id', field: 'id' },
                            { title: 'Name', field: 'name' },
                            { title: 'Brand', field: 'brand' },
                            { title: 'Type', field: 'type' },
                            { title: 'Animal Type', field: 'animalType' },
                            { title: 'Life State', field: 'lifeStage' },
                            { title: 'Release Date', field: 'releaseDate',type:'datetime' },
                            { title: 'Stock', field: 'stock' },
                            { title: 'Price', field: 'price',type:'currency'},
                        ]}
                        actions={[
                            {
                                icon: tableIcons.Edit,
                                tooltip: 'edit Product',
                                onClick: (event, rowData) => history.push(`${appConstant.editProductRoute}/${rowData.id}`)
                            }
                        ]}
                        data={loginState.products}
                        title="Product Dashboard"
                    />
                    :
                    <h3>No data</h3>
            }
        </div>
    )
}

export default Dashboard;
