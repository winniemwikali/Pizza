const order = document.getElementById("btn");
    order.addEventListener("click", function(){
        
        var pSize = parseInt(document.getElementById("pizzaSize").value);
        var pCrust = parseInt(document.getElementById("pizzaCrust").value);
        var pToppings = parseInt(document.getElementById("pizzaToppings").value);
        var quant = parseInt(document.getElementById("quantity").value);
            
        var totalCost = (pSize + pCrust + pToppings) * quant;

        alert(`Your order has been received amounting to ${totalCost}`);
        prompt(`please enter your location.`);
        alert(`Your order will be delivered in a few, please have some ksh.300 together with total amount for delivery.`)

        if (delivery.checked) {
            
        } else {
            
        }
        prompt(``)

        

    
    });

