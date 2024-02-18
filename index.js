const allButton = document.querySelectorAll('.seat')
let count = 1;
let ticketPrice = 0;
for(const btn of allButton){
    btn.addEventListener('click',function(){
        const hello = btn.innerText;
        btn.style.background = '#1DD100'
        btn.style.color = 'white'
        
        // Seat count and increase one by one seat
        const seatCount = parseFloat(document.getElementById('seat-count').innerText);
        const addSeat= seatCount + count;
        document.getElementById('seat-count').innerText = addSeat;

        // Manus one by one seat
        const seatMinus = parseFloat(document.getElementById('minus-seat').innerText);
        const removeSeat = seatMinus - count;
        document.getElementById('minus-seat').innerText = removeSeat;

        // Show The Display Ticket C2 and economy
        const append = document.getElementById('append-child');
        const div = document.createElement('div')
    
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
    
        p1.innerText = hello;
        p2.innerText = ('Economoy');
        p3.innerText = ('550')
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        div.classList.add('flex','justify-around')
        append.appendChild(div)

        //Total Price Calculate
        const totalPrice =parseFloat(document.getElementById('total-price').innerText);
        const totalSum = totalPrice + 550;
        document.getElementById('total-price').innerText = totalSum;   
        ticketPrice = ticketPrice + 550;
        
        

        
    })
        
}

// Discount price and use to coupon code
const applyButton = document.getElementById('apply-btn')
applyButton.addEventListener('click',function(){
    const inputText = document.getElementById('input-text');
    const inputValue = inputText.value.split(' ').join('').toUpperCase();
    const totalGrand = parseFloat(document.getElementById('grand-total'));
    // Condition 
    if(inputValue === 'NEW15'){
        const discountPrice = ticketPrice * 0.15;
        const result = ticketPrice - discountPrice;
        document.getElementById('grand-total').innerText = result
            

    }else{
            alert('invalid Coupon')
        }

   
})
