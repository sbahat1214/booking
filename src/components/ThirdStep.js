import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../redux/actions/getBookingsActions'
import * as serviceActionCreators from '../redux/actions/serviceActions'
import { Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import {FaApple} from 'react-icons/fa'


const ThirdStep = (props) => {

    useEffect(()=> {
        props.idFromStore(props.getId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    console.log(props)
    console.log(props.posts)
    const clickHandler = (id, name) => {
        props.sendId(id)
        props.ThirdStep(name)
    }
    
    return (
        <div>
            i am ThirdStep
            <br />
            {`${props.match.params.parent}/${props.match.params.child}`}
            {props.posts?<div className="row text-center">
             {props.posts.map(post=>{
               
                
                return(
                    <div className="col-3" key={post.id}>
                        <Card component={Link} onClick={()=>clickHandler(post.id, post.name)} to={`${props.location.pathname}/${post.slug}`}>
                            <CardActionArea>
                                <CardContent >
                                    <FaApple size={64} />
                                <Typography gutterBottom variant="subtitle2" component="h4">
                                    {post.name}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                )
            })} </div>:<Typography>Loading...</Typography>}
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
        ThirdStep: (name) => dispatch(serviceActionCreators.ThirdStep(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThirdStep)
