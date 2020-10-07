// const form = document.querySelector(".js-feedback-form");
// const textarea = document.querySelector("textarea");
// console.log(form);
// console.log(textarea);

// textarea.addEventListener("input", (event) => {
//   let textMsg = event.target.value;
//   let msg = localStorage.getItem("msg");
//   if (msg == "") {
//     localStorage.setItem("msg", textMsg);
//   }
//   //   else {
//   //   }
// });

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   localStorage.removeItem("msg");
// });

// -----------------------

// let user = {
//     name: 'Sara',
//     age: 30,
//     status: 'admin',
// }
// let orders = {
//     id: 'vSFGFG2352534',
//     status: 'complete',
// }
// function mYtoSting(obj) {
//     return `${obj.name}, ${obj.age}, ${obj.status}, ${obj.adress} `
// }
// console.log((mYtoSting(user)))
// console.log(typeof user)
// JSON
// JSON.parse()
// let userToString = JSON.stringify(user);
// let userParsed = JSON.parse(userToString)
// // console.log(typeof userToString)
// console.log(typeof userParsed)
// console.log(localStorage)
// getItem: ƒ getItem()
// removeItem: ƒ removeItem()
// setItem: ƒ setItem()
// localStorage.setItem('userName', 'Vova');
// localStorage.setItem('pizza', 'Taysty');
// localStorage.setItem('avocado', 'chilly');
// let strUser = JSON.stringify(user)
// let userItemKey = localStorage.setItem('user', JSON.stringify(user))
// let ordersItemKey = localStorage.setItem('orders', JSON.stringify(orders));
// let itemfromLocalStorage = localStorage.getItem(user);
// let ordersFromLocalStorage = localStorage.getItem('orders')
// // console.log(itemfromLocalStorage)
// localStorage.removeItem('orders')
// console.log(ordersFromLocalStorage)
// localStorage.clear()
{
  /* <form class="feedback-form js-feedback-form">
<div class="five columns">
    <div>
        <label for="exampleNameInput">Your Name</label>
        <input
            name="name"
            class="u-full-width"
            type="text"
            placeholder="User name"
            id="exampleNameInput"
        />
    </div>
    <div>
        <label for="exampleMessage">Message</label>
        <textarea
            name="message"
            class="u-full-width"
            placeholder="Hi Dave …"
            id="exampleMessage"
            cols="30"
            rows="10"
        ></textarea>
    </div>
</div>
<input class="button-primary" type="submit" value="Submit" />
</form> */
}
let form = document.querySelector(".js-feedback-form");
let textarea = document.querySelector("textarea");
textarea.addEventListener("input", (event) => {
  let textMsg = event.target.value;
  let msg = localStorage.getItem("msg");
  if (msg !== "") {
    localStorage.setItem("msg", textMsg);
  }
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event.currentTarget.elements.userEmail)
  // console.log(event.currentTarget.elements.message)
  // let form = event.currentTarget.elements;
  // let textArea = form.message;
  // let textAreaInput = textArea.value;
  // console.log(textAreaInput)
  // new FormData();
  // console.log(new FormData())
  // event.currentTarget.elements
  let userName = event.currentTarget.elements.userName.value;
  localStorage.setItem("userName", userName);
  console.log(userName);
  if (localStorage.getItem("msg")) {
    localStorage.removeItem("msg");
  }
  event.currentTarget.reset();
});
