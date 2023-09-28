const express=require("express")
const app=express()
const connectdb=require("./reg_mongodb")
app.get("/",async (req,resp)=>
{
    resp.header("Access-Control-Allow-Origin", "*")
    let db=await connectdb()
    let data=await db.find().toArray()
    console.log(data)
    resp.send(data)
})
app.listen(5000)


// import React from 'react'
// import { useEffect,useState} from "react"
// import Table from "react-bootstrap/esm/Table"


// // const Register = () => {
// //     return (
// //         <div>
// //             {/* <!-- Button trigger modal --> */}
// //             <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
// //                 <span className="fa fa-user-plus me-1"></span> Register
// //             </button>


//             {/* <!-- Modal --> */}
//             {/* <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Login</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             <button className="btn btn-primary w-100 mb-4">
//                                 <span className="fa fa-google me-2"></span> Sign up With Google
//                             </button>
//                             <button className="btn btn-primary w-100 mb-4">
//                                 <span className="fa fa-facebook me-2"></span> Sign up With Facebook
//                             </button>
//                             <form>
//                                 <div className="mb-3">
//                                     <label htmlFor="exampleInput" className="form-label">Username</label>
//                                     <input type="text" className="form-control" id="exampleInput" />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//                                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//                                     <input type="password" className="form-control" id="exampleInputPassword1" />
//                                 </div>
//                                 <div className="mb-3 form-check">
//                                     <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//                                     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//                                 </div>
//                                 <button type="submit" className="btn btn-outline-primary w-100 mt-5">Register</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>*/}
// //         </div> 
// //     )
// // }


// function Register()
// {
//     const [apidata,setapidata]=useState([])
//     useEffect(()=>
//     {
//         fetch("").then((result)=>
//         {
//             result.json().then((data)=>
//             {
//                 setapidata(data)
//             })
//         })
//     },[])
//     return(
//         <div>
//             <Table striped bordered hover variant="dark">
//                 <tbody>
//                     <tr>
//                         <td>Id</td>
//                         <td>Name</td>
//                         <td>Class</td>
                        
//                     </tr>
//                     {
//                         apidata.map((item)=>
//                     <tr>
//                         <td>{item.id}</td>
//                         <td>{item.Name}</td>
//                         <td>{item.Class}</td>
                      
//                     </tr>
//                         )
//                     }
                    
//                 </tbody>
//             </Table>
//         </div>
//     )
// }
//  export default Register;

// // export default Register

// // const express= require("express")
// // const cors= require("cors")
// // const app=express()
// // const connectdb=require("./reg_mongodb")
// // app.use(express.json())

// // app.use(cors());
// // app.post("/",async (req,resp)=>
// // {
// //     resp.header("Access-Control-Allow-Origin","*")
// //     let db=await connectdb()
// //     let data=await db.insertOne(req.body)
// //     console.log(data)
// //     resp.send(data)
// // })
// // app.listen(4000)

// // const { MongoClient } = require("mongodb")
// // const url = "mongodb://0.0.0.0:27017"
// // const database = "collage"
// // const client = new MongoClient(url)

// // async function connectdb() {
// //     let result = await client.connect()
// //     let db = result.db(database)
// //     return db.collection("registration")
// // }
// // module.exports=connectdb