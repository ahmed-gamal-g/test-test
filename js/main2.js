// let myElement = document.createElement("div")
// let myAttribute = document.createAttribute("data-custom")
// let myText = document.createTextNode("product one")

// console.log(myElement)
// myElement.className = "yamosahel"

// myElement.setAttributeNode(myAttribute)
// myElement.setAttribute("yarab", "yenfa3")
// myElement.appendChild(myText)

// document.body.appendChild(myElement)




// let myElement = document.createElement("div")
// let myAttribute = document.createAttribute("custom-name")
// let myText = document.createTextNode("product one")
// let myComment = document.createComment("this is div")

// myElement.className = "element"
// myElement.setAttributeNode(myAttribute)
// myElement.setAttribute("new-test", "testing")
// myElement.appendChild(myText)
// myElement.appendChild(myComment)
// document.body.appendChild(myElement)
// console.log(myElement)


// let newElement = document.createElement("div")
// let myH3 = document.createElement("h3")
// let myP = document.createElement("p")

// let myh3Text = document.createTextNode("my heading text")
// let mypText = document.createTextNode("my pragraph text")

// // add headingtext to heading
// myH3.appendChild(myh3Text)

// // add heading to newElement
// newElement.appendChild(myH3)

// // add text to myP
// myP.appendChild(mypText)

// // add p to newElement
// newElement.appendChild(myP)

// newElement.className = "product"

// for (let i = 0; i < 100; i++){
//     document.body.appendChild(newElement.cloneNode(true)) //cloneNode(true)to append for loop
// }




// let myElement = document.createElement("div")
// let myAttribute = document.createAttribute("custom")
// let myText = document.createTextNode("product one")

// // creat classnam
// myElement.className = "my-div1"
// // put attribute to element
// myElement.setAttributeNode(myAttribute)
// // put attribute te element (another solution)
// myElement.setAttribute("test", "mytest")
// // put text to element
// myElement.appendChild(myText)
// // put all element to body
// document.body.appendChild(myElement)




// console.log(myElement)

// let myElement2 = document.createElement("div")
// let myh3 = document.createElement("h3")
// let h3Text = document.createTextNode("ahmed gemy")
// let myP = document.createElement("p")
// let pText = document.createTextNode("hello ahmed gemy")

// myElement2.className = "gemy"
// myh3.appendChild(h3Text)
// myElement2.appendChild(myh3)

// myP.appendChild(pText)
// myElement2.appendChild(myP)



// for (let i = 0; i < 100; i++){
//     document.body.appendChild(myElement2.cloneNode(true))
// }


// console.log(myElement2.children)
// console.log(myElement2.children[1])
// console.log(myElement2.children[0])
// console.log(myElement2.childNodes)
// console.log(myElement2.firstChild)
// console.log(myElement2.lastChild)



// let myElement3 = document.createElement("div")
// let myh3 = document.createElement("h3")
// let myh3Text = document.createTextNode("welcom js")
// let myp = document.createElement("p")
// let mypText = document.createTextNode("welcom gemy")

// myh3.appendChild(myh3Text)
// myp.appendChild(mypText)
// myElement3.appendChild(myh3)
// myElement3.appendChild(myp)

// for (let i = 0; i < 100; i++){
//     document.body.appendChild(myElement3.cloneNode(true))
// }









// let mybtn = document.getElementById("btn")

// mybtn.onclick = function () {
//     console.log("clicked")
// }

// document.links[0].onclick = function (event) {
//     console.log(event)
//     // event.preventDefault()
// }

// let myinpt1 = document.getElementById("input1")
// let myinpt2 = document.getElementById("input2")

// myinpt1.onblur = function () {
//     document.links[0].click()
// }



// document.forms[0].onsubmit = function (e) {
//     let userValid = false;
//     let ageValid = false;


//     if (myinpt1.value !== "" && myinpt2.value.length <= 10) {
//         userValid = true
//     }

//     if (myinpt2.value !== "") {
//         ageValid = true
//     }

//     if (userValid === false || ageValid === false) {
//         e.preventDefault();
//     }
// }


// document.images[0].src = "./image/03.jpg"

// console.log(document.images)


// let myLink = document.querySelector(".links");

// console.log(myLink.getAttribute("class"))
// console.log(myLink.getAttribute("href"))

// myLink.setAttribute("class", "gemy")
// myLink.setAttribute("href", "https://instagram.com")
// myLink.setAttribute("title", "insta")

// // console.log(document.getElementsByTagName("p")[0].attributes)

// let myp = document.querySelector(".myp");

// if (myp.hasAttribute("data-src")) {

//     if (myp.getAttribute("data-src") === "") {
//         myp.removeAttribute("data-src")
//     } else {
//         myp.setAttribute("data-src" , "new value")
//     }

