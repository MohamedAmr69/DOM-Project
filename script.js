    // Function to increment the quantity of the cart items
    function incrementButton(){
        let element = document.getElementById('quantityInput');
        let value = element.innerHTML;
        ++value;
        console.log(value);
        document.getElementById('quantityInput').innerHTML = value;
        updateTotalPrice();
        
    }
    // Function to decrement the quantity of the cart items
    function decrementButton(){
        let element = document.getElementById('quantityInput');
        let value = element.innerHTML;
        --value;
        console.log(value);
        document.getElementById('quantityInput').innerHTML = value;
    
        if (value < 0) {
            quantityInput.innerHTML = 0 ;
        }
        updateTotalPrice();
    }

    // Function to reset the quantity to zero
    function deleteItem(element) {
        var quantitySpan = document.getElementById('quantityInput');
        quantitySpan.textContent = '0'; // Reset the quantity text content to 0
        updateTotalPrice();
    }
    //Function to update and calculate the price of the cart 
    function updateTotalPrice() {
        let productPriceElement = document.querySelector('.product-price');
        let productPrice = parseInt(productPriceElement.innerHTML.replace('L.E', ''));
        let quantityElement = document.getElementById('quantityInput');
        let quantity = parseInt(quantityElement.innerHTML);
        let totalPriceElement = document.querySelector('.cart-total-price');
        let totalPrice = productPrice * quantity;
        totalPriceElement.innerHTML = totalPrice + ' L.E';
    }

//Function to toggle the heart icon's color
const btnvar1 = document.getElementById('btnh1');
    
    function Toggle1(){
        if (btnvar1.style.color =="red") {
            btnvar1.style.color = "grey"
            }
            else{
            btnvar1.style.color = "red"
        }
            }