let menu = [
    [
        {item: "Sausage and Egg Biscuit", price: 3.69},
        {item: "Bacon and Egg Biscuit", price: 3.49},
        {item: "Ham and Egg Biscuit", price: 3.29}
    ],
    [
        {item: "Fried Wonton", price: 5.79},
        {item: "Chicken Skewer", price: 4.39},
        {item: "Fried Dumpling", price: 7.99},
        {item: "Fried Baby Shrimp", price: 9.99}
    ],
    [
        {item: "Chicken Tanduri", price: 18.49},
        {item: "Wheat Paratha", price: 15.49},
        {item: "Dhal Vaat", price: 14.29},
        {item: "Roti Sabji", price: 17.49},
        {item: "Chilli Basil Checken", price: 19.99}
    ],
    
];

for (let i = 0; i < menu.length; i++) {
    console.log(`This is Meal ${i + 1}`);
    console.log('------------------');
    for (let j = 0; j < menu[i].length; j++) {
        console.log(menu[i][j].item);
    } 
}













// function getMealCategory(meal) {
//     console.log(meal);

// }
// let breakfast = [];
// let lunch = [];
// let dinner = [];
// console.log(breakfast);
// console.log(lunch);
// console.log(dinner);


// function menuObj(arg) { console.log(arg.breakfast);
// }
// menu.forEach(menuObj);




  // if (i == 0) {
    //     breakfast.push(menu[i]);
    // }
    // console.log(i);
    // if (i == 1) {
    //     lunch.push(menu[i]);
    // }
    // if (i == 2) {
    //     dinner.push(menu[i]);
    // }
// let meal = [];
// console.log(menu[1]);
// menu.forEach((meal) => {
//     console.log(meal)
// });
// menu.filter(;
// console.log(menu);
// let menucol = [];
// console.log(menucol);
// function displayMenu(menuObj) {
//     menucol.push(menuObj);
// }
// menu.forEach(displayMenu);
