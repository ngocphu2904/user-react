import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">
            Project quản lý thành viên bằng React Js
          </h1>
          <p>với dữ liệu Json</p>
          <hr className="my-2" />
        </div>
      </div>
    );
  }
}
