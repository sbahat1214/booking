import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../redux/actions/getBookingsActions'
import * as serviceActionCreators from '../redux/actions/serviceActions'
// import axios from 'axios'
import {Link} from 'react-router-dom'
import {Typography, Grid, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
import {FaWrench, FaHandHoldingUsd, FaDatabase, FaCloudDownloadAlt} from 'react-icons/fa'
import axios from 'axios'


const AllServices = (props) => {
    useEffect(()=>{
        axios.get('http://sabahat.website/wp-json/wp/v2')
        .then(res=> console.log(res.data))
        props.getBookings()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
console.log(props.bookings)
console.log(props)

    const clickHandler = (id, name) => {
        props.sendId(id)
        props.mainService(name)
    }
    return (
        <div className="my-auto pt-5">
            <Grid container >
                <Grid sm={4} item></Grid>
                <Grid sm={4} item>
                    <Typography variant="h4" className="text-center">
                        I WANT TO
                    </Typography>
                    {props.bookings? props.bookings.map(booking=>{
                        let icon;
                        if(booking.name=== "Install My Products")icon= <FaCloudDownloadAlt size={32} />
                        if(booking.name=== "Recover My Data")icon= <FaDatabase size={32} />
                        if(booking.name=== "Repair my product")icon= <FaWrench size={32} />
                        if(booking.name=== "Sell My Device")icon= <FaHandHoldingUsd size={32} />
                        return (
                        <List key={booking.id} component="nav" aria-label="contacts">
                            <ListItem button onClick={()=>clickHandler(booking.id, booking.name)} component={Link} to={booking.slug}>
                                <ListItemIcon>
                                {icon}
                                </ListItemIcon>
                                <ListItemText primary={booking.name} />
                            </ListItem>
                        </List>
                    )}) :null}
                    

                </Grid>
                <Grid sm={4} item></Grid>
            </Grid>
        </div>
    )
}


const mapStateToProps= (state) => {
    return {
        bookings: state.bookings.bookings
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getBookings: () => dispatch(actionCreators.getBookingsActions()),
        sendId: (id) => dispatch(actionCreators.sendId(id)),
        mainService: (name) => dispatch(serviceActionCreators.mainService(name))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(AllServices)
