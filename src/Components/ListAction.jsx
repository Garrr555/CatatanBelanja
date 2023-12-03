import { useState } from "react";
import Item from "./Items";

export default function ListAction({ items, onDeleteItem, onToogleItem, onClearItems }) {

    const[sortBy, setSortBy] = useState('input')
  
    let sortedItems
  
    //untuk mengurutkan barang berdasarkan urutan inputan 
    if(sortBy === 'input'){
      sortedItems = items
    }
    //------------------------------------------------------------------------
  
    //untuk mengurutkan berdasarkan nama barang
    if(sortBy === 'nama'){
      sortedItems = items.slice().sort((a,b) => a.nama.localeCompare(b.nama))   //items.slice().sort((a,b) => a.nama.localeCompare(b.nama)) merupakan fungsi unutk mengurutkan pada javascript
    }
    //-------------------------------------------------------------------------
  
    //unutk mengurutkan berdasarkan ceklist
    if(sortBy === 'cek'){
      sortedItems = items.slice().sort((a,b) => a.checked - b.checked)
    }
    //------------------------------------------------------------------------
  
    return (
      <>
        <div className="list">
          <ul>
            {sortedItems.map((item) => (
              <Item
                item={item}
                key={item.id}
                onDeleteItem={onDeleteItem}
                onToogleItem={onToogleItem}
              />
            ))}
          </ul>
        </div>
  
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Urutkan berdasarkan urutan input</option>
            <option value="nama">Urutkan berdasarkan nama barang</option>
            <option value="cek">Urutkan berdasarkan ceklis</option>
          </select>
          <button onClick={onClearItems}>Bersihkan Daftar</button>
        </div>
      </>
    );
  }