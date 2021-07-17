//variables
const input = document.querySelector("input");
const btn = document.querySelector("button");
const todolist = document.querySelector(".todo-list");
const clear = document.querySelector(".clear");

//ADD LİST

const addTask = (e) => {
    e.preventDefault();                                     // HTML elementlerinin mevcut eylemlerini engelleme isteği
    const newList = document.createElement("li");           // Liste elemanlarını oluşturma 
    const delet = document.createElement("button");         // Silme buttonu
  
    delet.innerHTML = '<i class="fas fa-trash-alt"></i>';   // Yukarıdaki silme buton oluşumuna silme iconunu ekleme

//     < <li>
//     Task 1
//     <button><i class="fas fa-trash-alt"></i></button>
//      </li> 


    if (input.value !== ""){                            // Eğer input içeriği boş değilse
        newList.textContent = input.value;              // Oluşturulan li etiketi içeriğine bu value değerini ekle
        newList.appendChild(delet);                     // li etiketine silme butonunu ekler
        todolist.appendChild(newList);                  // li etiketini .todolist classına sahip ol ye ekler
        input.value = "";                               // Ekledikten sonra tekrar input value sunu sildi (boş yaptı)
    }else{
        alert("Please Enter a Task");                   // Eğer boşsa kullanıcıya alert şeklinde uyarı veriyor 
    }

    delet.addEventListener("click",function(){          // Delet (yani çöp kutusu) üzerine tıklandığında
        const del = confirm("Delete this task ! Are you Sure") // Kullanıcıya confirm ile onay soruyor
        if (del == true) {                              // Eğer true ise yani kullanıcı tamama basıyorsa
            const parent = this.parentNode;             // Silme butonunun parentını parent değişkenine atadı sanırım
            parent.remove();                            // Parent yani o li etiketi silinir
        }
    })  
 };
 
    btn.addEventListener("click", addTask);             // Add Butonuna her tıklandığında yukarıdaki addTask function çağrılır
    var list = document.querySelector('ol');            // list değişkenine ol ler atandı, yakalandı
    list.addEventListener('click', function(ev) {       // ol elemanlarının üzerine tıklandığında function çağırılıyor
    if (ev.target.tagName === 'LI') {                   // Eğer tıklananın tag name li ise
    ev.target.classList.toggle('checked');              // classlistine toggle olarak checked ekle
    }
    });