petShop.addEventListener('click', function (event) {
  // Проверяем, что клик был по кнопке питомца
  if (event.target.classList.contains('pet')) {
    const petId = event.target.id

    if (cart.length >= 3) {
      messageBox.textContent = 'Вы не можете добавить более 3 питомцев'
      return
    }

    cart.push(petId)
    messageBox.textContent = ''
    updateCartDisplay()
  }
})
