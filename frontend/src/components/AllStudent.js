import React, { useState, useEffect } from "react";
import axois from "axois"

function AllStudent() {

    const [Students, setStudents] = useState([]);
    useEffect(() => {
        function getStudent() {
            axois.get("http://localhost:8070/srudent/").then(() => {
                //console.log(res,data);
                setStudents(res,data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getStudent();
    }, [])

    return (
        <div className="container">
            <h1>All Students</h1>
        </div>
    )
}

export default AllStudent;