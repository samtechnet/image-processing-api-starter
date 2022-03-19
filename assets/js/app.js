const width = document.getElementById('width');
const height = document.getElementById('height');
const ImageName = document.getElementById('imageName');
const myForm = document.getElementById('myForm');
const submit = document.getElementById('submit')

console.log(height);
console.log(width);

// function myFunction() {
    
//   }

let url = window.location.href;


// function loadEvent() {
//     form.addEventListener('DOMContentLoaded', function ()  {
//         e.preventDefault();
//         const listOfImages = [
//             'encenadaport',
//         'fjord',
//         'icelandwaterfall',
//         'palmtunnel',
//         'santamonica'
//         ]
//         listOfImages.forEach((listOfImages) => {
//             imageName.innerHTML += `<option>${listOfImages}</option>`;
//         })
        
//     })
   
    
// }

// SubmitEvent.addEventListener('submit', () => {
//     const
// }) 

myForm.addEventListener('click', myFunction)

function myFunction() {
  
  //document.getElementById("click").innerHTML = alert('form submitted successfully');
  let urL = new URL(url);
    let imageName = urL.searchParams.get("imageName");
    let width = urL.searchParams.get("width");
    let height = urL.searchParams.get("height");
    console.log(imageName, width, height);
     let url_string = `${url}/imageName=${ImageName}&width=${width}&height=${height}`;
  // // Set up our request
  // XHR.open( 'GET', 'http://localhost:3002/apis/processor' );

  //  // Add the required HTTP header for form data POST requests
  // XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
  // // Finally, send our data.
  // XHR.send( url_string );
    
}

//console.log(addEventListener())
// window.onload = function () {
    
//     //let url_string = `${url}.toLowerCase()`;
//     let urL = new URL(url_string);
//     let imageName = urL.searchParams.get("imageName");
//     let width = urL.searchParams.get("width");
//     let height = urL.searchParams.get("height");
//     console.log(imageName, width, height);
//     url = `${url}/imageName=${imageName}&width=${width}&height={height}`

    
    

// }




