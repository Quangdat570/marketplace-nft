import React, { PureComponent } from 'react'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import styles from './creatorInfo.module.css'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch,useSelector } from 'react-redux';
import { selectProductsList } from '../../store/features/products/products.slice';
import Link from 'next/link';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataDashboard = [
  {
    name: 'Dec 22',
    "Average price (ETH)": 0.1072,
    "Volume (ETH)": 212,
    // amt: 2400,
  },
  {
    name: 'Dec 23',
    "Average price (ETH)": 0.0967,
    "Volume (ETH)": 64,
    // amt: 2210,
  },
  {
    name: 'Dec 24',
    "Average price (ETH)": 0.1543,
    "Volume (ETH)": 159,
    // amt: 2290,
  },
  {
    name: 'Dec 25',
    "Average price (ETH)": 0.2081,
    "Volume (ETH)": 140,
    // amt: 2000,
  },
  {
    name: 'Dec 26',
    "Average price (ETH)": 0.1835,
    "Volume (ETH)": 85.4,
    // amt: 2181,
  },
  {
    name: 'Dec 27',
    "Average price (ETH)": 0.1808,
    "Volume (ETH)": 56.75,
    // amt: 2500,
  },
  {
    name: 'Dec 28',
    "Average price (ETH)": 0.2012,
    "Volume (ETH)": 310,
    // amt: 2100,
  },
];

const dataMobile = [
  {
    name: 'Dec 22',
    "Average price (ETH)": 0.1072,
    "Volume (ETH)": 212,
    // amt: 2400,
  },
  
  {
    name: 'Dec 24',
    "Average price (ETH)": 0.1543,
    "Volume (ETH)": 159,
    // amt: 2290,
  },
  
  {
    name: 'Dec 26',
    "Average price (ETH)": 0.1835,
    "Volume (ETH)": 85.4,
    // amt: 2181,
  },
 
  {
    name: 'Dec 28',
    "Average price (ETH)": 0.2012,
    "Volume (ETH)": 310,
    // amt: 2100,
  },
];

const CreatorInfo = ({dataRepon}) => {
  console.log(dataRepon)
  
  
 
  const dispatch = useDispatch();
  return (
    <>
    <Container fluid className={styles.background}>
      <div className={styles.profile_image}>
        <div className={styles.avatar}>
          <img src="/infoCreator/Avatar 1.jpg" alt="" className={styles.img_creator} />
        </div>
      </div>

    </Container>
    <Container fluid className={styles.bg}>
      <div className="container">
        <Row>
          <Col xs={12}>
            <div className={styles.swapper}>
              <div className={styles.name}>Animakid</div>
              <div className={styles.btn}>
                <div className={styles.copy_profile}>
                  <ContentCopyIcon/>
                  <span className={styles.id}>0xc0E3...B79C</span>
                </div>
                <div className={styles.follow}>
                  <AddIcon/>
                  <span className={styles.text_follow}>Follow</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
    <Container fluid className={styles.bg_2}>
        <div className="container">
            <div className={styles.starts}>
                <div className={styles.total_sale}>
                    <div className={styles.number}>250K+</div>
                    <div className={styles.name_sale}>Volume</div>
                </div>
                <div className={styles.total_sale}>
                    <div className={styles.number}>50K+</div>
                    <div className={styles.name_sale}>NFTs Sold</div>
                </div>
                <div className={styles.total_sale}>
                    <div className={styles.number}>3000+</div>
                    <div className={styles.name_sale}>Followers</div>
                </div>
            </div>
            <div className={styles.bio}>
              <div className={styles.head_bio}>Bio</div>
              <div className={styles.content_bio}> Club is a Choose Your Own Adventure collection that is rewarding and expansive.</div>
              <div className={styles.content_bio}>Embarking on an Epic Adventure, we will discover the untold stories of our beloved monkey (Jimmy). This action-packed lore will synchronize with future expansions and airdrops.</div>
              <div className={styles.content_bio}>Every part of the lore acts as a piece of the puzzle. Discussions and Speculations are encouraged. Nobody knows what the future holds, except Jimmy.</div>
            </div>
            <div className={styles.swapper_dashboard}>
              <div className={styles.header_dashboard}>
              Volume and Price
              </div>
              <div className='d-flex justify-content-center d-sm-none  mt-5 mb-5'>
              <LineChart
                  width={350}
                  height={300}
                  data={dataMobile}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="Average price (ETH)"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line yAxisId="right" type="monotone" dataKey="Volume (ETH)" stroke="#82ca9d" />
                </LineChart>
              </div>
              <div className='d-none d-sm-flex justify-content-center d-md-none'>
              <LineChart
                  width={500}
                  height={300}
                  data={dataDashboard}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="Average price (ETH)"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line yAxisId="right" type="monotone" dataKey="Volume (ETH)" stroke="#82ca9d" />
                </LineChart>
              </div>
              <div className='d-none d-md-flex justify-content-center d-lg-none'>
              <LineChart
                  width={700}
                  height={300}
                  data={dataDashboard}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="Average price (ETH)"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line yAxisId="right" type="monotone" dataKey="Volume (ETH)" stroke="#82ca9d" />
                </LineChart>
              </div>
              <div className='d-none d-lg-flex justify-content-center mt-5 mb-5'>
              <LineChart
                  width={850}
                  height={300}
                  data={dataDashboard}
              
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="Average price (ETH)"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line yAxisId="right" type="monotone" dataKey="Volume (ETH)" stroke="#82ca9d" />
                </LineChart>
              </div>
            </div>
           
        </div>
    </Container>
    <Container fluid className={styles.bg}>
    <div className="container">
      <Row>
        {dataRepon.map((item) => (
                  <Col xs={12} sm={6} lg={3} key={item.id}>
                    <Link
                      href={{
                        pathname: "/products/[pid]",
                        query: { pid: item.id },
                      }}
                      className="text-decoration-none"
                    >
                      <Card className={styles.card}>
                        <div className={styles.card_image}>
                          <Card.Img variant="top" src={item.thumbnail} />
                        </div>
                        <Card.Body className="ps-4 pe-4">
                          <Card.Title className={styles.title}>
                            {item.title}
                          </Card.Title>
                          <div className="d-flex gap-3 pb-4 pt-1">
                            <img
                              src="homepages/avatar trend 1.jpg"
                              alt=""
                              className={styles.img_discover}
                            />
                            <div className={styles.name_avatar}>NFT Artist</div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className={styles.discover_price}>
                              <div className={styles.name_price}>Price</div>
                              <div className={styles.price}>1.63 ETH</div>
                            </div>
                            <div className="highness">
                              <div className={styles.name_highness}>
                                Highest Bid
                              </div>
                              <div className={styles.price_highness}>0.33 wETH</div>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))}
      </Row>
    </div>
    </Container>
    </>
  )
}

export default CreatorInfo

export const getStaticProps = async (context) => {
  const id = context.params.pcreator;
  const res = await fetch("http://localhost:3002/creator/" + id);
  const repon = await fetch("http://localhost:3002/products");
  const dataRepon = await repon.json();
  const product = await res.json();

  return {
    props: {
      id,
      product,
      
      dataRepon: dataRepon.slice(59),
      
    },
  };
};


export async function getStaticPaths() {
  const res = await fetch("http://localhost:3002/creator");
  const data = await res.json();

  const paths = data.map((product) => {
    return {
      params: { pcreator: product.id.toString() },
    };
  });

  return {
   
    paths,

    fallback: false,
   
  };
}