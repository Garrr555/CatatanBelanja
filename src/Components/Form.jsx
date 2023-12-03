import { useState } from "react";

export default function Form({ onAddItem }) {
    const [nama, setNama] = useState("");
  
    const [quantity, setQuantity] = useState(1);
  
    function onHandle(e) {
      e.preventDefault(); //untuk mematikan fungsi default browser
  
      if (nama === "")
        //menggunakan fungsi if ketika nama kosong(tidak diinputkan nilai oleh user) maka akan langsung di return. sehingga ketika user tidak memasukan nilai apapun di nama maka data nya tidak akan tersimpan
        return;
  
      const newItem = {
        nama,
        quantity,
        checked: false,
        id: Date.now(),
      };
  
      onAddItem(newItem);
  
      console.log(newItem);
  
      setNama(""); //setNama dan setQuantity digunakan agar ketika data telah diinput maka form inputan data akan kosong kembali
      setQuantity(1);
    }
  
    const quantityNum = [...Array(10)].map(
      (
        _,
        i //membuat array sebanyak 20
      ) => (
        <option value={i + 1} key={i + 1}>
          {i + 1}
        </option>
      )
    );
  
    return (
      <form className="add-form" onSubmit={onHandle}>
        <h3>Hari ini belanja apa kita?</h3>
        <div>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {quantityNum}
          </select>{" "}
          {/* menggunakan Number() agar nilai yg dimasukan tidak menjadi string */}
          <input
            type="text"
            placeholder="nama barang..."
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />{" "}
          {/*saat menggunakan value maka tidak bisa diinputkan apa-apa, makanya menggunakan onChange agar user bisa menginputkan sesuatu*/}
        </div>
        <button>Tambah</button>
      </form>
    );
  }