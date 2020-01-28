import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../redux/actions/getBookingsActions'
import * as serviceActionCreators from '../redux/actions/serviceActions'
import { Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import {FaApple, FaDesktop, FaLaptop, FaMobile, FaDatabase, FaTabletAlt, FaUsb} from 'react-icons/fa'
import {AiTwotoneDatabase} from 'react-icons/ai'


const FirstStep = (props) => {

    useEffect(()=> {
        props.idFromStore(props.getId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    
    console.log(props)
    console.log(props.posts)

    const clickHandler = (id, name) => {
        props.sendId(id)
        props.FirstStepService(name)
    }
    const len = props.posts
    if(len===0){
        console.log('ss')
    }
    
    return (
        <div className='container'>
            i am FirstStep
            <br />
            {props.match.params.parent}
            {props.posts?<div className="row text-center">
             {props.posts.map(post=>{
                let icon;
                if(post.name==="Apple Tv repair")icon = <FaApple size={64} />
                if(post.name==="desktop repair")icon = <FaDesktop size={64} />
                if(post.name==="Laptop Repair")icon = <FaLaptop size={64} />
                if(post.name==="Mobile Repair")icon = <FaMobile size={64} />
                if(post.name==="Desktop/All in One PC Data Recovery")icon = <FaDesktop size={64} />
                if(post.name==="Hard Disk Drive (HDD) Data Recovery")icon = <FaDatabase size={64} />
                if(post.name==="Laptop Data Recovery")icon = <FaLaptop size={64} />
                if(post.name==="Mobile Phone Data Recovery")icon = <FaMobile size={64} />
                if(post.name==="RAID Storage (NAS/DAS/SAN/Disk Set) Data Recovery")icon = <AiTwotoneDatabase size={64} />
                if(post.name==="Solid State Drive (SSD) Data Recovery")icon = <FaDatabase size={64} />
                if(post.name==="Tablet Data Recovery")icon = <FaTabletAlt size={64} />
                if(post.name==="USB Flash/Memory Cards Data Recovery")icon = <FaUsb size={64} />
                return(
                    <div className="col-3" key={post.id}>

                        


                        
                            <Card component={Link} onClick={()=>clickHandler(post.id, post.name)} to={`${props.match.params.parent}/${post.slug}`}>
                                <CardActionArea>
                                    <CardContent >
                                        {icon}
                                    <Typography gutterBottom variant="subtitle2" component="h4">
                                        {post.name}
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        
                    </div>
                )
            })} </div>:<Typography>Loading...</Typography>}
            {!props.posts? <span>hi</span> :null}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        getId: state.bookings.id,
        posts: state.bookings.updatedPosts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getFirstStepBooking: (url) => dispatch(actionCreators.getFirstStepBooking(url)),
        idFromStore: (id) => dispatch(actionCreators.setUrl(id)),
        sendId: (id) => dispatch(actionCreators.sendId(id)),
        FirstStepService: (name) => dispatch(serviceActionCreators.FirstStepService(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstStep)
