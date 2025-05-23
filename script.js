//your JS code here. If required.

document.getElementById('btn').addEventListener('click',function(){
    const outputDiv=document.getElementById('output')
    const delay = document.getElementById('delay').value.trim()


   outputDiv.textContent="";
   if(isNaN(delay)){
        outputDiv.textContent = "Please enter a valid number.";
        return;
   }

   function promise1(text,delay) {
    return new Promise((resolve) => {
        
        setTimeout(() => {
            const text = document.getElementById('text').value
            const delay = document.getElementById('delay').value.trim()
            document.getElementById('output').textContent = `${text}`
            resolve(text)
        }, delay);
    })
}
 
promise1(text,delay)
})





        