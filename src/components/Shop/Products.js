import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [{id:"1",title:"p1",price:10,description:"description1"}
  ,{id:"2",title:"p2",price:20,description:"description2"}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {DUMMY_DATA.map(product=><ProductItem
          key={product.id}
           id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
