import { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import ListAction from "./Components/ListAction";
import Footer from "./Components/Footer";


// const barangBelanjaan = [
//   {
//     id: 1,
//     nama: "Biji Kopi",
//     quantity: 5,
//     cek: true,
//   },
//   {
//     id: 2,
//     nama: "Gula Pasir",
//     quantity: 5,
//     cek: false,
//   },
//   {
//     id: 3,
//     nama: "Air Mineral",
//     quantity: 3,
//     cek: false,
//   },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems([...items, item]); //...items untuk membuat array baru yg isinya sama dengan array items dan menggunakan item untuk membuat array baru dibelakang array ...items
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id)); // items.filter(item) untuk menelusuri seluruh nilai yang telah dimasukan kedalam array. item.id !== id untuk mengecek item.id yang tidak sama dengan id
  }

  function handleToogleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    ); //item.id === id untuk mengecek yang sedang kita cheklist.  ...item unutk membuat objek baru dan  checked: !item.checked  untuk memberikan nilai cek yang berkebalikan dengan nilai cek awalnya
  }

  function handleClearItems(){
    setItems([])
  }

  return (
    <div className="app">
      <Header />

      <Form onAddItem={handleAddItems} />

      <ListAction
        items={items}
        onDeleteItem={handleDeleteItem}
        onToogleItem={handleToogleItem}
        onClearItems={handleClearItems}
      />

      <Footer 
        items={items}
      />
    </div>
  );
}