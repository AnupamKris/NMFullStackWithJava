<template>
  <div class="cart page">
    <h1>Cart</h1>
    <div class="product-container">
      <div class="product-card">
        <img src="/g102.png" alt="Product 1" />
        <div class="product-title">G102</div>
        <div class="product-price">1295</div>
        <div class="quantity-container">
          <div class="quantity-control" onclick="updateQuantity('minus', 1)">
            -
          </div>
          <div id="quantity-1">1</div>
          <div class="quantity-control" onclick="updateQuantity('plus', 1)">
            +
          </div>
        </div>
      </div>

      <div class="product-card">
        <img src="/kb.png" alt="Product 2" />
        <div class="product-title">Logitech G512 Mechanical Keyboard</div>
        <div class="product-price">9468</div>
        <div class="quantity-container">
          <div class="quantity-control" onclick="updateQuantity('minus', 1)">
            -
          </div>
          <div id="quantity-1">1</div>
          <div class="quantity-control" onclick="updateQuantity('plus', 1)">
            +
          </div>
        </div>
      </div>

      <div class="product-card">
        <img src="/odysseyg6.avif" alt="Product 3" />
        <div class="product-title">Samsung Odyssey G6</div>
        <div class="product-price">41999</div>
        <div class="quantity-container">
          <div class="quantity-control" onclick="updateQuantity('minus', 1)">
            -
          </div>
          <div id="quantity-1">1</div>
          <div class="quantity-control" onclick="updateQuantity('plus', 1)">
            +
          </div>
        </div>
      </div>

      <div class="product-card">
        <img src="/shifter.webp" alt="Product 4" />
        <div class="product-title">Logitech G Driving Force Shifter</div>
        <div class="product-price">6299</div>
        <div class="quantity-container">
          <div class="quantity-control" onclick="updateQuantity('minus', 1)">
            -
          </div>
          <div id="quantity-1">1</div>
          <div class="quantity-control" onclick="updateQuantity('plus', 1)">
            +
          </div>
        </div>
      </div>

      <div class="product-card">
        <img src="/odysseyg7.avif" alt="Product 5" />
        <div class="product-title">Samsung Odyssey G7</div>
        <div class="product-price">50199</div>
        <div class="quantity-container">
          <div class="quantity-control" onclick="updateQuantity('minus', 1)">
            -
          </div>
          <div id="quantity-1">1</div>
          <div class="quantity-control" onclick="updateQuantity('plus', 1)">
            +
          </div>
        </div>
      </div>

      <div class="product-card">
        <img src="/xbox.png" alt="Product 6" />
        <div class="product-title">XBOX Controller</div>
        <div class="product-price">4599</div>
        <div class="quantity-container">
          <div class="quantity-control" onclick="updateQuantity('minus', 1)">
            -
          </div>
          <div id="quantity-1">1</div>
          <div class="quantity-control" onclick="updateQuantity('plus', 1)">
            +
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const db = useFirestore();
</script>

<style scoped>
.cart {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f4f4f4;
}

.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
}

.product-card {
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
}

.product-card img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.product-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.product-price {
  font-size: 16px;
  color: #333;
}

.quantity-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: #333 1px solid;
  border-radius: 8px;
}

.quantity-control {
  cursor: pointer;
  font-size: 20px;
  margin: 0 8px;
}
</style>
