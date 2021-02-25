import React, { Component } from 'react';
import { data } from '../imageJson';
class ArtWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentId:this.props.match.params.id,
            }
    }


    render() {
        console.log(this.props)
        return (
            <div>
              {data.filter(item => item.id == this.state.currentId).map((item) => {
                    return <div key={item.id} >
                        <img src={item.path} alt={item.name} />
                        <h1>{item.name}</h1>
                    </div>
                })}
            </div>
        );
    }
}

export default ArtWork;