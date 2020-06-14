import React, { Component } from "react";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      tel: "",
      permission: "",
    };
  }

  kiemTraTrangThai = () => {
    if (this.props.hienThiForm === true) {
      return (
        <div className="col">
          <form method="post">
            <div className="card border-primary">
              <div className="card-header text-center font-weight-bold">
                Thông tin
              </div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input
                    onChange={(event) => {
                      this.isChange(event);
                    }}
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Nhập tên user"
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={(event) => {
                      this.isChange(event);
                    }}
                    name="tel"
                    type="text"
                    className="form-control"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
                <div className="form-group">
                  <select
                    className="custom-select"
                    name="permission"
                    required
                    onChange={(event) => {
                      this.isChange(event);
                    }}
                  >
                    <option>Chọn quyền</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Moderator</option>
                    <option value={3}>Normal</option>
                  </select>
                </div>
                <div className="form-group text-center">
                  <input
                    value="Thêm"
                    type="reset"
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                    onClick={() =>
                      this.props.add(
                        this.state.name,
                        this.state.tel,
                        this.state.permission
                      )
                    }
                  ></input>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    }
  };

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
    //package to item
    const item = {};
    item.id = this.state.id;
    item.tel = this.state.tel;
    item.permission = this.state.permission;
    item.name = this.state.name;
  };

  render() {
    return <div className="card text-left">{this.kiemTraTrangThai()}</div>;
  }
}
