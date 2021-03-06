let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [null, 500] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function filterByPrices(arr, requiredRange) {
    return arr.filter(el => el.prices[0] >= requiredRange[0] && el.prices[1] <= requiredRange[1])
}

function sortByPrices(arr) {
    return arr.sort((a,b) => a.prices[0] - b.prices[0])
}

// filterByPrices(courses, requiredRange1);
// filterByPrices(courses, requiredRange2);
// filterByPrices(courses, requiredRange3);

// sortByPrices(courses)
