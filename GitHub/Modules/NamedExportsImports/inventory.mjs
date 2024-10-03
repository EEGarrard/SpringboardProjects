const items = [];

export const addItem = (item) => {
  items.push(item);
  console.log(`Item added: ${item}`);
};

export const removeItem = (item) => {
    let isRemoved = false;
    
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            isRemoved = true;
            items.splice(i, 1);
            i--;
        }
    }
    
    if (isRemoved) {
        console.log(`Item removed: ${item}`);
    } else {
        console.log(`Item does not exist: ${item}`);
    }

};

export const listItems = () => {
    console.log("Items in inventory:");
    items.forEach(item => console.log(item));
};

addItem("bananas");
addItem("apples")
removeItem("bananas")
listItems()