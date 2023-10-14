var arr = [
    {
        p_id: '01',
        p_price: '2000',
        p_img: 'https://images.samsung.com/is/image/samsung/assets/pk/2307/pfs/02-04-ft12-B5-flexmode-mo-720x540.jpg?$FB_TYPE_J_F_MO_JPG$'
    },
    {
        p_id: '02',
        p_price: '2000',
        p_img: 'https://images.samsung.com/is/image/samsung/p6pim/pk/feature/164028233/pk-feature--thinsp--532104276?$FB_TYPE_A_MO_JPG$'
    },
    {
        p_id: '03',
        p_price: '2000',
        p_img: 'https://images.samsung.com/is/image/samsung/p6pim/pk/sm-a042flbdmeb/gallery/pk-galaxy-a04e-sm-a042-sm-a042flbdmeb-537142111?$650_519_PNG$'
    }

]

var getDiv = document.getElementById('getDiv')

for (var i = 0; i < arr.length; i++) {
    var products = arr[i]

    getDiv.innerHTML += `
    
<div class="card m-3" style="width: 18rem;">
     <img src=${products.p_img} class="card-img-top" alt="...">
     <div class="card-body">
    <h5 class="card-title">${products.p_id}</h5>
    <p class="card-text">${products.p_price}</p>
    </div>
</div>
    `
}

























// var getDiv = document.getElementById('abc')


// for(var i=0; i<arr.length; i++){

//     var products = arr[i]

//     var pid = document.createElement('p')
//     pid.innerHTML = products.p_id
//     getDiv.appendChild(pid)

//     var price = document.createElement('p')
//     price.innerHTML = products.p_price
//     getDiv.appendChild(price)


//     var img = document.createElement('img')
//     img.src = products.p_img
//     getDiv.appendChild(img)


// }