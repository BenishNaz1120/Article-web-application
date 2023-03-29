import React, { useState } from "react";
import Header from "./Header";
import Subscribe from "./Subscribe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ShowArticle from "./ShowArticle";
import PostArticle from "./PostArticle";
import Login from "./Login";
import SignUp from "./SignUp";

import { useEffect } from "react";
import axios from "axios";


const Home = () => {
    const [input, setInput] = useState([]);
    console.log("input", input);
    const [userEmail, setUserEmail] = useState("");
    const [userdata, setUserdata] = useState(0);
    const emailFetch = () => {
        axios
            .get(`http://localhost:4000/user/${userEmail}`)
            .then((res) => setUserdata(res.data))

            .catch((err) => alert("cardFetch", err));
    };
    const [data, setdata] = useState([]);
    const [card, setcard] = useState("");
    const myuser = (p) => {
        setdata([...data, p]);
    };
    const empty = {
        title: "",
        name: " ",
        content: " ",
        date: "",
    };
    const api = () => {
        axios
            .get("http://localhost:4000/card")
            .then((res) => setdata(res.data));
        // .catch(err);
    };
    useEffect(() => {
        api();
    }, []);
    console.log("data", data);
    // const [changenav, setchangenav] = useState(false);



    const [editData, seteditData] = useState(0);
    // const [Edit, setEdit] = useState(false);
    ////edit
    const [handle, sethandle] = useState(empty);

    const edit = (id) => {

        fetch(`http://localhost:4000/card/${id}`)
            .then((data1) => data1.json())
            .then((res) => sethandle(res));

        setShow(true);
        seteditData(id);
        console.log(show)
    };

    const [show, setShow] = useState(false)
    return (
        <div>
            <Router>
                <Navbar show={show} />

                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <Login setUserEmail={setUserEmail} emailFetch={emailFetch} />
                        }
                    />
                    <Route
                        exact
                        path="/Signup"
                        element={<SignUp setInput={setInput} input={input} />}
                    />
                    <Route path="/Home" element={<Header />} />
                    {/* <Route path="/DashBoard" element={<DashBoard />} /> */}
                    <Route path="/PostArticle" element={<PostArticle
                        myuser={myuser} card={card} setcard={setcard} api={api} editData={editData} seteditData={seteditData} sethandle={sethandle} handle={handle} show={show} setShow={setShow} />} />
                    <Route path="/ShowArticle" element={<ShowArticle data={data} myuser={myuser} api={api} edit={edit} />} />

                </Routes>

                <Subscribe />
            </Router>

            {/* <Header /> */}
            {/* <DashBoard /> 
            <Subscribe />  */}
            {/* <AddActivity myuser={myuser} /> */}



        </div>
    );
};

export default Home;
