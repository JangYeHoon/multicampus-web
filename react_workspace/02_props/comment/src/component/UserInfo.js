import React from 'react';
import Avater from './Avater'

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avater author={props.author}/>
            <div className="UserInfo-name">
                {props.author.name}
            </div>
        </div>
    );
}

export default UserInfo;