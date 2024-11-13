import React from "react";
import { useState, useEffect, useId } from "react";
import Tabela from "./Tabela";
import Alert from "./Alert.js";
import TrainersList from "./TrainersList.js";
const AddMember = () => {
  const getMembers = () => {
    if (localStorage.getItem("members")) {
      return JSON.parse(localStorage.getItem("members"));
    } else return [];
  };
  const getTrainers = () => {
    if (localStorage.getItem("trainers")) {
      return JSON.parse(localStorage.getItem("trainers"));
    } else return [];
  };
  const getDay = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "/" + mm + "/" + yyyy;
    return formattedToday;
  };
  const [alertInfo, setAlertInfo] = useState(false);
  const [alertDelete, setDelete] = useState(false);
  const [alertAdd, setAlertAdd] = useState(false);
  const [members, setMembers] = useState(getMembers());
  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    trainer: "",
    trainingPlan: "",
    createdAt: getDay(),
    id: "",
  });
  const [trainer, setTrainer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    reatedAt: getDay(),
    id: "",
  });
  const [trainers, setTrainers] = useState(getTrainers());
  const handleSubmit = (e) => {
    e.preventDefault();
    if (member.firstName && member.lastName && member.phoneNumber) {
      setMembers((prevState) => {
        return [...prevState, member];
      });
      setAlertAdd(true);
    } else {
      setAlertInfo(true);
    }
    setMember({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    });
    setEditing(false);
  };
  const [editing, setEditing] = useState(false);
  const [editingT, setEditingT] = useState(false);
  const editMember = (id) => {
    const editing = members.find((item) => {
      return item.id === id;
    });
    const newArry = members.filter((member) => {
      return member.id !== id;
    });
    setMembers(newArry);
    setMember({
      firstName: editing.firstName,
      lastName: editing.lastName,
      email: editing.email,
      phoneNumber: editing.phoneNumber,
      trainer: editing.trainer,
      trainingPlan: editing.trainingPlan,
      createdAt: getDay(),
    });
    setEditing(true);
  };
  const editTrainers = (id) => {
    const editing = trainers.find((item) => {
      return item.id === id;
    });
    const newArry = trainers.filter((trainer) => {
      return trainer.id !== id;
    });
    setTrainers(newArry);
    setTrainer({
      firstName: editing.firstName,
      lastName: editing.lastName,
      email: editing.email,
      phoneNumber: editing.phoneNumber,
      createdAt: getDay(),
    });
    setEditingT(true);
  };
  const deleteMember = (id) => {
    setMembers(
      members.filter((member) => {
        return member.id !== id;
      })
    );
    setDelete(true);
  };
  const deleteTrainer = (id) => {
    setTrainers(
      trainers.filter((trainer) => {
        return trainer.id !== id;
      })
    );
    setDelete(true);
  };
  const handleTrainerSubmit = (e) => {
    e.preventDefault();
    if (trainer.firstName && trainer.lastName && trainer.phoneNumber) {
      setTrainers((prevState) => {
        return [...prevState, trainer];
      });
      setAlertAdd(true);
    } else {
      setAlertInfo(true);
    }
    setTrainer({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    });
    setEditingT(false);
  };
  setTimeout(() => {
    setAlertAdd(false);
    setDelete(false);
    setAlertInfo(false);
  }, 5500);
  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  }, [members]);
  useEffect(() => {
    localStorage.setItem("trainers", JSON.stringify(trainers));
  }, [trainers]);
  const closeAlert = () => {
    setAlertInfo(false);
  };
  return (
    <div className="container">
      <Tabela
        members={members}
        deleteMember={deleteMember}
        editMember={editMember}
      />
      <div className="row md-5">
        <div className="col-md-6">
          <h2>Register Member</h2>
          {alertInfo || alertDelete || alertAdd || editing ? (
            <Alert
              closeAlert={closeAlert}
              alertAdd={alertAdd}
              alertDelete={alertDelete}
              alertInfo={alertInfo}
              editing={editing}
            />
          ) : (
            ""
          )}
          <form onSubmit={handleSubmit}>
            <label htmlFor="name"> First Name:</label>{" "}
            <input
              value={member.firstName}
              type="text"
              id="firstName"
              className="form-control"
              onChange={(e) => {
                setMember((prevState) => {
                  return { ...prevState, firstName: e.target.value };
                });
              }}
            />
            <label htmlFor="name"> Last Name:</label>{" "}
            <input
              value={member.lastName}
              type="text"
              className="form-control"
              onChange={(e) => {
                setMember((prevState) => {
                  return { ...prevState, lastName: e.target.value };
                });
              }}
            />
            <label htmlFor="name"> email:</label>{" "}
            <input
              value={member.email}
              type="email"
              className="form-control"
              onChange={(e) => {
                setMember((prevState) => {
                  return { ...prevState, email: e.target.value };
                });
              }}
            />
            <label htmlFor="name"> Phone Number:</label>{" "}
            <input
              value={member.phoneNumber}
              type="text"
              className="form-control"
              onChange={(e) => {
                setMember((prevState) => {
                  return { ...prevState, phoneNumber: e.target.value };
                });
              }}
            />
            <label htmlFor="opcija">Training Plan:</label>
            <select
              className="form-control"
              onChange={(e) => {
                setMember((prevState) => {
                  return { ...prevState, trainingPlan: e.target.value };
                });
              }}
              defaultValue="trainingplan"
            >
              <option disabled value={"trainingplan"}>
                {" "}
                Training Plan
              </option>

              <option>12 Session</option>
              <option>16 Session</option>
              <option>25 Session</option>
            </select>
            <label htmlFor="opcija">Select trainer:</label>
            <select
              className="form-control"
              onChange={(e) => {
                setMember((prevState) => {
                  return { ...prevState, trainer: e.target.value };
                });
              }}
              defaultValue="SelectTrainer"
            >
              <option disabled value={"SelectTrainer"}>
                {" "}
                Select Trainer
              </option>
              {trainers.map((trainer, i) => (
                <option key={i}>
                  {" "}
                  {trainer.firstName}
                  {trainer.lastName}
                </option>
              ))}
            </select>
            <input
              className="btn btn-primary mt-3"
              type="submit"
              value={editing ? "Edit" : "Register member"}
              onClick={(e) => {
                setMember((prevState) => {
                  return { ...prevState, id: new Date().toString() };
                });
              }}
            ></input>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Register Trainer</h2>
          <label htmlFor="name"> First Name:</label>{" "}
          <form onSubmit={handleTrainerSubmit}>
            <input
              value={trainer.firstName}
              type="text"
              id="firistName"
              className="form-control"
              onChange={(e) => {
                setTrainer((prevState) => {
                  return { ...prevState, firstName: e.target.value };
                });
              }}
            />
            <label htmlFor="name"> Last Name:</label>{" "}
            <input
              value={trainer.lastName}
              type="text"
              className="form-control"
              onChange={(e) => {
                setTrainer((prevState) => {
                  return { ...prevState, lastName: e.target.value };
                });
              }}
            />
            <label htmlFor="name"> email:</label>{" "}
            <input
              value={trainer.email}
              type="email"
              className="form-control"
              onChange={(e) => {
                setTrainer((prevState) => {
                  return { ...prevState, email: e.target.value };
                });
              }}
            />
            <label htmlFor="name"> Phone Number:</label>{" "}
            <input
              value={trainer.phoneNumber}
              type="text"
              className="form-control"
              onChange={(e) => {
                setTrainer((prevState) => {
                  return { ...prevState, phoneNumber: e.target.value };
                });
              }}
            />
            <input
              type="submit"
              className="btn btn-primary mt-3"
              value={editingT ? "Edit" : "Register trainer"}
              onClick={(e) => {
                setTrainer((prevState) => {
                  return { ...prevState, id: new Date().toString() };
                });
              }}
            />
          </form>
          <TrainersList
            trainers={trainers}
            deleteTrainer={deleteTrainer}
            editTrainers={editTrainers}
          />
        </div>
      </div>
    </div>
  );
};

export default AddMember;
