const btn = document.querySelector('button'); //create a variable for the html button

// MY FUNCTION TO DISPLAY JSON
function createTable(jsonObject) {
    let tableArray =[]; //empty array to start
    jsonObject.degrees.forEach(function(property){ //iterate through json object (which is called degrees)
        tableArray.push( //and push that data into an array
            `<tr>
                <td>${property.School}</td>
                <td>${property.Program}</td>
                <td>${property.Type}</td>
                <td>${property.Year}</td></tr>`); //telling my function to display each key/value pair
    });
    return tableArray; //return the complete table
}

const getDegreeData = () => {
    const xhr = new XMLHttpRequest(); // Create XML request object
    xhr.open('get', 'data/college.json', true); //params: method, location, asynchronous request
    xhr.onreadystatechange = function() { //this is triggered each time the state changes on the page i think
        if((xhr.readyState === 4) && xhr.status === 200){
            const response = JSON.parse(xhr.responseText); //store response from XMLHttpRequest
            let newTable = createTable(response); //call create table function and fill with the json "response"
            let tableString = newTable.join('');
            btn.insertAdjacentHTML('beforebegin', `<table>${tableString}</table>`);
            btn.style.display = 'none'; //hide the button
        }
    };
    xhr.send(); //send the request
};

btn.addEventListener('click', getDegreeData); //listen for users click of the button
