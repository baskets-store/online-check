var script = document.createElement('script');
script.src = "https://unpkg.com/object-exporter@3.2.1/dist/objectexporter.min.js";
document.getElementsByTagName('head')[0].appendChild(script);

const products = [];
const exportData = [];
let pages = [];

async function getHiddenProducts() {
    await fetch('https://baskets.webshopapp.com/admin/products.json').then(data => data.json()).then(data => pages.push(data.links.pages));

    for (let i = 1; i < pages[0] + 1; i++) {
        await fetch(`https://baskets.webshopapp.com/admin/products.json?page=${i}.json`).then(data => data.json()).then(data => products.push(data.products));

    }

products.forEach(setProducts =>
    setProducts.forEach(product => {
        if (product.visibility == "hidden") {
            exportData.push({
                name: product.en.fulltitle,
                // brand: product.brand.title,
                url: `https://baskets.webshopapp.com/admin/products/${product.id}`

            })
        }
    })
)

await objectExporter({
    exportable: exportData,
    type: 'csv',
    fileName: 'export',
    headers: ["Name", "URL"],
  })


}
getHiddenProducts();


// async function getHiddenProducts () {

// }

// getHiddenProducts();