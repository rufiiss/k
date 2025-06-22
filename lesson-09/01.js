document.addEventListener('DOMContentLoaded', function () {
  const petShop = document.querySelector('.pet-shop')
  const cart = []
  const cartList = document.getElementById('cart-list')
  const messageBox = document.getElementById('message-box')

  function updateCartDisplay() {
    cartList.innerHTML = ''
    for (let petId of cart) {
      const li = document.createElement('li')
      li.classList.add('pet')
      li.textContent = petId
      cartList.append(li)
    }
  }

  petShop.addEventListener('click', function (event) {
    if (event.target.classList.contains('pet')) {
      if (cart.length >= 3) {
        messageBox.textContent = 'Вы не можете добавить более 3 питомцев'
        return
      }

      cart.push(event.target.id)
      messageBox.textContent = ''
      updateCartDisplay()
    }
  })
})
