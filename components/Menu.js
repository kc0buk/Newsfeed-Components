/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

const header = document.querySelector(`.header`)
const menuMaker =  arr => {
  const menuButton = document.querySelector(`.menu-button`)
  const menuDiv = document.createElement(`div`)
  menuDiv.classList.add(`menu`)
  menuDiv.id = `menu`
  menuButton.appendChild(menuDiv)
  const menuList = document.createElement(`ul`)
  menuDiv.appendChild(menuList)
  arr.forEach( item => {
        let list = document.createElement(`li`)
        list.textContent = item
        menuList.appendChild(list)
      })
  menuButton.addEventListener(`click`, () => {
    // console.log(a.target)
    menuDiv.classList.toggle(`menu--open`)
  })
  // console.log(menuDiv)
  return menuDiv
}

// console.log(menuMaker())

header.appendChild(menuMaker(menuItems))
const tween = gsap.from(`.menu--open`, {
    duration: 2.5,
    paused: true,
    reversed: true
  })
document.querySelector(`.menu--open`).addEventListener(`click`, () => {
  tween.play();
})

