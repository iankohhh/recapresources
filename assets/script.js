function downloadBuilderSlides() {
    // Replace 'your-api-endpoint' with the actual URL of your API Gateway endpoint
    var apiEndpoint = 'https://xlzxqbhq6g.execute-api.ap-southeast-1.amazonaws.com/dev/download/recapbuilderslides';

    // Make a GET request to the API endpoint
    fetch(apiEndpoint)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            // Extract the URL directly from the "body" property
            var url = data.body;

            // Create a hidden link and trigger the download
            var link = document.createElement('a');
            link.href = url;
            link.download = 'recapBuilderSlides.zip'; // Set the desired filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => console.error('Error:', error));
}

function downloadExecSlides() {
    // Replace 'your-api-endpoint' with the actual URL of your API Gateway endpoint
    var apiEndpoint = 'https://xlzxqbhq6g.execute-api.ap-southeast-1.amazonaws.com/dev/download/recapexecslides';

    // Make a GET request to the API endpoint
    fetch(apiEndpoint)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            // Extract the URL directly from the "body" property
            var url = data.body;

            // Create a hidden link and trigger the download
            var link = document.createElement('a');
            link.href = url;
            link.download = 'recapBuilderSlides.zip'; // Set the desired filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => console.error('Error:', error));
}

function downloadCheatsheet() {
    // Replace 'your-api-endpoint' with the actual URL of your API Gateway endpoint
    var apiEndpoint = 'https://xlzxqbhq6g.execute-api.ap-southeast-1.amazonaws.com/dev/download/cheatsheet';

    // Make a GET request to the API endpoint
    fetch(apiEndpoint)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            // Extract the URL directly from the "body" property
            var url = data.body;

            // Create a hidden link and trigger the download
            var link = document.createElement('a');
            link.href = url;
            link.download = 'cheatsheet.pdf'; // Set the desired filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => console.error('Error:', error));
}
