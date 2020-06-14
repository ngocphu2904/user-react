import React, { Component } from "react";

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.userEditObject.id,
      name: this.props.userEditObject.name,
      tel: this.props.userEditObject.tel,
      permission: this.props.userEditObject.permission,
    };
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  saveButton = () => {
    var info = {};
    info.id = this.state.id;
    info.name = this.state.name;
    info.tel = this.state.tel;
    info.permission = this.state.permission;

    this.props.getUserEditInfo(info);
    this.props.changeEditUserStatus(); // an form
  };

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <form method="post">
            <div className="card font-weight-bold mb-2">
              <div className="card-header text-center text-black">
                Sửa thông tin User
              </div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input
                    defaultValue={this.props.userEditObject.name}
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Nhập tên user"
                    onChange={(event) => this.isChange(event)}
                  />
                </div>
                <div className="form-group">
                  <input
                    defaultValue={this.props.userEditObject.tel}
                    name="tel"
                    type="text"
                    className="form-control"
                    placeholder="Nhập số điện thoại"
                    onChange={(event) => this.isChange(event)}
                  />
                </div>
                <div className="form-group">
                  <select
                    defaultValue={this.props.userEditObject.permission}
                    className="custom-select"
                    name="permission"
                    required
                    onChange={(event) => this.isChange(event)}
                  >
                    <option>Chọn quyền</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Moderator</option>
                    <option value={3}>Normal</option>
                  </select>
                </div>
                <div className="form-group text-center">
                  <input
                    value="Lưu"
                    type="button"
                    className="btn btn-danger"
                    style={{ width: "100%" }}
                    onClick={() => this.saveButton()}
                  ></input>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
