/* nút bấm về home */
let comeback = document.getElementsByClassName("topSonHeader")[0];
comeback.addEventListener("click", back);
function back() {
    window.location.href = "./admin.home.html";
}
//lấy dữ liệu về
let products = JSON.parse(localStorage.getItem("products"))||[];
console.log(products);
function load2() {
    let text = ""
    for (let i = 0; i < products.length; i++) {
        text += 
        `
        <tr>
            <td>${i+1}</td>
            <td>${products[i].name}</td>
            <td class="td"><img src=".${products[i].image}" alt="" width="150px"></td>
            <td>${products[i].category}</td>
            <td class="editAll"><button onclick="edit(${i+1})" class="button">Sửa</button></td>
        </tr>
        `
    }
    editProduct.innerHTML = text;
}
load2();