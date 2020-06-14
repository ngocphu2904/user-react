import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Search from "./Search";
import Table from "./Table";
import AddUser from "./AddUser";
import DataUser from "./data.json";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: [],
      searchText: "",
      editUserStatus: false,
      userEditObject: {},
    };
  }

  doiTrangThai = () =>
    this.setState({
      hienThiForm: !this.state.hienThiForm,
    });

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl,
    });
    console.log("Du lieu nhan dc la " + dl);
  };

  getNewUserData = (name, tel, permission) => {
    const item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    const items = this.state.data;
    items.push(item);

    this.setState({
      data: items,
    });

    localStorage.setItem("userData", JSON.stringify(items));
  };

  editUser = (user) => {
    this.setState({
      userEditObject: user,
    });
  };

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
    });
  };

  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    });
    localStorage.setItem("userData", JSON.stringify(this.state.data));
  };

  deleteUser = (idUser) => {
    var tempData = this.state.data.filter((item) => item.id !== idUser);
    this.setState({
      data: tempData,
    });
    localStorage.setItem("userData", JSON.stringify(tempData));
  };

  componentWillMount() {
    if (localStorage.getItem("userData") === null) {
      localStorage.setItem("userData", JSON.stringify(DataUser));
    } else {
      var temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        data: temp,
      });
    }
  }

  render() {
    var ketQua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        //indexOf trả về số > 0 nếu tìm thấy
        ketQua.push(item);
      }
    });

    return (
      <div className="App">
        <Header />
        <div className="searchForm">
          <div className="container-fluid">
            <div className="row">
              <Search
                getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
                checkConnectProps={(dl) => this.getTextSearch(dl)}
                ketNoi={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                userEditObject={this.state.userEditObject}
              />
              <div className="col-12">
                <hr />
              </div>
              <Table
                deleteUser={(idUser) => this.deleteUser(idUser)}
                editFun={(user) => this.editUser(user)}
                dataUserProps={ketQua}
                changeEditUserStatus={() => this.changeEditUserStatus()}
              />
              <AddUser
                add={(name, tel, permission) =>
                  this.getNewUserData(name, tel, permission)
                }
                hienThiForm={this.state.hienThiForm}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
