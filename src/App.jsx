import { useState } from 'react'
import './App.css'
import { Home } from './Components/Home/Home'
import { Content } from './Components/Content/Content'
import Abou, { AboutA } from './Components/About/About'

function App() {
  let [age, setAge] = useState(22);
  let [product, setProduct] = useState({id: 1, price: 30, name: "Toshiba"});
  let [products, setProducts] = useState([
    {id: 1, price: 10, name: "Toshiba"},
    {id: 2, price: 20, name: "Sony"},
    {id: 3, price: 30, name: "LG"},
  ]);
  let [userName, setUserName] = useState("Nour");
  
  const changeYears = () => {
    setAge(25)
  }

  const changeProductName = () => {
    setProduct({
      id: 1, //Can Delete
      price: 30, //Can Delete
      name: "Sony"
    })
  }

  function Delete(id) {
    let newProducts = structuredClone(products)
    newProducts = newProducts.filter(ele => ele.id != id)
    setProducts(newProducts)
  }

  function Update(index) {
    let newProducts = structuredClone(products);
    newProducts[index].price++;
    setProducts(newProducts);
  }

  return (
    <>
      <h1 className='bg-red-900'>{age} Year</h1>
      <button onClick={changeYears}>Change Years</button> {/*Or .. */}
      <button onClick={() => setAge(30)}>Change Years</button>

      <h2 className='bg-red-300'>{product.name}</h2>
      <button onClick={changeProductName}>Change Product Name</button> {/*Or .. */}
      <button onClick={() => setProduct({name: "LG"})}>Change Product Name</button> 
      <Home />
      <Content userName={userName} />
      <Abou products={products} />

      {/* <AboutA products={products[0]} />
      <AboutA products={products[1]} />
      <AboutA products={products[2]} /> */}
      {/* OR */}
      {products.map((products, index) => <AboutA products={products} Delete={Delete} Update={Update} index={index} /> )}
    </>
  )
}

export default App