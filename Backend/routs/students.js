//Backend routs
const router = require("express").Router();
const { response } = require("express");
const { update } = require("../models/student");
let Student = require("../models/student");



//Create(Data Insert)
router.route("/add").post((req,res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender =  req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    })

    newStudent.save().then(() => {
        //execute the body
        res.json("Student Added");
    }).catch((err) => {
        console.log(err);
    })
})




//Read(Data Retrieve)
router.route("/").get((req,res) => {
    Student.find().then((students) => {
        res.json(students)
    }).catch((err) => {
        console.log(err);
    })
})




//Update(Data update)
router.route("/update/:id").put(async(req,res) => {
    let userId = req.params.id;
    //destructure
    const {name, age, gender} = req.body;

    const updateStudent = {
        name,
        age,
        gender
    }

    /*const update = await Student.findByIdAndUpdate(userId, updateStudent);

    res.status(200).send({
        status: "User updated", user: update
    })*/

    const update = await Student.findByIdAndUpdate(userId, updateStudent).then(() => {
        res.status(200).send({status: "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})





//Delete(Data delete)
router.route("/delete/:id").delete(async(req,res) => {
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "User Delete"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", erroe: err.message})
    })
})





//Get one sudent details
router.route("/get/:id").get(async(req,res) => {
    let userID = req.params.id;
    //await Student.findOne()
    const user = await Student.findById(userId).then((student) => {
        res.status(200).send({status: "User fetch", student});
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

module.exports = router;