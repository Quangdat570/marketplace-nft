// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Link from 'next/link'
import { IoRocketOutline } from 'react-icons/io5'

export default function Home() {
  return (
    <>
    <Container fluid className={styles.hero}>
      <div className="container">
        <Row className=''>
          <Col xs={{span:12, order:1}} sm={6} className={styles.margin}>
            <div className={styles.hero_text}>
              <div className={styles.heading_subhead}>
                <div className={styles.heading}>
                Discover digital art & Collect NFTs
                </div>
                <div className={styles.subhead}>
                NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                </div>
              </div>
              
            </div>
          </Col>
          <Col xs={{span:12, order:2}} sm={6}>
           
            <div className='hightlight mt-3'>
              <img src='homepages/hero banner.jpg' className={styles.img} />
              <div className={styles.name_img}>
              Space Walking
              </div>
              <div  className={styles.avatar}>
                <img src='/homepages/avatar hero.jpg' className={styles.avatar_hero}></img>
                <p className={styles.nameavatar}>
                Animakid
                </p>
              </div>
              
            </div>
          </Col>
          <Col xs={{span:12, order:3}} className='d-flex flex-column'>
          <div className={styles.btn} >
                  <Link href='#' className={styles.btn_hero}>
                    <IoRocketOutline className=''/>
                    <span className='ps-3'>Get Started</span>
                  </Link>
              </div>
              <div className={styles.auditional}>
                <div className={styles.totalsale}>
                  <div className={styles.ending_hero}>
                  240k+
                  </div >
                  <div className={styles.name_audition}>
                  Total Sale
                  </div>
                </div>
                <div className={styles.auctions}>
                  <div className={styles.ending_hero}>
                  100k+
                  </div>
                  <div className={styles.name_audition}>
                  Auctions
                  </div>
                </div>
                <div className={styles.artists}>
                  <div className={styles.ending_hero}>
                  240k+
                  </div>
                  <div className={styles.name_audition}>
                  Artists
                  </div>
                </div>
              </div>
          </Col>
        </Row>
      </div>
    </Container>

    <Container fluid className={styles.background}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 pb-5'>
              <h3 className={styles.heading_trend}>Trending Collection</h3>
              <p className={styles.sub_heading_trend}>Checkout our weekly updated trending collection.</p>
          </div>
          <div className='col-12 col-sm-6  col-md-6 col-lg-4 mb-4'>
            <div className='col-12'>
              <img src='/homepages/trending 1.jpg' className={styles.img_trending}></img>
            </div>
            <div className='col-12 d-flex mt-3'>
              <div className='col-4 d-flex justify-content-center'>
                <img src='/homepages/trending 2.jpg' className={styles.img_sub_trending}></img>
              </div>
              <div className='col-4 d-flex justify-content-center'>
                <img src='/homepages/trending 3.jpg'className={styles.img_sub_trending}></img>
              </div>
              <div className='col-4 d-flex justify-content-center'>
                <img src='/homepages/trending 2.jpg' className={styles.img_sub_trending}></img>
              </div>
            </div>
            <div className='collect-info pt-3 pb-3 ps-2 pe-2'>
              <div className={styles.collect_name}>
              DSGN Animals
              </div>
              <div className='d-flex gap-3 mt-2'>
               <img src='/homepages/avatar trend 1.jpg' className={styles.img_collect_name}></img>
               <div className={styles.sub_collect_name}>MrFox</div>
              </div>
            </div>

          </div>

          <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-4'>
            <div className='col-12'>
              <img src='/homepages/trending 4.jpg' className={styles.img_trending}></img>
            </div>
            <div className='col-12 d-flex mt-3'>
              <div className='col-4 d-flex justify-content-center'>
                <img src='/homepages/trending 5.jpg' className={styles.img_sub_trending}></img>
              </div>
              <div className='col-4 d-flex justify-content-center'>
                <img src='/homepages/trending 6.jpg' className={styles.img_sub_trending}></img>
              </div>
              <div className='col-4 d-flex justify-content-center'>
                <img src='/homepages/trending 5.jpg' className={styles.img_sub_trending}></img>
              </div>
            </div>
            <div className='collect-info pt-3 pb-3 ps-2 pe-2'>
              <div className={styles.collect_name}>
              Magic Mushrooms
              </div>
              <div className='d-flex gap-3 mt-2'>
               <img src='/homepages/avatar trend 2.jpg' className={styles.img_collect_name}></img>
               <div className={styles.sub_collect_name}>Shroomie</div>
              </div>
            </div>

          </div>

          <div className='col-12 d-none d-lg-block col-lg-4 mb-4'>
            <div className='col-12'>
              <img src='/homepages/trendinng 7.jpg' className={styles.img_trending}></img>
            </div>
            <div className='col-12 d-flex mt-3'>
              <div className='col-4 d-flex justify-content-center'>
                <img src='/homepages/trending 8.jpg' className={styles.img_sub_trending}></img>
              </div>
              <div className='col-4 d-flex justify-content-center'>
                <img src='/homepages/trending 9.jpg' className={styles.img_sub_trending}></img>
              </div>
              <div className='col-4 d-flex justify-content-center'>
                <img src='/homepages/trending 8.jpg' className={styles.img_sub_trending}></img>
              </div>
            </div>
            <div className='collect-info pt-3 pb-3 ps-2 pe-2'>
              <div className={styles.collect_name}>
              Disco Machines
              </div>
              <div className='d-flex gap-3 mt-2'>
               <img src='/homepages/avatar trend 3.jpg' className={styles.img_collect_name}></img>
               <div className={styles.sub_collect_name}>BeKind2Robots</div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </Container>

    <Container fluid className={styles.background}>
      <div className='container pt-5'>
        <div className='row'>
            <div className='col-12 '>
              <div className='d-flex align-items-end justify-content-between mb-5 '>
                <div className={styles.head_creator}>
                  <h3>Top creators</h3>
                  <div className={styles.sub_heading_creator}>Checkout Top Rated Creators on the NFT Marketplace</div>
                </div>
                <div>
                  <Link href='#'  className={styles.btn_creator_box}>
                      <div className={styles.logo_btn_creator}> <IoRocketOutline/> </div>
                      <span className={styles.btn_creator}>View Rankings</span>
                  </Link>
                </div>

              </div>
            </div>
           
            <Col xs={12} md={6} lg={3} className='mb-3' >
            <Card className={styles.bg_avatar}>
              <Card.Img src='/homepages/Avatar 1.jpg' className={styles.img_avatar}></Card.Img>
              <div className='d-flex flex-column '>
                    <div className={styles.name_avatar_creator}>Keepitreal</div>
                    <div className='d-flex gap-2 align-items-center justify-content-center'>
                      <div className={styles.total}>Total Sales:</div>
                      <div className={styles.price}>34.53 ETH</div>
                    </div>
                  </div>
            </Card>

            </Col>

            <Col xs={12} md={6} lg={3} className='mb-3'>
            <Card className={styles.bg_avatar}>
              <Card.Img src='/homepages/Avatar 2.jpg' className={styles.img_avatar}></Card.Img>
              <div className='d-flex flex-column '>
                    <div className={styles.name_avatar_creator}>DigiLab</div>
                    <div className='d-flex gap-2 align-items-center justify-content-center'>
                      <div className={styles.total}>Total Sales:</div>
                      <div className={styles.price}>34.53 ETH</div>
                    </div>
                  </div>
            </Card>

            </Col>

            <Col xs={12} md={6} lg={3} className='mb-3'>
            <Card className={styles.bg_avatar}>
              <Card.Img src='/homepages/Avatar 3.jpg' className={styles.img_avatar}></Card.Img>
              <div className='d-flex flex-column '>
                    <div className={styles.name_avatar_creator}>GravityOne</div>
                    <div className='d-flex gap-2 align-items-center justify-content-center'>
                      <div className={styles.total}>Total Sales:</div>
                      <div className={styles.price}>34.53 ETH</div>
                    </div>
                  </div>
            </Card>

            </Col>

            <Col xs={12} md={6} lg={3} className='mb-3'>
            <Card className={styles.bg_avatar}>
              <Card.Img src='/homepages/Avatar 4.jpg' className={styles.img_avatar}></Card.Img>
              <div className='d-flex flex-column '>
                    <div className={styles.name_avatar_creator}>Juanie</div>
                    <div className='d-flex gap-2 align-items-center justify-content-center'>
                      <div className={styles.total}>Total Sales:</div>
                      <div className={styles.price}>34.53 ETH</div>
                    </div>
                  </div>
            </Card>

            </Col>

            <Col xs={12} md={6} lg={3} className='mb-3'>
            <Card className={styles.bg_avatar}>
              <Card.Img src='/homepages/Avatar 5.jpg' className={styles.img_avatar}></Card.Img>
              <div className='d-flex flex-column '>
                    <div className={styles.name_avatar_creator}>BlueWhale</div>
                    <div className='d-flex gap-2 align-items-center justify-content-center'>
                      <div className={styles.total}>Total Sales:</div>
                      <div className={styles.price}>34.53 ETH</div>
                    </div>
                  </div>
            </Card>

            </Col>

            <Col xs={12} md={6} lg={3} className='mb-3'>
            <Card className={styles.bg_avatar}>
              <Card.Img src='/homepages/Avatar 6.jpg' className={styles.img_avatar}></Card.Img>
              <div className='d-flex flex-column '>
                    <div className={styles.name_avatar_creator}>Mr Fox</div>
                    <div className='d-flex gap-2 align-items-center justify-content-center'>
                      <div className={styles.total}>Total Sales:</div>
                      <div className={styles.price}>34.53 ETH</div>
                    </div>
                  </div>
            </Card>

            </Col>

            <Col xs={12} md={6} lg={3} className='mb-3'>
            <Card className={styles.bg_avatar}>
              <Card.Img src='/homepages/Avatar 7.jpg' className={styles.img_avatar}></Card.Img>
              <div className='d-flex flex-column '>
                    <div className={styles.name_avatar_creator}>Shroomie</div>
                    <div className='d-flex gap-2 align-items-center justify-content-center'>
                      <div className={styles.total}>Total Sales:</div>
                      <div className={styles.price}>34.53 ETH</div>
                    </div>
                  </div>
            </Card>

            </Col>

            <Col xs={12} md={6} lg={3} className='mb-3'>
            <Card className={styles.bg_avatar}>
              <Card.Img src='/homepages/Avatar 8.jpg' className={styles.img_avatar}></Card.Img>
              <div className='d-flex flex-column '>
                    <div className={styles.name_avatar_creator}>Robotica</div>
                    <div className='d-flex gap-2 align-items-center justify-content-center'>
                      <div className={styles.total}>Total Sales:</div>
                      <div className={styles.price}>34.53 ETH</div>
                    </div>
                  </div>
            </Card>

            </Col>

            <Col xs={12} md={6} lg={3} className='mb-3'>
            <Card className={styles.bg_avatar}>
              <Card.Img src='/homepages/Avatar 9.jpg' className={styles.img_avatar}></Card.Img>
              <div className='d-flex flex-column '>
                    <div className={styles.name_avatar_creator}>RustyRobot</div>
                    <div className='d-flex gap-2 align-items-center justify-content-center'>
                      <div className={styles.total}>Total Sales:</div>
                      <div className={styles.price}>34.53 ETH</div>
                    </div>
                  </div>
            </Card>

            </Col>

            <Col xs={12} md={6} lg={3} className='mb-3'>
            <Card className={styles.bg_avatar}>
              <Card.Img src='/homepages/Avatar 10.jpg' className={styles.img_avatar}></Card.Img>
              <div className='d-flex flex-column '>
                    <div className={styles.name_avatar_creator}>Animakid</div>
                    <div className='d-flex gap-2 align-items-center justify-content-center'>
                      <div className={styles.total}>Total Sales:</div>
                      <div className={styles.price}>34.53 ETH</div>
                    </div>
                  </div>
            </Card>

            </Col>

            <Col xs={12} md={6} lg={3} className='mb-3'>
            <Card className={styles.bg_avatar}>
              <Card.Img src='/homepages/Avatar 11.jpg' className={styles.img_avatar}></Card.Img>
              <div className='d-flex flex-column '>
                    <div className={styles.name_avatar_creator}>Dotgu</div>
                    <div className='d-flex gap-2 align-items-center justify-content-center'>
                      <div className={styles.total}>Total Sales:</div>
                      <div className={styles.price}>34.53 ETH</div>
                    </div>
                  </div>
            </Card>

            </Col>

            <Col xs={12} md={6} lg={3} className='mb-3'>
            <Card className={styles.bg_avatar}>
              <Card.Img src='/homepages/Avatar 12.jpg' className={styles.img_avatar}></Card.Img>
              <div className='d-flex flex-column '>
                    <div className={styles.name_avatar_creator}>Ghiblier</div>
                    <div className='d-flex gap-2 align-items-center justify-content-center'>
                      <div className={styles.total}>Total Sales:</div>
                      <div className={styles.price}>34.53 ETH</div>
                    </div>
                  </div>
            </Card>

            </Col>
        </div>

      </div>
    </Container>

    </>
  )
}
