const input = document.querySelector("input");          // input elemanını input değişkenine atadık
const addBtn = document.querySelector(".add-btn");      // .add-btn classına sahip butonu (+) addBtn değişkenine atadık
const deleteAll = document.querySelector(".delete-btn");// .delete-btn classına sahip butonu (Delete All) deleteAll değişkenine atadık

// Add task
addBtn.addEventListener("click", function () {          // + BUTONUNA basıldığında 
    const li = document.createElement("li");            // Bir adet li etiketi üretip onu li değişkenine atadık
    li.classList.add("task-item");                      // Bu li etiketinin classına "task-item ekledik"
    li.innerHTML = input.value + '<button class="delete-item"><i class="fas fa-trash-alt"></i></button>'; // Takiben bu li etiketinin içeriğine de hem input tan gelecek değeri hem de bir adet çöp kutusu iconu ekledik
    document.querySelector("ul").appendChild(li);       // Sonra HTML deki ul listesini yakaladık ve yukarıdaki li etiketini onun child olarak ekledik
    input.value = "";                                   // Takiben input içerisini resetledik
});

// Delete all task
deleteAll.addEventListener("click", function (event) {  // "Delete All" BUTONUNA tıklandığında;
    document.querySelector("ul").remove();              // Direk ul etiketinin tamamını sil dedik
    input.value = "";                                   // Yine input içerisini resetledik
});

// Delete a task
const ul = document.querySelector("ul");                // ul listesini ul değişkeninde yakaladık
ul.addEventListener("click", (event) => {               // ul etiketi üzerine tıklandığında
    if (event.target.className === "fas fa-trash-alt") { // Eğer kullanıcının tık hedefinin classı "fas fa-trash-alt" ise, (yani çöp kutusu)
        event.target.parentElement.parentElement.classList.add("delete-task"); // Kullanıcının tıkladığının parentının(button) parantının(li) classına "delete-task" classını ekle ki
    }                                                                          // css de yazılmış olan üstü çizilme uygulansın
});