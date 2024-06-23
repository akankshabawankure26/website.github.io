import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductDisplay({product,i}) {

    return (
        <>
            <div class="col-lg-3 md-4 cart">
                <Card >
                    <Card.Img variant="top" src={product.product_img} />
                    <Card.Body>
                        <Card.Title>{product.product_title}</Card.Title>
                        <Card.Text>
                           {product.product_desc}
                           <br></br>
                           price - : {product.price}
                        </Card.Text>
                        
                        <Button variant="primary">Buy Now</Button> 
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
