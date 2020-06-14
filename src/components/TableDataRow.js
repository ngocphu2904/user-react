import React, { Component } from "react";

export default class TableDataRow extends Component {
  permissionName = () => {
    if (parseInt(this.props.permission) === 1) return "Admin";
    else if (parseInt(this.props.permission) === 2) return "Moderator";
    else if (parseInt(this.props.permission) === 3) return "Normal user";
  };

  editClick = () => {
    this.props.editFunClick();
    this.props.changeEditUserStatus();
  };

  deleteButtonClick = (idUser) => {
    this.props.deleteButtonClick(idUser);
  };

  render() {
    return (
      <tr>
        <td>{this.props.stt + 1}</td>
        <td>{this.props.userName}</td>
        <td>{this.props.tel}</td>
        <td>{this.permissionName()}</td>
        <td>
          <div className="btn-group">
            <button
              className="btn btn-warning sua"
              onClick={() => this.editClick()}
            >
              <i className="fa fa-edit">
                <span className="ml-2">Sửa</span>
              </i>
            </button>
            <button
              className="btn btn-danger sua"
              onClick={(idUser) => this.deleteButtonClick(this.props.id)}
            >
              <i className="fa fa-trash">
                <span className="ml-2">Xóa</span>
              </i>
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
