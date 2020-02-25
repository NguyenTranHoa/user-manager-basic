import React, { Component } from 'react';
import TableData from './TableData';

class Table extends Component {

    mappingData = () => this.props.dataUser.map((value,key) => 
            <TableData
                key={key}
                num={key}
                id={value.id} 
                name={value.name} 
                tel={value.tel} 
                permission={value.permission}
                changeEditStatus = {() => this.props.changeEditStatus()}
                editUser = {this.props.editUser}
                getUserInfo = {() => this.props.getUserInfo(value)}
                defaultAddStatus = {() => this.props.defaultAddStatus()}
                deleteUser = {(idUser) => this.props.deleteUser(idUser)}
                defaultEditStatus = {() => this.props.defaultEditStatus()}
            />
        );
    
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Phone Number</th>
                            <th>Permision</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;