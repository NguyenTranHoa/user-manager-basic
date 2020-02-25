import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container text-center">
                        <h1 className="display-3">Project quản lý thành viên</h1>
                        <p className="lead">Bằng React JS với dữ liệu JS</p>
                        <hr className="my-2" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;