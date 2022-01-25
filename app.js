

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  let coosenProduct = products[0]
  const wrapper = document.querySelector(".sliderWrapper");
  const menuItems = document.querySelectorAll(".menuItem");
  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");

  menuItems.forEach((item,index) =>{ //item ne selecteaza fiecare item din menuItems si index ne retine numrul
    item.addEventListener("click", ()=>{ //addEventListener asculta de fiecare data cand se face click pe unul din iteme
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`; //impinge in stanga fiecare imagine cu index-ul respectiv inmultit cu -100 vw(view width)
        
        //change the coosen product
        choosenProduct = products[index]
        

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title ;
        currentProductPrice.textContent = "$" + choosenProduct.price ;
        currentProductImg.src = choosenProduct.colors[0].img ;


        //assign new colors
        currentProductColors.forEach((color,index) =>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
           
        }) ;
     
    });
});
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
    currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{ // parcurge toate marimile si le reseteaza culoarea la alb si negru
            size.style.backgroundColor= "white"
            size.style.color = "black";
            });
            //la apasarea click-ului transforma in negru si alb
        size.style.backgroundColor= "black";
        size.style.color = "white"; 
    })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

productButton.addEventListener("click",()=>{
    payment.style.display = "flex";
})

close.addEventListener("click",()=>{
    payment.style.display = "none";
})