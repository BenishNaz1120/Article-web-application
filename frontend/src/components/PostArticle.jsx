import React from "react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const PostArticle = (props) => {
  const navigate = useNavigate();

  //for handle input feilds
  const handleinput = (e) => {
    const { name, value } = e.target;
    props.sethandle({ ...props.handle, [name]: value });
  };
  console.log("update id", props.editData)
  const AddCard = () => {
    const obj = {
      title: props.handle.title,
      name: props.handle.name, content: props.handle.content, date: props.handle.date
    }

    if (props.show) {
      axios.put(`http://localhost:4000/card/${props.editData}`, {
        title: props.handle.title,
        name: props.handle.name, content: props.handle.content, date: props.handle.date
      })
        .then((res) => console.log("ress", res))
        .catch((err) => alert("CardPost", err));

      props.api();
      props.setShow(false);
    } else {
      axios
        .post("http://localhost:4000/card", {
          title: props.handle.title,
          name: props.handle.name, content: props.handle.content, date: props.handle.date
        })
        .then((res) => {
          props.data.push(obj);
          props.setdata(props.data);
          console.log("ress", res)
        })
        .catch((err) => alert("CardPost", err));
    }
  }

  // const AddCard = () => {
  //   console.log("hello sir")

  //   axios
  //     .post("http://localhost:4000/card", {
  //       name: handle.name, description: handle.discription, option: handle.option, duration: handle.duration, date: handle.date
  //     })
  //     .then((res) => console.log("ress", res))
  //     .catch((err) => alert("CardPost", err));

  // }

  const submitForm = async (e) => {
    e.preventDefault();
    props.myuser(props.handle);
    navigate("/ShowArticle");
    AddCard()
    props.sethandle("")
  };
  console.log(props.handle);
  //make variable for options

  // const option = [
  //   { value: "run", label: "run" },
  //   { value: "walk", label: "walk" },
  //   { value: "swim", label: "swim" },
  //   { value: "hike", label: "hike" },
  //   { value: "cycle ride", label: "cycle ride" },
  // ];

  return (
    <div id="add" className="container mt-4">
      <form onSubmit={submitForm}>
        <fieldset id="f" style={{ color: "white" }} >
          {/* <legend>User Activity</legend> */}

          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={handleinput}
              value={props.handle.title}
              placeholder="Enter title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Author:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleinput}
              value={props.handle.name}
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">content</label>

            <textarea

              type="text"
              className="form-control"
              name="content"
              onChange={handleinput}
              value={props.handle.content}
              placeholder="Enter your content"
              rows={10}
            ></textarea>
          </div>
          {/* <div className="form-group">
            <label>Activity:</label>
            <select
              htmlFor="activity"
              name="option"
              onChange={handleinput}
              value={props.handle.option}
            >
              {option.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div> */}

          {/* <div className="form-group">
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              className="form-control"
              name="duration"
              onChange={handleinput}
              value={props.handle.duration}
              placeholder="Enter Duration"

            ></input>
          </div> */}
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              className="form-control"
              name="date"
              onChange={handleinput}
              value={props.handle.date}
              placeholder="dd/mm/yy"
            />
          </div>

          {/* <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>

        </fieldset>
      </form>

    </div >
  );
};

export default PostArticle;
