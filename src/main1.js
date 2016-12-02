/**
 * Created by Administrator on 2016/12/2.
 */

import React from 'react'
import { render } from 'react-dom'

var FancyCheckbox = React.createClass({
    render: function() {
        return (
            <div>
                {
                    this.props.list.map(function(val){
                        return <h2>{val.title}</h2>
                    })
                }
            </div>
        );
    }
});
var list = [{title:"a"},{title:"b"}];
var listRender = render(
    <FancyCheckbox checked={true} list={list}>

    </FancyCheckbox>,
    document.getElementById("app")
);

setTimeout(function(){
    var k = [{title:"b"},{title:"s"}];
    listRender.setProps({list:k});
},2000);

//render(<Table dataSource={dataSource} columns={columns} />,document.getElementById("app"));