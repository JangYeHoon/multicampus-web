import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from './component/UserInfo'

Comment.propTypes = {
    date : PropTypes.string,
    text : PropTypes.string,
    author : PropTypes.object,
};

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo author={props.author}/>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

export default Comment;