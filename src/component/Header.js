import React from 'react';
import './Header.css';
import {
    ApolloClient,
    InMemoryCache,
    //ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
import sales from '../assets/sales.svg'
import shoppingCart from '../assets/shoppingCart.svg'

  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });
  
  // const client = ...
  
  client
    .query({
      query: gql`
        query GetRates {
          rates(currency: "USD") {
            currency
          }
        }
      `
    })
    .then(result => console.log(result));
  
  const EXCHANGE_RATES = gql`
    query GetExchangeRates {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `;
  
  function ExchangeRates() {
  
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.rates.map(({ currency, rate }) => (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    ));
  }

const Header = (props) => {
    return(
        <div id="grid">
                <div id="header-nav">
                  <div id='header-button'>WOMEN</div>
                  <div id='header-button'>MEN</div>
                  <div id='header-button'>KIDS</div>
                </div>
                <div id="areaB"><img src={sales} alt='sales'/></div>
                <div id="header-nav">
                    <label for="test">$</label>
                    <select>
                        <option value=""></option>
                        <option value="$">$ USD</option>
                        <option value="€">€ EUR</option>
                        <option value="¥">¥ JPY</option>
                    </select>
                    <div id='header-button'><img src={shoppingCart} alt='shoppingCart'/></div>
                    {/* <ApolloProvider client={client}><ExchangeRates/></ApolloProvider> */}
                </div>
            
        </div>
    );
};

export default Header;