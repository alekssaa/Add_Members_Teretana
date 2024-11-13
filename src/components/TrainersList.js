import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const TrainersList = ({ trainers, deleteTrainer, editTrainers }) => {
  console.log(editTrainers);

  return (
    <>
      <h2>Trainers</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Firist Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Delete | Edit</th>
          </tr>
        </thead>

        <tbody>
          {trainers.map((trainer) => {
            const {
              email,
              phoneNumber,
              id,
              firstName,
              lastName,
              createdAt,
              option,
            } = trainer;
            return (
              <tr key={id}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{phoneNumber}</td>
                <td>
                  <button className="btn-delete">
                    <MdDelete
                      onClick={() => {
                        deleteTrainer(id);
                      }}
                    />{" "}
                    <span className="px-2">|</span>
                    <FaEdit
                      onClick={() => {
                        editTrainers(id);
                      }}
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TrainersList;
