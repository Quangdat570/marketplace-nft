
import styles from '../styles/Home.module.css'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Link from 'next/link'
import { IoRocketOutline } from 'react-icons/io5'
import Carousel from 'react-bootstrap/Carousel';
import HeroBanner from './components/landingpage/HeroBanner';
import Trending from './components/landingpage/Trending';
import Creator from './components/landingpage/Creator';
import Hightlight from './components/landingpage/Hightlight';
import Categories from './components/landingpage/Categories';
import Discover from './components/landingpage/Discover';

export default function Home({games, page, total, totalPage}) {
  return (
    <>
    
    <HeroBanner/>
    <Trending/>
    <Creator games= {games}/>
    <Categories/>
    <Discover/>

    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const { page = 1} = ctx.query;

  const res = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games",
    {
      headers: {
          'X-RapidAPI-Key': '595decacd1msha8c222da77f6b33p150d5ejsnea1ba80e02af',
  'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    }
  );
  const data = await res.json();


  return {
    props: {
      page,
      totalPage: Math.ceil(data.length / 12),
      total: data.length,
      games: data.slice((page-1) * 12, page * 12),
      data,
      
    },
  };
};

