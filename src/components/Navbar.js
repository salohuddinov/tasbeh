import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }
    render() {
        return (
            <div className='navbar'>
                <div className="nav__cont">
                    <div className="cont__h2">
                        <h2> {this.state.count} </h2>
                    </div>
                    <button className="button"
                        onClick={() => this.setState({ count: this.state.count + 1 })}>
                        +
                    </button>
                    <button className='reset'
                        onClick={() => this.setState({ count: 0 })}>
                        back
                    </button>
                </div>
            </div >
        )
    }
}
