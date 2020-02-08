import React from "react"
import {firebase} from "../firebase"

export const Checkbox = ({id}) =>{
    const acrhiveTask = () =>{
        firebase
        .firebasestore()
        .collection('tasks')
        .doc(id)
        .update({
            archived: true,
        })
    }
    return (
        <div className="checkbox-holder" data-testid="checkbox-action" onClick={()=> acrhiveTask()}>
            <span className="checkbox"/>
        </div>
    )
}