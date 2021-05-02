//Get to retrieve json

async function getRequest(idNum) {
  let aJson;
  await fetch(`http://localhost:3050/group/${idNum}`)
    .then(res => res.json())
    .then(json => {
        console.log(json);
        aJson = json;
    })
    .catch(e => {
      console.log("Error");
    })
    return aJson;
}

//Post to write to db
/*
function postRequest(json) {
  fetch('http://localhost:3050/group/add', {
    method:'POST',
    body: json
  })
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
*/
function postRequest(json) {
  
  let aJson;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");


  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: json,
    redirect: 'follow'
  };


  fetch("http://localhost:3050/group/add", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result);
      aJson = result;
    })
    .catch(error => console.log('error', error));

  return aJson;
  }



export {getRequest, postRequest}
