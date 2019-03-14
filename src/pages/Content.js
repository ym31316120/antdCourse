import React from 'react';
import HelloList from './HelloList';

class Content extends React.Component{
    render(){
        return (
          <HelloList name="你好">
            <h1>{'标题'}</h1>
            </HelloList>
        );
    }
}

export default Content;