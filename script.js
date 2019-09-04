const submit = document.querySelector("#submit")

submit.addEventListener("click", function(){

const item = document.querySelector("#item").value
const store =  document.querySelector("#store").value

let finishedWishlist = (`I Would Like A ${item} and Ill get it at ${store}`)
console.log(finishedWishlist)

let wishlist = document.querySelector("#wishlist")

wishlist.innerHTML += finishedWishlist
})
