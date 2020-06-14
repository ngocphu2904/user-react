import React, { Component } from "react";
import TableDataRow from "./TableDataRow";

export default class Table extends Component {
  deleteButtonClick = (idUser) => {
    this.props.deleteUser(idUser);
  };

  mappingDataUser = () =>
    this.props.dataUserProps.map((value, key) => (
      <TableDataRow
        deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)}
        changeEditUserStatus={() => this.props.changeEditUserStatus()}
        editFunClick={(user) => this.props.editFun(value)} //value chinh la user
        key={key}
        stt={key}
        userName={value.name}
        id={value.id}
        tel={value.tel}
        permission={value.permission}
      />
    ));

  render() {
    return (
      <div className="col">
        <table className="table table-striped table-inverse table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>{this.mappingDataUser()}</tbody>
        </table>
      </div>
    );
  }
}
