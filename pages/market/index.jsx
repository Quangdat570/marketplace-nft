import React from 'react'
import { Container, Row, Col, Card, CardGroup, Carousel } from 'react-bootstrap'
import Link from 'next/link'
import styles from '../../styles/marketcss/market.module.css'
import ListProducts from '../components/marketpage/ListProducts'
import ProductsList from '../components/marketpage/ProductsList'
import TopSale from '../components/marketpage/TopSale'

const Index = () => {
  return (
    <>
    <Container fluid className={styles.background} >
      <div className="container">
        <Row>
          <Col xs={12} md={6} className='my-auto pb-5'>
            <div className={styles.text_top_banner}>Gigaland Market</div>
            <h1 className={styles.text}>Create, sell or collect digital items.</h1>
            <div className={styles.sub_heading}>Unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable</div>
            <button className={styles.btn_banner_market}><Link href='' className='text-light text-decoration-none'>Explore</Link></button>
          
          </Col>

          <Col xs={12} md={6}>
            <Carousel >
              <Carousel.Item interval={5000} className={styles.boder}>
              <img
                className="d-block w-100 "
                src="/market-img/banner 1.jpg"
                alt=""
              />
              </Carousel.Item>

              <Carousel.Item interval={5000} className={styles.boder}>
              <img
                className="d-block w-100"
                src="/market-img/banner 2.jpg"
                alt=""
              />
              </Carousel.Item>

              <Carousel.Item interval={5000} className={styles.boder}>
              <img
                className="d-block w-100"
                src="/market-img/banner 3.jpg"
                alt=""
              />
              </Carousel.Item>

               
            </Carousel>
           
          </Col>
        </Row>
      </div>

    </Container>

    <ListProducts/>
    <TopSale/>
    
    </>
  )
}

export default Index