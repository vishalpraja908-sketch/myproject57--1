import React, { useState } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import Select from './Select';
import Button from './Button';
import ProductList from './ProductList';

function App() {
  const [query, setQuery] = useState("");
const [sort, setSort] = useState("default")
  const allData = [
    {
      imgUrl: "https://codeyogi.io/coffee-mug.jpeg",
      title: "mugs",
    category:"Black Coffee Mug",
      rating: 5,
      price: 15,
    },
    {
      imgUrl: "https://i.pinimg.com/736x/1f/c7/c3/1fc7c3d6281da18d69e0ea0b55a1e7b5.jpg",
      title: " Bottle",
      category: " Water Bottle",
      rating: 4,
      price: 10,
    },
    {
      imgUrl: "https://i.pinimg.com/1200x/eb/79/ca/eb79cae9ab6499295f78bcbec690bd0f.jpg",
      title: "Clothing",
      category: "White T-Shirt",
      rating: 3,
      price: 20,
    },
    {
      imgUrl: "https://i.pinimg.com/736x/b3/96/59/b39659b05d8e42680839cd844b550a59.jpg",
      title:  "Electronics",
      category:"Bluetooth Speaker",
      rating: 5,
      price: 45,
    },
    {
      imgUrl: "https://i.pinimg.com/736x/ef/bb/17/efbb17fc0cfc2be91f2c913c66676a5f.jpg",
      title: "Electronics",
      category:"Smart Watch",
      rating: 4,
      price: 60,
    },
    {
      imgUrl: "https://i.pinimg.com/1200x/ad/d2/66/add2668ff747c3818cc316bcdaa359c6.jpg",
      title: "footwear",
      category: "Sports Shoes",
      rating: 5,
      price: 75,
    },
    {
      imgUrl: "https://i.pinimg.com/1200x/3d/9f/e9/3d9fe91d53cda77bfe954daca707638d.jpg",
      title:"Electronics",
      category: "Wireless Headphone",
      rating: 5,
      price: 55,
    },
    {
      imgUrl: "https://i.pinimg.com/736x/60/1b/4e/601b4ea1d46842e7fcd0212953ec7003.jpg",
      title: "Accessories",
      category:"Travel Backpack",
      rating: 4,
      price: 30,
    },
    {
      imgUrl: "https://i.pinimg.com/736x/15/d5/d7/15d5d7ef83afe8e36b1081fcd070f9ab.jpg",
      title: "Home",
      category: "LED Desk Lamp",
      rating: 4,
      price: 25,
    },
  ];

  
  const data = allData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
if(sort=="price") {
  data.sort(function (x, y) {
    return x.price-y.price;
  });
}
  else if(sort=="title") {
    data.sort(function (x, y) {
      return x.title.toLowerCase() > y.title.toLowerCase() ? 1 : -1;
    });

  }



  function handleQueryChange(e) {
    setQuery(e.target.value);
  }
   function handleSortChange(e) {
    setSort(e.target.value);
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />

      <div className="mt-10 ml-10">
        <input
          value={query}
          onChange={handleQueryChange}
          placeholder="Search"
          className="border border-gray-700 rounded-md mb-4 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
      </div>

      <div className="px-4 py-8">
        <Select sort={sort} handleSortChange={handleSortChange} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 mt-10">
        <ProductList products={data} />
      </div>

      <div className="flex ml-10"> 
        <Button></Button>
      </div>

      <div className="flex-grow" />
      <Footer />
    </div>
  );
}

export default App;
