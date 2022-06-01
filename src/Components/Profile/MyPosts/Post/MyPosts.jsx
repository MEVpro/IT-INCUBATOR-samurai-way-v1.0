import React from 'react';
import classes from './MyPosts.module.css';

export const MyPosts = () => {
    return (
        <div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    My posts
                </div>

                <div className={classes.item}>
                    news
                </div>
            </div>

            <div>
                post
            </div>

            <div>
                post
            </div>
        </div>
    )
}