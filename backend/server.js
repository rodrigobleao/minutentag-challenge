const fastify = require('fastify')();
const path = require('path');

let products = [];
let stockPrice = {};

async function readProductsFile() {
  try {
    const filePath = path.join(__dirname, 'products.js');
    delete require.cache[require.resolve(filePath)];
    products = require(filePath);
  } catch (err) {
    console.error('Failed to read products file:', err);
    throw err;
  }
}

async function readStockPriceFile() {
  try {
    const filePath = path.join(__dirname, 'stock-price.js');
    delete require.cache[require.resolve(filePath)];
    stockPrice = require(filePath);
  } catch (err) {
    console.error('Failed to read stock price file:', err);
    throw err;
  }
}

fastify.get('/api/', async () => {
  await readProductsFile();
  await readStockPriceFile();

  const availableProducts = [];

  for (const product of products) {
    let minPrice = Infinity;
    product.skus.forEach((sku) => {
      const skuInfo = stockPrice[sku.code];
      if (
        skuInfo &&
        skuInfo.stock > 0 &&
        skuInfo.price / 100 < minPrice / 100
      ) {
        minPrice = skuInfo.price;
      }
    });

    if (minPrice !== Infinity) {
      availableProducts.push({
        id: product.id.toString(),
        brand: product.brand,
        price: minPrice,
      });
    }
  }

  return {
    availableProducts,
  };
});

fastify.get('/api/stock-price/:code', async (request, reply) => {
  await readStockPriceFile();
  await readProductsFile();

  const { code } = request.params;

  const product = products.find((prod) => prod.id === parseInt(code));

  if (!product) {
    reply.code(404);
    return { error: 'Product not found' };
  }

  let selectedSku = null;
  const skusData = [];
  product.skus.forEach((sku) => {
    const skuInfo = stockPrice[sku.code];
    if (skuInfo) {
      skusData.push({
        code: sku.code.toString(),
        name: sku.name,
        stock: skuInfo.stock,
        price: skuInfo.price,
      });

      if (!selectedSku || selectedSku.price / 100 > skuInfo.price / 100) {
        selectedSku = {
          code: sku.code.toString(),
          price: skuInfo.price,
        };
      }
    }
  });

  return {
    id: product.id.toString(),
    skus: skusData,
    selectedSku: selectedSku.code,
  };
});

fastify.get('/api/:productId-:productBrand', async (request, reply) => {
  await readProductsFile();
  await readStockPriceFile();

  const { productId, productBrand } = request.params;

  const product = products.find(
    (prod) =>
      prod.id === parseInt(productId) &&
      prod.brand.toLowerCase().replace(/ /g, '-') === productBrand.toLowerCase()
  );

  if (!product) {
    reply.code(404);
    return { error: 'Product not found' };
  }

  return {
    id: product.id.toString(),
    brand: product.brand,
    origin: product.origin,
    information: product.information,
  };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server started on http://localhost:3000');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
