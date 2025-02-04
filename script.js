let refreshBtn = document.querySelector('.refresh-button')
let quoteWrapper = document.querySelector('.quote-wrapper')
let loaderText = document.querySelector('.loader')


function showLoader(){
    loaderText.classList.add('show')
    quoteWrapper.classList.add('hide')
}

function removeLoader(){
    loaderText.classList.remove('show')
    quoteWrapper.classList.remove('hide')
}
//fetch quote from server
function fetchQuote(){
showLoader()
fetch('https://quotes-api-self.vercel.app/quote')
.then(response => response.json())
.then(data=>{
    if(data){
        removeLoader()
        displayQuote(data)
    }
})
.catch(error=>console.error('Error:',error))
}

//to display quote
function displayQuote(getQuote){
console.log(getQuote);
quoteWrapper.innerHTML = `
<div class="quote-item">
<p class="quote">"${getQuote.quote}"</p>
<p class="author"> by-${getQuote.author}</p>
</div>
`


}

refreshBtn.addEventListener('click',()=>{
    fetchQuote()
})