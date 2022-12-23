import React from 'react'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import styles from './creatorInfo.module.css'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch,useSelector } from 'react-redux';

const CreatorInfo = ({product}) => {
  console.log("product", product)
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
      
      dataRepon: dataRepon.slice(68),
      
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