import React, { Component } from 'react';

class TableData extends Component {

    checkPermission = () => {
        if(this.props.permission==="1") return "Admin";
        else if(this.props.permission==="2") return "Moderator";
        else if(this.props.permission==="3") return "Editor";
    }

    stateButton() {
        if(this.props.editUser===false)
            return (
                <div className="btn btn-warning sua">
                      <i type="button" className="fa fa-edit" 
                      onClick={() => {this.props.changeEditStatus();this.props.getUserInfo();this.props.defaultAddStatus()}}>  Edit</i>          
                </div>
            )
    }


    render() {
        return (
            <tr>
                <td>{this.props.num+1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.tel}</td>
                <td>{this.checkPermission()}</td>
                <td>
                    <div className="btn-group">
                        {this.stateButton()}
                        <div className="btn btn-danger xoa">
                            <i className="fa fa-trash" onClick={() => {this.props.deleteUser(this.props.id);this.props.defaultAddStatus();this.props.defaultEditStatus()}}>  Delete</i>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableData;