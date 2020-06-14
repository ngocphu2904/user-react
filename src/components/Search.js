import React, { Component } from "react";
import EditUser from "./EditUser";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: "",
      userObj: {},
    };
  }

  getUserEditInfo = (info) => {
    this.setState({
      userObj: info,
    });
    this.props.getUserEditInfoApp(info);
  };

  isShowEditForm = () => {
    if (this.props.editUserStatus === true) {
      return (
        <EditUser
          getUserEditInfo={(info) => this.getUserEditInfo(info)}
          changeEditUserStatus={() => this.props.changeEditUserStatus()}
          userEditObject={this.props.userEditObject}
        />
      );
    } else {
    }
  };

  hienThiNut = () => {
    if (this.props.hienThiForm === true) {
      return (
        <button
          className="btn btn-block btn-outline-secondary"
          onClick={() => this.props.ketNoi()}
        >
          Đóng lại
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-block btn-outline-info"
          onClick={() => this.props.ketNoi()}
        >
          Thêm mới
        </button>
      );
    }
  };

  isChange = (event) => {
    this.setState({
      tempValue: event.target.value,
    });
    //this.props.checkConnectProps(this.state.tempValue); tìm ngay lập tức (nhưng k xịn lắm ^^)
  };

  render() {
    return (
      <div className="col-12">
        {this.isShowEditForm()}
        <div className="form-group">
          <div className="btn-group w-100">
            <input
              onChange={(event) => this.isChange(event)}
              type="text"
              className="form-control"
              placeholder="Nhập tên cần tìm"
            />
            <button
              className="btn btn-primary"
              onClick={() => this.props.checkConnectProps(this.state.tempValue)}
            >
              <i className="fa fa-search">
                <span className="ml-2">Tìm</span>
              </i>
            </button>
          </div>
          <div className="btn-group1 mt-2">{this.hienThiNut()}</div>
        </div>
      </div>
    );
  }
}
