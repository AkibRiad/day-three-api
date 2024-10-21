const user = {
    id:1,
    name:'akib',
    job:'student'
}
const stringified =JSON.stringify(user);

// console.log(user);
// console.log(stringified);



const shop ={
    name:'alia',
    address:{
        street:'kochu khet',
        district:'bd'
    },
    products:['a','b','c','d'],
    revenue: 50000,
    isOpen: true,
    isNew: false
}
const shop2 = JSON.stringify(shop)
// console.log(shop2)
const oldShop = JSON.parse(shop2)
console.log(oldShop)