// } else {
//     console.log("not found")
// }

// let myElement = document.createElement("div");
// let myh1 = document.createElement("h1")
// let myTexth1 = document.createTextNode("js is advanced languege in programing")
// let mypp = document.createElement("p")
// let mypText = document.createTextNode("welcome to my js page")

// myElement.className = "product"
// myElement.setAttribute("data-custom", "advanced")
// myh1.appendChild(myTexth1)
// mypp.appendChild(mypText)
// myElement.appendChild(myh1)
// myElement.appendChild(mypp)

// // append Element to Body

// for (let i = 0; i < 100; i++){
//     document.body.appendChild(myElement.cloneNode(true))
// }



// console.log(myElement)



// let myDiv = document.querySelector(".div-all")

// console.log(myDiv.children)
// console.log(myDiv.childNodes)

// let mybtn = document.getElementById("btn")
// let myinpt = document.querySelector(".inpt")
// let mysub = document.querySelector(".sub")

// mybtn.onclick = function () {
//     console.log("clicked")
// }


// myinpt.onfocus = function () {
//     myinpt.style.border = "1px solid red"
// }
// myinpt.onblur = function () {
//     myinpt.style.border = "1px dashed red"
// }

// mysub.onclick = function (event) {
//     if (myinpt.value === "" || myinpt.value === "fill input") {
//         myinpt.value = "fill input"
//         myinpt.style.color = "red"
//         event.preventDefault()
//     } else {
//         console.log("not empty")
//     }
// }

let myinpt1 = document.querySelector(".inpt1")
let myinpt2 = document.querySelector(".inpt2")

// document.forms[0].onsubmit = function (e) {
//     let username = false
//     let userage = false
    
//     // console.log(myinpt1.value)
//     // console.log(myinpt1.value.length)
//     if (myinpt1.value !== "" && myinpt1.value.length <= 10) {
//         username = true
//     }

//     if (myinpt2.value !== "") {
//         userage = true
//     }

//     if (username === false || userage === false) {
//         e.preventDefault()
//     }
// }




// document.forms[0].onsubmit = function (e) {
//     let username = false
//     let userage = false

//     if (myinpt1.value !== "" && myinpt1.value.length >=10) {
//         username = true
//     }

//     if (myinpt2 !== "") {
//         userage = true
//     }

//     if (username === false || userage === false) {
//         e.preventDefault()
//     }
// }


// window.onload = function () {
//     myinpt2.focus()
// }


// myinpt1.onblur = function () {
//     // myLink.click()
//     myinpt2.focus()
// }

// let mypp = document.querySelector(".pp")

// mypp.onclick = function () {
//     let newp = mypp.cloneNode(true)
//     newp.innerHTML += " gemy"
//     newp.className = "clone"
//     document.body.appendChild(newp)
// }

// document.addEventListener("click", function (e) {
//     if (e.target.className === "clone") {
//         console.log("iam cloned")
//     }
// })


// //                  Start Header
// let header = document.createElement("header"),
//   cont = document.createElement("div"),
//   logo = document.createElement("p"),
//   textp = document.createTextNode("Elzero"),
//   ul = document.createElement("ul");

// for (let i = 1; i <= 4; i++) {
//   let li = document.createElement("li");
//   li.style.cssText =
//     "list-style: none; margin-right: 20px; opacity: 0.6; font-weight: bold;";
//   switch (i) {
//     case 1:
//       li.innerHTML = "Home";
//       break;
//     case 2:
//       li.innerHTML = "About";
//       break;
//     case 3:
//       li.innerHTML = "Service";
//       break;
//     case 4:
//       li.innerHTML = "Contact";
//       break;
//   }
//   ul.appendChild(li);
// }
// logo.appendChild(textp);
// logo.style.cssText = "color: green; font-weight: 800; font-size: 22px;";
// cont.appendChild(logo);
// ul.style.display = "flex";
// cont.appendChild(ul);
// cont.style.cssText =
//   "display: flex; align-items: center; justify-content: space-between;";
// header.appendChild(cont);
// document.body.prepend(header);

// //

// let Header = document.createElement("header")
// let cont = document.createElement("div")
// let myP = document.createElement("p")
// let mypText = document.createTextNode("Elzero")
// let ul = document.createElement("ul")

// myP.appendChild(mypText)
// myP.style.cssText = "color:green; font-size:20px"
// cont.appendChild(myP)
// ul.style.display = "flex"
// cont.appendChild(ul)
//  cont.style.cssText ="display: flex; align-items: center; justify-content: space-between;";
// Header.appendChild(cont)
// document.body.appendChild(Header)

