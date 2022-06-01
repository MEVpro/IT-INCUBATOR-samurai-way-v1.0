import React from 'react';
import classes from './Profile.module.css';
import {Post} from "./MyPosts/Post";
export const Profile = () => {
    return (
        <div>
            <div className={classes.picture_main}>
                <img src={"https://image.shutterstock.com/image-photo/building-land-new-construction-project-260nw-1130785421.jpg"}/>
            </div>
            <div>
                <div className={classes.picture_avatar}>
                    <img src={"https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"}/>
                </div>
                <div>
                    <div>Mitin Evgeny</div>
                    <p>City: Minsk</p>
                    <p>Education: High</p>
                    <p>Web Site: https://it-kamasutra.com</p>
                </div>

                <Post messege={"How are you?"}/>
                <Post messege={"Thx, I'm fine!"}/>

            </div>
        </div>
    )
}