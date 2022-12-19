import React from 'react'

const ProductsDetail = ({products}) => {
  return (
    <>
    <div>{products.title}</div>
    </>
  )
}

export default ProductsDetail

export const getStaticProps = async (ctx) => {
  const {pid} = ctx.params;
  const res = await fetch(
    "https://localhost/3002/product?id=/" + pid,
    
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};


export const getStaticPaths = async () => {
  const res = await fetch(
    "https://localhost:3002/products",
    
  );
  const data = await res.json();
  

  return {
    paths: data.map((item) => {{params : {pid: String(item.id)}}}),
    fallback: false,
  };
};