// for (let i = 0; i <= 4; i++){
//     let li = document.createElement("li")
//     li.style.cssText = "color:red; margin-right:20px; list-style:none "
//     switch (i) {
//         case 1:
//             li.innerHTML = "Home"
//             break
//         case 2:
//             li.innerHTML = "About us"
//             break
//         case 3:
//             li.innerHTML = "service"
//             break
//         case 4:
//             li.innerHTML = "contact"
//             break
//     }
//     ul.appendChild(li)
// }


// console.log(ul)
// console.log(Header)


// let header = document.createElement("Header")
// let cont = document.createElement("div")
// let myp = document.createElement("p")
// let mypText = document.createTextNode("ElGemy")
// let ul = document.createElement("ul")



// for (let i = 0; i <= 4; i++){
//     let li = document.createElement("li")
//     li.style.cssText = "margin-right:20px; list-style:none;"
    
//     switch (i) {
//         case 1:
//             li.innerHTML = "Home"
//             break
//         case 2:
//             li.innerHTML = "About Us"
//             li.style.cssText = "color:blue; font-weight:bold; margin-right: 10px; list-style:none;"
//             break
//         case 3:
//             li.innerHTML = "Servies"
//             break
//         case 4:
//             li.innerHTML = "Contact"
//             break
//     }

//     ul.appendChild(li)
// }


// myp.appendChild(mypText)
// myp.style.cssText = "color: red; font-size: 18px; margin-top: 10px "
// cont.appendChild(myp)
// ul.style.cssText = "color: green; display: flex; "
// cont.appendChild(ul)
// cont.style.cssText = "display: flex; justify-content: space-around"
// header.appendChild(cont)

// document.body.appendChild(header)




// start Header
let Header = document.createElement("Header")
// let divHeader = document.createElement("div")
let divLogo = document.createElement("div")
let Logo = document.createElement("h2")
let TextLogo = document.createTextNode("Elgemy")
let ul = document.createElement("ul")




for (let i = 0; i <= 4; i++){
    let li = document.createElement("li")
    li.style.cssText = "list-style: none; margin-right: 20px; color: blue"

    switch (i) {
        case 1:
            li.innerHTML = "home"
            break
        case 2:
            li.innerHTML = "about"
            break
        case 3:
            li.innerHTML = "service"
            break
        case 4:
            li.innerHTML = "contact"
    }

    ul.appendChild(li)
}

Logo.appendChild(TextLogo);
divLogo.appendChild(Logo)


Header.appendChild(divLogo)
Header.appendChild(ul)

ul.style.cssText = "display: flex;"
Header.style.cssText = `display: flex;
 justify-content: space-around;
 align-items: center;
 box-shadow: 2px 2px 5px #00000047;
 background-color: white;

`

document.body.appendChild(Header)

// end Header

let divAll = document.createElement("div")

let div1all = document.createElement("div")

let div1_source = document.createElement("div")
let div1 = document.createElement("div")
let h2_div1 = document.createElement("h2")
let p_div1 = document.createElement("p")
let text_h2_div1 = document.createTextNode("1")
let text_p_div1 = document.createTextNode("product")

let div2_source = document.createElement("div")
let div2 = document.createElement("div")
let h2_div2 = document.createElement("h2")
let p_div2 = document.createElement("p")
let text_h2_div2 = document.createTextNode("1")
let text_p_div2 = document.createTextNode("product")

let div3_source = document.createElement("div")
let div3 = document.createElement("div")
let h2_div3 = document.createElement("h2")
let p_div3 = document.createElement("p")
let text_h2_div3 = document.createTextNode("1")
let text_p_div3 = document.createTextNode("product")


let div4 = document.createElement("div")
let div5 = document.createElement("div")


p_div1.appendChild(text_p_div1);
h2_div1.appendChild(text_h2_div1);
div1.appendChild(h2_div1);
div1.appendChild(p_div1);
div1.style.cssText = `
background-color: white;
text-align: center; 
`
div1_source.appendChild(div1);
// div1.style.cssText = "text-align: center;"

p_div2.appendChild(text_p_div2);
h2_div2.appendChild(text_h2_div2);
div2.appendChild(h2_div2);
div2.appendChild(p_div2);
div2.style.cssText = `
background-color: white;
text-align: center; 
`
div2_source.appendChild(div2);

p_div3.appendChild(text_p_div3);
h2_div3.appendChild(text_h2_div3);
div3.appendChild(h2_div3);
div3.appendChild(p_div3);
div3.style.cssText = `
background-color: white;
text-align: center; 
`
div3_source.appendChild(div3);

divAll.appendChild(div1_source)
divAll.appendChild(div2_source)
divAll.appendChild(div3_source)
divAll.style.cssText = `margin: auto;
background-color: red;
width: 80%;
height: 200px;
margin-top: 20px;
display: flex;
justify-content: space-around


`


// document.body.appendChild(div1_source)
// document.body.appendChild(div2_source)
document.body.appendChild(divAll)