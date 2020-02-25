import React, { Component } from 'react';


class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: "",
            idE: "",
            telE: "",
            permissionE: ""
        }
    }


    isChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    saveUserInfoEdit = () => {
        let user = {};
        user.id = this.props.editUserObj.id;
        user.name = this.state.nameE;
        user.tel = this.state.telE;
        user.permission = this.state.permissionE;
        
        this.props.getUserInfoEdit(user);
        
    }

    

    showForm = () => {
        if (this.props.showForm) {
            return (
                <div className="card border-info mt-3">
                    <form>
                        <div className="card-body">
                            <h5 className="card-title">Add User</h5>
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" aria-describedby="helpId" placeholder="Full Name: "
                                defaultValue="" style={{ fontSize: '15px' }} onChange={(event) => this.isChange(event)} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="tel" className="form-control" aria-describedby="helpId" placeholder="Phone Number: "
                                 style={{ fontSize: '15px' }} onChange={(event) => this.isChange(event)} />
                            </div>
                            <div className="form-group">
                                <select className="form-control" name="permission" onChange={(event) => this.isChange(event)}>
                                    <option value>Choose positon</option>
                                    <option value={"1"}>Admin</option>
                                    <option value={"2"}>Moderator</option>
                                    <option value={"3"}>Editor</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-block btn-info" value="Add"
                                 onClick={() => {this.props.getNewUserData(this.state.name, this.state.tel, this.state.permission); 
                                 this.props.changeStatus();}} />
                                 <input type="submit" className="btn btn-block btn-secondary" value="Cancel"
                                 onClick={() => {this.props.changeStatus();}} />
                            </div>
                        </div>
                    </form>
                </div>
            )
        }

        if (this.props.editUser) {
            return (
                <div className="card border-warning mt-3">
                    <form>
                        <div className="card-body">
                            <h5 className="card-title">Edit User</h5>
                            <div className="form-group">
                                <input type="text" name="nameE" className="form-control" aria-describedby="helpId" placeholder="Full Name: " style={{ fontSize: '15px' }} onChange={(event) => this.isChange(event)} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="telE" className="form-control" aria-describedby="helpId" placeholder="Phone Number: " style={{ fontSize: '15px' }} onChange={(event) => this.isChange(event)} />
                            </div>
                            <div className="form-group">
                                <select className="form-control" name="permissionE" 
                                 onChange={(event) => this.isChange(event)}>
                                    <option value>Choose positon</option>
                                    <option value={"1"}>Admin</option>
                                    <option value={"2"}>Moderator</option>
                                    <option value={"3"}>Editor</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-block btn-warning" value="Save"
                                 onClick={() => { this.props.changeEditStatus(); this.saveUserInfoEdit()}} />
                                 <input type="reset" className="btn btn-block btn-secondary" value="Cancel"
                                 onClick={() => {this.props.changeEditStatus();}} />
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }


    render() {
        return (
            <div>
                {this.showForm()}
            </div>

        );
    }
}

export default AddUser;