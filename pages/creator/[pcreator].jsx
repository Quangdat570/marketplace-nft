import React from 'react'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import styles from './creatorInfo.module.css'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AddIcon from '@mui/icons-material/Add';

const CreatorInfo = () => {
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