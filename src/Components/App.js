import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import AddUser from './AddUser';
import DataUser from './Data.json'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      dataUser: [],
      searchText: "",
      editUser: false,
      editUserObj: {}
    }
  }

  
  // componentWillMount() {
  //   localStorage.setItem("dataUserStorage", JSON.stringify(DataUser));
  //   this.setState({
  //     dataUser: JSON.parse(localStorage.getItem("dataUserStorage"))
  //   });
  // }
  
  
  componentWillMount() {
    if(localStorage.getItem('dataUserStorage') === null)
      {
        localStorage.setItem('dataUserStorage', JSON.stringify(DataUser));
        this.setState({
          dataUser: JSON.parse(localStorage.getItem('dataUserStorage'))
      });
      }
    else
      this.setState({
        dataUser: JSON.parse(localStorage.getItem('dataUserStorage'))
      });
  }
  
    
  changeStatus = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  changeEditStatus = () => {
    this.setState({
      editUser: !this.state.editUser
    });
  }

  defaultAddStatus = () => {
    this.setState({
      showForm: false
    });
  }

  defaultEditStatus = () => {
    this.setState({
      editUser: false
    });
  }
  

  getTextSearch = (data) => {
    this.setState({
      searchText: data
    });
  }

  getNewUserData = (name, tel, permission) => {
    let item = {};
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    let items = this.state.dataUser;
    items.push(item);
    this.setState({
      dataUser: items
    });
    localStorage.setItem("dataUserStorage", JSON.stringify(items));
  }

  getUserInfo = (item) => {
    this.setState({
      editUserObj: item
    });
  }

  getUserInfoEdit = (user) => {
    this.state.dataUser.forEach(e => {
      if(e.id === user.id) {
        e.name = user.name;
        e.tel = user.tel;
        e.permission = user.permission;
      }
    });
    localStorage.setItem("dataUserStorage", JSON.stringify(this.state.dataUser));
  }

  deleteUser = (idUser) => {
    var dataUserUpdate = this.state.dataUser.filter(item => item.id !== idUser);
    this.setState({
      dataUser: dataUserUpdate
    });
    localStorage.setItem("dataUserStorage", JSON.stringify(dataUserUpdate));
  }

  render() {
    let resultArray = [];
    this.state.dataUser.forEach(element => {
      if(element.name.indexOf(this.state.searchText) !== -1) {
        resultArray.push(element);
      }
    });
    return (
      <div>
      <Header />
      <Search 
        changeStatus={() => this.changeStatus()}
        showForm={this.state.showForm}
        getTextSearch={(data) => this.getTextSearch(data)} 
        defaultEditStatus = {() =>this.defaultEditStatus()}
        />

      <div className="tableData">
        <div className="container">
          <div className="row">
            <Table
            dataUser = {resultArray}
            changeEditStatus={() => this.changeEditStatus()}
            editUser = {this.state.editUser}
            getUserInfo = {(item) => this.getUserInfo(item)}
            defaultAddStatus = {() => this.defaultAddStatus()}
            deleteUser = {(idUser) => this.deleteUser(idUser)}
            defaultEditStatus = {() => this.defaultEditStatus()}
            />
            <AddUser
            showForm = {this.state.showForm} 
            changeStatus = {() => this.changeStatus()}
            getNewUserData = {(name, tel, permission) => this.getNewUserData(name, tel, permission)}
            editUser = {this.state.editUser}
            changeEditStatus = {() => this.changeEditStatus()}
            editUserObj = {this.state.editUserObj}
            getUserInfoEdit = {(user) => this.getUserInfoEdit(user)}
            
            />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
