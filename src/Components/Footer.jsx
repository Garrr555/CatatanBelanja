export default function Footer({items}) {

    if(items.length === 0){
      return (
        <footer className="stats">
          Daftar Belanjaan Masih Kosong
        </footer>
      )
    }
  
    const totalItems = items.length
  
    const totalBuyItems = items.filter((item) => item.checked === true).length
    
    const totalBuyItemsPersen = Math.round((totalBuyItems / totalItems) * 100)    //Math.round() agar hasil nya menjadi bilangan bulat
  
    return (
      <footer className="stats">
        Ada {totalItems} barang di daftar belanjaan, {totalBuyItems} barang sudah dibeli ({totalBuyItemsPersen}%)
      </footer>
    );
  }
  