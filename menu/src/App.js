import React,{useState} from 'react';
import Menu from './Menu';
import items from './data'
import Categories from './Categories';

// it is a good way to finding inside an array, we have how many categories, if further, changing the value of key 'category' in items array, the website is still run!!
const allCategories = ['all', ...new Set(items.map(item => item.category)) ] 
console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category)=>{
    if(category === "all"){
      setMenuItems(items)
      console.log(items)
      // if having no return here, it continues to run and return newItems is empty array
      return;
    }
    const newItems = items.filter(item => item.category === category)
  
    //console.log(newItems)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu section">
        <div className='title'>
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories}/>
        <Menu items={menuItems}/>
      </section>
      


    </main>
  );
}

export default App;
