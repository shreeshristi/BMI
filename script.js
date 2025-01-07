const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault(); //to stop submission
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if ( height <=0 || isNaN(height)) {
         results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight<=0 || isNaN(weight)){
        results.innerHTML=`please give a valid weight ${weight}`;
    }
    else{
        const bmi  = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML=`<span>Your BMI is:${bmi}</span>`;

    }
});
