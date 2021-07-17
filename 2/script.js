const form = document.querySelector('form');                    // Form elemanını yakaladık
const input = document.querySelector('#txtTaskName');           // input elemanını yakaladık
const btnDeleteAll = document.querySelector('#btnDeleteAll');   // DeleteAll linkini yakaladık
const taskList = document.querySelector('#task-list');          // ol listesini yakalamış olduk

// event'ları çağır.tüm eventları sayfa yüklendiğinde çalıştırdım.
eventListeners();

function eventListeners() {                      // Butonlara gerekli işlem yapıldığında hangi fonksiyonları çağırsın onları ayarladım
    
    //form submit event'ı
    form.addEventListener('submit', addNewItem); // form'a submit edince task ekleme

    //tek bir görev silme event'ı
    taskList.addEventListener('click', deleteItem); // ol'ye click edince task silme

    //tüm görevleri silme event'ı
    btnDeleteAll.addEventListener('click', deleteAllItems); // Hepsini Sil'e click edince bütün taskları silme

}

function createItem(text){          // items içindeki itemları li'nin içine yerleştir.
        // li oluştur
        const li = document.createElement('li');
        li.className ='taskItem';                   // classı taskItem olan li oluşturur
        li.textContent = text;                      // li içeriğine girilen texti ekle 

        //a oluştur
        const a = document.createElement('a');      // a etiketi oluştur, ( çöp kutusu iconu için )
        a.className = '';                           // class yok
        a.setAttribute('href','#');                 // href attribute oluştur
        a.innerHTML='<i class="fas fa-trash"></i>'; // içine çöp kutusu iconu ekle
        a.style.float = "right";                    // js ile buna stil verdik sağa yanaştırdık

        //button oluştur
        const button = document.createElement('button'); // button etiketi oluştur, + ve x için
        button.className = 'complete';                   // classı complete olsun
        button.textContent="+";                          // İçeriği " + " olsun
        button.style.float = "right";                    // js ile buna da stil verdik sağa yanaştırdık

        button.addEventListener('click', function() {    // Sonra bu butona tıklandığında oluşacak fonksiyonu belirliyoruz
            li.classList.toggle('checked');              // classList toogle checked özelliği ekle, yani kullanıcı + veya x ya basınca checked yapınca oluşacak işlemleri ekliyoruz
            if(button.textContent == "+"){               // Eğer buton içeriği " + " ise
                button.textContent = "x";                // Buton içeriğini " X " yap
                button.style.backgroundColor = "indianred"; // js ile arka plan rengini değiştirdik
            }else{                                       // Eğer buton içeriği " + " değilise ki başka birşeyse yani " x "
                button.textContent = "+";                // Buton içeriğini bu sefer " + " yap
                button.style.backgroundColor = "blueviolet" // js ile arka plan rengini değiştirdik
            }
            
          });

        
        li.appendChild(a);        // a'yı (çöp kutusu iconu) li'ye ekle

        li.appendChild(button);   // Butonu li'ye ekle

        taskList.appendChild(li); //li'yi ol'ye ekle
}

// Yeni görev ekle
function addNewItem(e){

    if(input.value !== ''){      // input alanı boş değilse devam et.

        createItem(input.value); // input'a giriş yapıldığında li'ye bu değeri bas

        input.value='';          // input'u temizle
    
        e.preventDefault();      // forma tıklandığında submit olmasını engelledim. Sayfa yenilenmez.
    }else{
        alert('Please Enter a Task!')
        e.preventDefault()       // alert'e tıklandığında form tekrar submit olmasın diye.
    } 
}
 
//tek görevi sil. Bubblingden yararlandım
function deleteItem(e){
    if(e.target.className === 'fas fa-trash'){              // Eğer kullanıcını tıkladığı yani hedefi çöp kutusu iconu ise
        if(confirm('Delete Task?')){                  // Eğer confirm işleminde true gelirse
            e.target.parentElement.parentElement.remove();  // li'nin iki parent üstü li elemanı silinir      
        } 
    }
    e.preventDefault()
}

//tüm görevleri sil. Bubblingden yararlandım
function deleteAllItems(e){
    if(confirm('Delete All Tasks?')){            // Eğer confirm işleminde true gelirse
        while(taskList.firstChild){                      // ol'nin ilk child'ı olduğu sürece
            taskList.removeChild(taskList.firstChild);   // ol'nin ilk child'ını kaldırır yani hiç ilk çocuk kalmayana kadar
        }
    e.preventDefault();    // a tag'inin refresh olmasını engelledim. 
    }
}