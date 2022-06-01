import React from 'react';
import classes from './Post.module.css';

export const Post = (props) => {
    return (
            <div className={classes.item}>
                <img src={'https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-square-avatar-halloween-175916751.jpg'}/>
                {props.messege}
            </div>
    )
}