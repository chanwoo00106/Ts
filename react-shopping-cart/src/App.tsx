import { useState } from "react";
import { useQuery } from "react-query";

import { Drawer } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from "@material-ui/core/Badge";

import { Wrapper } from "./App.styles";

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
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  console.log(data);

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Someting went wrong...</div>

  return (
    <div className="App">
      start
    </div>
  );
}

export default App;
