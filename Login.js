import{ useState } from "react"
import { useEffect } from "react"
function Login()
{
    const [status,setStatus]=useState(false)
    const [id1,setId]=useState()
    const [pass1,setPass]=useState()
    const [apidata,setapidata]=useState([])
    useEffect(()=>
    {
        fetch("http://localhost:5000/").then((result)=>
        {
            result.json().then((data)=>
            {
                setapidata(data)
            })
        })
    },[])

    // function submitData()
    // {
    //     apidata.map((item)=>
    //     id1==item.uid && pass1==item.upass?setStatus(true):null
    //     )
    // }
    function submitData()
    {
        
    }


    return(
        <div id="login">
            <input type="text" placeholder="Enter id" onChange={(e)=>setId(e.target.value)}></input><br></br>
            <input type="text" placeholder="Enter pass" onChange={(e)=>setPass(e.target.value)}></input><br></br>
            <button onClick={submitData}>Submit</button>
            {/* {
                status?<h1>Login Sucessfully</h1>:<h1>Wrong Id or Password</h1>
            } */}
            <label id="lb"></label>
        </div>
    )
}
export default Login



// import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function Login() {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [apidata,setapidata]=useState([])
//     // function handleSubmit(event) {
//     //     event.preventDefault();

//         useEffect(() => {
//             fetch("http://localhost:5000/").then((result) => {
//                 result.json().then((data) => {
//                     setapidata(data)
//                 })
//         })
//         }, [])

//         function submitData() {
//             apidata.map((item) =>
//                 email == item.uid && password == item.upass ? setStatus(true) : null
//             )
//         }
    

//     return (
//         <div id="login" className='d-flex vh-100 justify-content-center align-items-center'>
//             <div className='p-3 bg-white w-25'>
//                 <form onSubmit={submitData}>
//                     <div className='mb-3'>
//                         <label htmlFor="email">Email</label>
//                         <input type="email" placeholder='Enter Email' className='from-control'
//                             onChange={e => setEmail(e.target.value)} />
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="password">Password</label>
//                         <input type="password" placeholder='Enter Password' className='from-control'
//                             onChange={e => setPassword(e.target.value)} />
//                     </div>
//                     <button className='btn btn-success'>Login</button>
//                 </form>
//             </div>
//         </div>
//     )
// }




// import React from 'react'

// const Login = () => {
//     return (
//         <>
//             {/* <!-- Button trigger modal --> */}

//             <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
//                 <span className="fa fa-sign-in me-1"></span> Login
//             </button>

//             {/* <!-- Modal --> */}

//             <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Login</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             <button className="btn btn-primary w-100 mb-4">
//                                 <span className="fa fa-google me-2"></span> Sign in With Google
//                             </button>
//                             <button className="btn btn-primary w-100 mb-4">
//                                 <span className="fa fa-facebook me-2"></span> Sign in With Facebook
//                             </button>
//                             <form>
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
//                                 <button type="submit" className="btn btn-outline-primary w-100 mt-5">Submit</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Login