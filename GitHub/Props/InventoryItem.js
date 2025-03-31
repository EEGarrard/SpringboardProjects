function InventoryItem({item}) {
  
  let stockMessage = item.quantity < 5 ? "Low inventory" : "";

 
let priceMessage = item.price > 1000 ? "Extra security needed" : '';
 
      return (
        <div>
          
          <h3>
            {item.name} ({item.type}) - Quantity: {item.quantity} Price: {item.price.toFixed(2)}
          </h3>
          <p>{stockMessage && <Message>{stockMessage}</Message>}</p>
		  <p>{priceMessage && <Message>{priceMessage}</Message>}</p>
        </div>
      );
    
  }

