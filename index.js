const allButton = document.querySelectorAll('.seat')
let count = 1;
for(const btn of allButton){
    btn.addEventListener('click',function(){
        // Seat count and increase one by one seat
        const seatCount = parseFloat(document.getElementById('seat-count').innerText);
        const addSeat= seatCount + count;
        document.getElementById('seat-count').innerText = addSeat;

        // Manus one by one seat
        const seatMinus = parseFloat(document.getElementById('minus-seat').innerText);
        const removeSeat = seatMinus - count;
        document.getElementById('minus-seat').innerText = removeSeat;

        
        
        
        
    })
        
}