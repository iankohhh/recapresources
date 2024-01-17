function downloadFile() {
    // Replace 'your-api-endpoint' with the actual URL of your API Gateway endpoint
    var apiEndpoint = 'https://ja9vw9anx2.execute-api.ap-southeast-1.amazonaws.com/test/builder';

    // Make a GET request to the API endpoint
    fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(url => {
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