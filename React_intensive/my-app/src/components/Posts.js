import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
render() {
    return (
        <div className="left">
            <Post alt="nature" src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <Post alt="nature" src="http://isha.sadhguru.org/blog/wp-content/uploads/2016/05/natures-temples.jpg" />
        </div>
        
    )
}
}