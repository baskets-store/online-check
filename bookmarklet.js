//bookmarklet

javascript:(function()%7Bvar%20script%20%3D%20document.createElement('script')%3Bscript.src%20%3D%20%22https%3A%2F%2Funpkg.com%2Fobject-exporter%403.2.1%2Fdist%2Fobjectexporter.min.js%22%3Bdocument.getElementsByTagName('head')%5B0%5D.appendChild(script)%3Bconst%20products%20%3D%20%5B%5D%3Bconst%20exportData%20%3D%20%5B%5D%3Blet%20pages%20%3D%20%5B%5D%3Basync%20function%20getHiddenProducts()%20%7Bawait%20fetch('https%3A%2F%2Fbaskets.webshopapp.com%2Fadmin%2Fproducts.json').then(data%20%3D%3E%20data.json()).then(data%20%3D%3E%20pages.push(data.links.pages))%3Bfor%20(let%20i%20%3D%201%3B%20i%20%3C%20pages%5B0%5D%20%2B%201%3B%20i%2B%2B)%20%7Bawait%20fetch(%60https%3A%2F%2Fbaskets.webshopapp.com%2Fadmin%2Fproducts.json%3Fpage%3D%24%7Bi%7D.json%60).then(data%20%3D%3E%20data.json()).then(data%20%3D%3E%20products.push(data.products))%3B%7D%3Bproducts.forEach(setProducts%20%3D%3EsetProducts.forEach(product%20%3D%3E%20%7Bif%20(product.visibility%20%3D%3D%20%22hidden%22)%20%7BexportData.push(%7Bname%3A%20product.en.fulltitle%2Curl%3A%20%60https%3A%2F%2Fbaskets.webshopapp.com%2Fadmin%2Fproducts%2F%24%7Bproduct.id%7D%60%7D)%7D%7D))%3Bawait%20objectExporter(%7Bexportable%3A%20exportData%2Ctype%3A%20'csv'%2CfileName%3A%20'online-check'%2Cheaders%3A%20%5B%22Name%22%2C%20%22URL%22%5D%2C%7D)%3B%7DgetHiddenProducts()%7D)()