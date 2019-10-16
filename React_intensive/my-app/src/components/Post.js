import React, {Component} from 'react';
import User from './User';


export default class Post extends Component {
    render() {
        return (
            <div className="post">
            <User
            src="https://img.freepik.com/free-psd/modern-man-smiling_1194-11653.jpg?size=338&ext=jpg"
             alt="prince"
                name="i_am_man"  
                min        />
            <img src={this.props.src} alt={this.props.alt}></img>
            <div className="post__name">
                some account
            </div>
            <div className="post__descr">
                afalfjalfkjafhafiouahfpofhapofa
            </div>
            </div>
        )
    }
}