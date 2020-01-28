import React from 'react'
import { connect } from 'react-redux'
import {List, ListItemText, ListItem} from '@material-ui/core'


const FinalResult = (props) => {
    console.log(props)
    return (
        <div>
            i am final result
            <List component="nav" aria-label="contacts">
                <ListItem button >
                    <ListItemText primary={props.mainService} />
                </ListItem>
                <ListItem button >
                    <ListItemText primary={props.firstStepService} />
                </ListItem>
                <ListItem button >
                    <ListItemText primary={props.secondStepService} />
                </ListItem>
                <ListItem button >
                    <ListItemText primary={props.thirdStepService} />
                </ListItem>
            </List>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        mainService: state.service.mainService,
        firstStepService: state.service.firstStepService,
        secondStepService: state.service.secondStepService,
        thirdStepService: state.service.thirdStepService
    }
}

export default connect(mapStateToProps)(FinalResult)
