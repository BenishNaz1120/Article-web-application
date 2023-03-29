import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const ShowArticle = (props) => {

  const navigate = useNavigate();

  return (
    <div className="container col-12" id="div">
      <h4 id="my">Articles</h4>
      <div className="row">
        {props.data.map((d) => (
          <div
            id="maincard"
            // className="card mt-4 ml-4  border-info"
            style={{ width: "18rem" }}
          >
            <h5 class="card-header card-title text-center">{d.title}</h5>
            <div className="card-body ">
              {/* <h5 className="  card-header  card-title">{d.name}</h5> */}
              <p className="card-description">Author: {d.name}</p>
              {/* <p className="card-option">Activity: {d.option}</p> */}
              <p className="card-duration">Content: {d.content}</p>
              <p className="card-date">Date: {d.date}</p>
              <button className="btn btn-primary mr-2" onClick={() => {
                props.edit(d._id);
                navigate("/postArticle");
              }}>Edit</button>
              <button className="btn btn-danger" onClick={() => {
                axios
                  .delete(`http://localhost:4000/card/${d._id}`)
                  .then(() => console.log("data deleted"))
                  .catch((err) => alert("carddelete", err));
              }}>
                Delete
              </button>
            </div>

          </div>

        ))}
      </div>
    </div>
  )


};

export default ShowArticle;
