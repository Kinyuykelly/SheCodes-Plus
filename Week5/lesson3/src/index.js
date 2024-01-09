      
      function showComments(response){ 
        console.log(response)
        console.log(response.data[0].email);
      }
      let APIUrl = "https://jsonplaceholder.typicode.com//comments?postId=1"
      axios.get(APIUrl).then(showComments);