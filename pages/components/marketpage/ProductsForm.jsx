import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';
import { Container, Row, Col, Card, CardGroup, Carousel } from 'react-bootstrap'


const ProductsForm = ({product}) => {
  return (
    <>
    <Col xs={12} sm={6} lg={3}>
                <Card className={styles.card}>
                    <div className={styles.card_image}>
                        <Card.Img variant="top" src={product.thumbnail}/>
                    </div>
                    <Card.Body className='ps-4 pe-4'>
                        <Card.Title className={styles.title}>{product.title}</Card.Title>
                        <div className='d-flex gap-3 pb-4 pt-1'>
                           <img src="homepages/avatar trend 1.jpg" alt="" className={styles.img_discover} />
                           <div className={styles.name_avatar}>NFT Artist</div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className={styles.discover_price}>
                                <div className={styles.name_price}>Price</div>
                                <div className={styles.price}>1.63 ETH</div>
                            </div>
                            <div className="highness">
                                <div className={styles.name_highness}>Highest Bid</div>
                                <div className={styles.price_highness}>0.33 wETH</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
    </>
  )
}

export default ProductsForm