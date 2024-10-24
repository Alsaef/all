fetch('comment.json')
  .then(function (response) {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(function (data) {
    console.log(data); // Process the fetched data here
  })
  .catch(function (err) {
    console.log('Error: ' + err);
  });





 



