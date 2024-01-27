import React, { useState } from 'react';

const Data = () => {
    const[MobileData] = useState([
        {
            "type": "Mobile",
            "model": "iPhone 13",
            "color": "Midnight",
            "storage": "128GB",
            "price": 999.99
          },
          {
            "type": "Mobile",
            "model": "iPhone 13 Pro",
            "color": "Graphite",
            "storage": "256GB",
            "price": 1199.99
          },
          {
            "type": "Mobile",
            "model": "iPhone SE",
            "color": "White",
            "storage": "64GB",
            "price": 399.99
          },
          {
            "type": "Laptop",
            "model": "MacBook Air",
            "processor": "Apple M2",
            "memory": "16GB RAM",
            "storage": "512GB SSD",
            "price": 1499.99
          },
          {
            "type": "Laptop",
            "model": "MacBook Pro 14",
            "processor": "Apple M2 Pro",
            "memory": "32GB RAM",
            "storage": "1TB SSD",
            "price": 2299.99
          },
          {
            "type": "Laptop",
            "model": "MacBook Pro 16",
            "processor": "Intel Core i9",
            "memory": "64GB RAM",
            "storage": "2TB SSD",
            "price": 3499.99
          },
          {
            "type": "Accessory",
            "name": "AirPods Max",
            "color": "Silver",
            "price": 549.99
          },
          {
            "type": "Accessory",
            "name": "Magic Keyboard",
            "color": "Space Gray",
            "price": 149.99
          },
          {
            "type": "Accessory",
            "name": "Apple Pencil (2nd Gen)",
            "color": "White",
            "price": 129.99
          },
    ])

    return(
        <>
        
        </>
    )
}



export default Data;