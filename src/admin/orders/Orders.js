import React, {forwardRef, useEffect} from "react";
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../../actions/orders.action";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn'
import {appConstant} from "../../constants/constant";
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



const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 3000,
    },
});



const Orders=()=>{
    const history=useHistory();
    const dispatch=useDispatch();

    const loginState = useSelector(appState => {
        return {
            user: appState.user,
            orders:appState.orders,
            shipping:appState.shipping,
        };
    });
    useEffect(()=>{
        dispatch(getOrders());
    },[])

    useEffect(()=>{
        console.log(loginState)
    },[loginState.orders])


    return (
        <div style={{ maxWidth: '100%' }}>
            {
                loginState.orders?
                    <MaterialTable
                        icons={tableIcons}
                        options={{
                            pageSize: 10,
                            pageSizeOptions: [10, 20, 30 ,50],
                            search: true,
                            actionsColumnIndex: -1,
                            // filtering: true
                        }}
                        columns={[
                            { title: 'Id', field: 'id' },
                            { title: 'User Id', field: 'userId' },
                            { title: 'Date', field: 'date',type:'datetime' },
                            { title: 'Price', field: 'total', type:'numeric' },
                            { title: 'Status', field: 'status' },

                        ]}
                        actions={[
                            {
                                icon: tableIcons.Edit,
                                tooltip: 'edit order',
                                onClick: (event, rowData) => history.push(`${appConstant.adminOrderDetailRoute}/${rowData.id}`)
                            }
                        ]}
                        data={loginState.orders}
                        title="Order Dashboard"
                    />
                    :
                    <h3>No data</h3>
            }

        </div>
    )

}

export default Orders;
