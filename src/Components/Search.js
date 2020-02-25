import React, { Component } from 'react';

class Search extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tempValue: ""
        }
    }

    showButton = () => {
        if(this.props.showForm===false) {
            return <div className="btn btn-block btn-outline-info" onClick={() => {this.props.changeStatus(); this.props.defaultEditStatus()}}>Add User</div>   
        }
    }

    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
    }

    render() {
        return (
            <div className="searchForm">
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <div className="form-group">
                                <div className="btn btn-group">
                                    <input type="text" className="form-control" aria-describedby="helpId" placeholder="Insert keyword ..." 
                                     onChange={(event) => this.isChange(event)}/>
                                    <div className="btn btn-info"
                                     onClick={() => this.props.getTextSearch(this.state.tempValue)}>Search</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            {this.showButton() }                         
                        </div>
                        <div className="col-12">
                            <hr />
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Search;