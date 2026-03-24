import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <p>Price: {p.price}</p>
        </div>
      ))}

    </div>
  );
}

export default Dashboard;