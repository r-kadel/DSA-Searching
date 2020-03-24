/// 1
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using
// the recursive binary search algorithm, identify the sequence
// of numbers that each recursive call will search to try and find 8.

// The binary search will first go to 11, which is higher so then then will target
// 5 then 6 then eventually get to 8, because of the even numbers and use
// of math.floor its not quite as fast as it could have been

// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the
// recursive binary search algorithm, identify the sequence
//  of numbers that each recursive call will search to try and find 16.

// the search will first go to 11, which is lower, then 15, then 17
// which is higher than the target number and return -1 as it is not in the array

//3 Booksearch

// const books = [
//   { deweyNum: '000.13', title: 'book1' },
//   { deweyNum: '001.13', title: 'book2' },
//   { deweyNum: '020.13', title: 'book3' },
//   { deweyNum: '300.13', title: 'book4' },
//   { deweyNum: '430.13', title: 'book5' },
//   { deweyNum: '500.13', title: 'book6' }
// ];

// function deweyFind(
//   deweyNum,
//   title,
//   library,
//   start = 0,
//   end = library.length - 1
// ) {
//   if (start > end) {
//     return -1;
//   }

//   const index = Math.floor((start + end) / 2);
//   const book = library[index];

//   if (parseFloat(book.deweyNum) === deweyNum) {
//     if (book.title === title) {
//       return index;
//     }
//     return -1;
//   } else if (parseFloat(book.deweyNum) < deweyNum) {
//     return deweyFind(deweyNum, title, library, index + 1, end);
//   } else if (parseFloat(book.deweyNum) > deweyNum) {
//     return deweyFind(deweyNum, title, library, start, index - 1);
//   }
// }

//7 Profit

// function maxProfit(arr) {
//   let profit = -Infinity;
//   let buy = arr[0];
//   let currentPrice, currentProfit;

//   for (let i=1; i<arr.length; i++) {
//     currentPrice = arr[i];
//     currentProfit = currentPrice - buy;

//     if (currentProfit > profit) {
//       profit = currentProfit;
//     }
//     if (currentPrice < buy) {
//       buy = currentPrice;
//     }
//   }

//   return profit;
// }

// console.log(maxProfit([128,97,121,123,98,97,105]));
