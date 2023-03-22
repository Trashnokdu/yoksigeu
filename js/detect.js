export function getfor(str){
    
    let result = fetch("https://podoalforbidden-gtsni.run.goorm.site/api/get/detect?str=" + str)
    .then(response => response.json())
    .then(data)
    .catch(error => console.error(error));
    return data;
}