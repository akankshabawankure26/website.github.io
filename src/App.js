import './App.css';
import Navbar from './Component/Navbar';
import ProductDisplay from './Component/ProductDisplay';
import { Container, Row} from 'react-bootstrap';
import { useState } from 'react';


function App() {
  let products = [
    {
        product_title: " OPPO Phone",
        product_img: "https://m.media-amazon.com/images/I/41yx-OTfNwL._SX300_SY300_QL70_FMwebp_.jpg",
        product_desc: 'Description of product 1',
        price: 19999.99
    },
    {
        product_title: "IPhone",
        product_img: "https://m.media-amazon.com/images/I/31p5cVyRLmL._SY445_SX342_QL70_FMwebp_.jpg",
        product_desc: 'Description of product 2',
        price: 120000
    },
    {
        product_title: " MI-5 (5G) Phone",
        product_img: "https://m.media-amazon.com/images/I/51JaSbauK3L._SX300_SY300_QL70_FMwebp_.jpg",
        product_desc: 'Description of product 3',
        price: 30400
    },
    {
        product_title: " XIAOMI-14 Phone",
        product_img: "https://m.media-amazon.com/images/I/41O+9LbIOUL._SY300_SX300_.jpg",
        product_desc: 'Description of product 4',
        price: 49999.99
    },
    {
        product_title: " TABLET 1",
        product_img: "https://www.reliancedigital.in/medias/Lenovo-8506X-Regular-Tablets-492849048-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyODk3Mzh8aW1hZ2UvanBlZ3xpbWFnZXMvaGM0L2hiMi85NzgyNjUxNDIwNzAyLmpwZ3w3OGE5OWFmN2UxYTllNDRkNWYyYTA4M2RkMTM2Yjg1MTZiOWQxMTJkNzk2NDU1ZWFkOTExNTdjNjk5ODdjZmE5E",
        product_desc: 'Description of product 5',
        price: 49999.99
    },
    {
        product_title: " TABLET 2",
        product_img: "https://www.reliancedigital.in/medias/Lenovo-ZA6W0191IN-Regular-Tablets-492849333-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNjY4NDl8aW1hZ2UvanBlZ3xpbWFnZXMvaGI4L2gxMC85NzkxMTI2NTY4OTkwLmpwZ3wxZDAyMTQyNDI2MzIwM2NlYjBjNWUwZTY3MDgzZGVlZTgxMmQ1YzQ5ZTFlZWEwYmMyN2FmZjE4NTA0MWM4N2Ex",
        product_desc: 'Description of product 6',
        price: 49999.99
    },
    {
        product_title: " TABLET 3",
        product_img: "https://www.reliancedigital.in/medias/Samsung-X200N-Tablets-492574927-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MTc1NzF8aW1hZ2UvanBlZ3xpbWFnZXMvaGYzL2hiOC85NzU2NjA3MDIxMDg2LmpwZ3xhMjc1N2E2ZGFmNzQ2ZDZkZjI0NTY2ZjZmZDQ1NmM4Y2NkYmQyZmZiOTBmMmQ5NzU5NDIxMmIzNzU2NTVjOTZm",
        product_desc: 'Description of product 5',
        price: 49999.99
    },
    {
        product_title: " TABLET 4",
        product_img: "https://www.reliancedigital.in/medias/Apple-iPad-10.2-inch-Tablet-491997817-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyODIyOXxpbWFnZS9qcGVnfGltYWdlcy9oMmEvaDRmLzk2MzUzMTY5MjQ0NDYuanBnfDdhZjcxZmZhMjY0ZmI1NGI3N2ViNTI4MGQ1NTBmZjBjY2I0M2ViNjZlZDMwYmM0MGZmODJiZDZkZDkwNDkyZmM",
        product_desc: 'Description of product 6',
        price: 49999.99
    },
    {
        product_title: " ACER ",
        product_img: "https://m.media-amazon.com/images/I/61CC9Mx2+aL._SL1000_.jpg",
        product_desc: 'Description of product 7',
        price: 89999.99
    },
    {
        product_title: " DELL ",
        product_img: "https://m.media-amazon.com/images/I/71Ny5LHCwYL._SL1500_.jpg",
        product_desc: 'Description of product 8',
        price:45999.99
    },
    {
        product_title: " ASUS ",
        product_img: "https://m.media-amazon.com/images/I/41a09pemPBL._SX300_SY300_QL70_FMwebp_.jpg",
        product_desc: 'Description of product 9',
        price: 469900.98
    },
    {
        product_title: " HP (I3)",
        product_img: "https://m.media-amazon.com/images/I/61Qe0euJJZL._SX679_.jpg",
        product_desc: 'Description of product 10',
        price: 10900.99
    }
];

const SortProductList = (products) => {
  
  let sortArray = products.sort((a, b) => a.price - b.price);

  {sortArray.map((p,i)=>{
    return(
      <ProductDisplay sortArray={p} key={i} />
    )
   
  });
}

};

  return (
    <>
      <Navbar  product={products} SortProductList={SortProductList}/>
      <Container>
        <Row>
    
          {products.map((p,i)=>{
            return(
              <ProductDisplay product={p} key={i} />
            )
          })};
        
        </Row>
      </Container>

    </>
  )
}

export default App;
