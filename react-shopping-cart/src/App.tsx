import { useState } from "react";
import { useQuery } from "react-query";

import Item from "./Item/Item";
import Cart from "./Cart/Cart";
import { Drawer } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from "@material-ui/core/Badge";

import { Wrapper, StyledButton } from "./App.styles";

export type CartItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemCart = prev.find(item => item.id === clickedItem.id)
      if (isItemCart) {
        return prev.map(item => (
          item.id === clickedItem.id ? {
            ...item, amount: item.amount + 1
          } : item
        ))
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    })
  };

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Someting went wrong...</div>

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClick={() => setCartOpen(false)}>
        <Cart
          CartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
