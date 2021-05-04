Vue.component("product", {
	props: {
		premium: {
			type: Boolean,
			required: true,
		},
	},
	template: `
    <div class="product">
    <div class="product-image">
      <img v-bind:src="image">
    </div>
    <div class="product-info">
      <h1>{{ title }}</h1>
      <span v-show="onSale" 
            style="background-color: red; 
                  color:white; 
                  padding: 5px; 
                  display: block; 
                  text-align: center; 
                  font-weight: 600;">
                  On Sale!
      </span>
      <p v-if="inStock > 10" 
        style="font-weight: 600;">
        In Stock
      </p>
      <p v-else-if="inStock <= 10 && inStock > 0">
        <strong>Almost sold out!</strong>
      </p>
      <p v-else 
          style="color: red; 
                font-weight: 600;">
                Out of Stock
      </p>
      <p>Shipping: {{ shipping }}</p>
      <p>{{ description }}</p>
      <ul style="margin-top: 10px;">
        <li v-for="detail in details" style="margin: 5px 0px;">{{ detail }}</li>
      </ul>

      <div v-for="(variant, index) in variants" 
            :key="variant.variantId" 
            class="color-box"
            :style="{ backgroundColor: variant.variantColor }" 
            @mouseover="updateProduct(index)">
      </div>
      <a :href="link" target="_blank">Go to Website</a>

      <button v-on:click="addToCart" 
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }">Add to Cart</button>
      
      <button @click="removeFromCart" style="background-color: pink;">Remove from Cart</button>

      <div class="cart">
        <p>Cart({{cart}})</p>
      </div>
    </div>
  </div>
  `,
	data() {
		return {
			brand: "Rhange",
			product: "Socks",
			description: "This socks is very popular.",
			selectedVariant: 0,
			link: "https://www.softwear.com.ng/product/white-socks",
			inventory: 100,
			onSale: true,
			details: ["80% cotton", "20% polyester", "Gender-neutral"],
			variants: [
				{
					variantId: 2234,
					variantColor: "white",
					variantImage: "./assets/white-socks.jpg",
					variantQuantity: 10,
				},
				{
					variantId: 2235,
					variantColor: "black",
					variantImage: "./assets/black-socks.jpg",
					variantQuantity: 0,
				},
			],
			cart: 0,
		};
	},
	methods: {
		addToCart: function () {
			this.cart += 1;
		},
		updateProduct(index) {
			this.selectedVariant = index;
			console.log(index);
		},
		removeFromCart: function () {
			if (this.cart > 0) {
				this.cart -= 1;
			}
		},
	},
	computed: {
		title() {
			return `${this.brand} ${this.product}`;
		},
		image() {
			return this.variants[this.selectedVariant].variantImage;
		},
		inStock() {
			return this.variants[this.selectedVariant].variantQuantity;
		},
		shipping() {
			if (this.premium) {
				return "Free";
			}
			return 2.99;
		},
	},
});

let app = new Vue({
	el: "#app",
	data: {
		premium: true,
	},
});
