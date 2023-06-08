const getEncodeData = data => {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');
  return formBody;
}

const getFormEncodedData = data => {
  let formData = new FormData();

  for (let key in data) {
    formData.append(key, data[key]);
  }
  return formData;
}

const SERVER_URL = 'https://api.upstores.co/upstore-server-new/wp-admin/admin-ajax.php';

export {getEncodeData, getFormEncodedData, SERVER_URL};
