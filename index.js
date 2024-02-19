const allButton = document.querySelectorAll('.seat')
let seat = 4;
let count = 1;
let ticketPrice = 0;
for(const btn of allButton){
    btn.addEventListener('click',function(event){
        event.target.setAttribute('disabled', true);
        const hello = btn.innerText;

        // Validation Only can click 4 seat
        seat = seat - 1;
        if(seat < 0){
            alert('only 4 seat can be selected')
            return
        }
        
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
        document.getElementById('grand-total').innerText = totalSum;
        ticketPrice = ticketPrice + 550;
                     
    })
        
}

function apply(){
 const apply = document.getElementById('apply-btn')
 apply.addEventListener('click',function(){
    const inputText = document.getElementById('input-text').value;
    const couponCodes = inputText.toUpperCase().split(" ").join("");
    if(couponCodes == 'NEW15'){
        const discount = document.getElementById('total-price').innerText;
        const ConvertTotalPrice = parseInt(discount);
            const discount2 = ConvertTotalPrice * 0.15;
            // Discount Price
           const nameTag = document.getElementById('Discount-price')
            const pTag = document.createElement('p')
            pTag.innerText =`Discount price : ${discount2} TK`;
            nameTag.appendChild(pTag)
           
            const totalDiscount = ConvertTotalPrice - discount2;
            const discount3 = document.getElementById('grand-total').innerText = totalDiscount;

            // Hidden full Div
            const applyButton = document.getElementById('remove-div');
            applyButton.classList.add('hidden')

    }else if(couponCodes == 'COUPLE20'){
        const discount = document.getElementById('total-price').innerText;
        const ConvertTotalPrice = parseInt(discount);
            const discount2 = ConvertTotalPrice * 0.20
            // Discount Price
            const nameTag = document.getElementById('Discount-price')
            const pTag = document.createElement('p')
            pTag.innerText =`Discount price : ${discount2} TK`;
            nameTag.appendChild(pTag)

            const totalDiscount = ConvertTotalPrice - discount2;
            const discount3 = document.getElementById('grand-total').innerText = totalDiscount;

              // Hidden full Div
              const applyButton = document.getElementById('remove-div');
              applyButton.classList.add('hidden')

    }else{
        alert('invalid code')
    }
 })

}

apply()

