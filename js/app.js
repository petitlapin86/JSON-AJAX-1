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
    // Use XMLHttpRequest method open to initialize newly created request or reinitialize and existing request

    xhr.open('get', 'data/college.json', true); //params: method, location, asynchronous request
    // onreadystatechange method is triggered every time the ready state changes on the page
    xhr.onreadystatechange = function() {
        if((xhr.readyState === 4) && xhr.status === 200){
            const response = JSON.parse(xhr.responseText); //response from XMLHttpRequest
            let newTable = createTable(response);
            let tableString = newTable.join('');
            btn.insertAdjacentHTML('beforebegin', `<table>${tableString}</table>`);
            btn.style.display = 'none';
        }
    };
    // Open initializes the request, and send actually sends it
    // Automatic Trashcan analogy: open is equivalent to trashcan opening and send is actually throwing something in the trash
    xhr.send();
};

btn.addEventListener('click', getDegreeData); //listen for users click of the button
