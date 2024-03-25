document.addEventListener('DOMContentLoaded', function () {
    var studentInfo = document.getElementById('student-info');
    var studentId = 200552820;
    var studentName = 'Mohammed Ridhwan Kallingal';
    studentInfo.textContent = 'Student ID: ' + studentId + ', Name: ' + studentName;

    var orderBtn = document.getElementById('order-btn');
    orderBtn.addEventListener('click', function () {
        var size = document.getElementById('size').value;
        var toppingsSelect = document.getElementById('toppings');
        var toppings = [];
        for (var i = 0; i < toppingsSelect.options.length; i++) {
            if (toppingsSelect.options[i].selected) {
                toppings.push(toppingsSelect.options[i].value);
            }
        }
        var crust = document.getElementById('crust').value;
        var delivery = document.getElementById('delivery').checked;

        var validationMsg = document.getElementById('validation-msg');

        var isValid = true;
		if ((size === 'small' && (toppings < 0 || toppings > 3)) || (size !== 'small' && (toppings < 0 || toppings > 5))) {
            isValid = false;
            validationMsg.textContent = "Invalid number of toppings for selected pizza size.";
        } else {
            validationMsg.textContent = "";
        }        
        if (isValid) {
            var pizzaOrder = new Pizza(size, toppings, crust, delivery);
            var pizzaDescription = document.createElement('p');
            pizzaDescription.textContent = pizzaOrder.getDescription();
            document.querySelector('.container').appendChild(pizzaDescription);
        }
    });

    class Pizza {
        constructor(size, toppings, crust, delivery) {
            this.size = size;
            this.toppings = toppings;
            this.crust = crust;
            this.delivery = delivery;
        }

        getDescription() {
            var description = 'You ordered a ' + this.size + ' pizza with ' + this.toppings.length + ' topping(s): ' + this.toppings.join(', ') + ' and ' + this.crust + ' crust.';
            
            if (this.delivery) {
                description += ' Delivery is selected.';
            } else {
                description += ' You opted for pickup.';
            }
            return description;
        }
    }
});
