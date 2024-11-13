import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const Tabela = ({ members, deleteMember, editMember }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Trainer</th>
          <th>Training Plan</th>
          <th>Created At</th>
          <th>Action / Edit</th>
        </tr>
      </thead>

      <tbody>
        {members.map((member, index) => {
          const {
            email,
            phoneNumber,
            id,
            firstName,
            lastName,
            createdAt,
            trainingPlan,
            trainer,
          } = member;
          return (
            <tr key={id}>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>{phoneNumber}</td>
              <td>{trainer}</td>
              <td>{trainingPlan}</td>
              <td>{createdAt}</td>
              <td>
                <button className="btn-delete">
                  <MdDelete
                    onClick={() => {
                      deleteMember(id);
                    }}
                  />{" "}
                  <span className="px-2">|</span>
                  <FaEdit
                    onClick={() => {
                      editMember(id);
                    }}
                  />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Tabela;
