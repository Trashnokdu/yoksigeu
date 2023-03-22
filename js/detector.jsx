let result = fetch("https://podoalforbidden-gtsni.run.goorm.site/api/get/detect?str=" + "시발새끼야")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));