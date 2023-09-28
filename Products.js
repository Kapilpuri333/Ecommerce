import { useEffect, useState } from "react"





function Products() {
    const [data, setData] = useState([])
    const [apidata, setapidata] = useState([])
    const [filter,setFilter]=useState(data)
    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((result) => {
            result.json().then((data) => {
                setapidata(data)
            })
        })
    }, [])
    const filterProduct = (cat) => {
        const updatedList = data.filter((x)=>x.category === cat)
        setFilter(updatedList)
      }
    
    return (
        <div>
            <div className="container my-4 py-4">
                <div className="row justify-content-center">
                    <div className="col-12 mb-4">
                        <h1 className="display-6 fw-bolder text-center" style={{marginTop: 100}}>Latest Products</h1>
                        <hr></hr>
                        <button className="btn btn-outline-dark me-2"style={{marginLeft:"247px"}} onClick={()=>setFilter(data)}>all</button>
                        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewellery</button>
                        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronic</button>
                        <br></br>
                        <br></br>
                        {
                            apidata.map((item) =>
                            
                                <div id="products" className="col-md-3 mb-4 justify-content-center d-inline-flex">
                                    <div class="card h-100 text-center p-4 width:18rem;" key={item.id}>
                                        <img class="card-img-top" src={item.image} alt={item.title} height="250px" />
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{item.title.substring(0, 12)}</h5>
                                            <p class="card-text lead fw-bold">${item.price}</p>
                                            <a href="#" class="btn btn-outline-dark">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products


  
  