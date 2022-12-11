import {
    defineStore
} from "pinia";
import Swall from "sweetalert2"

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}
export const usecartStore = defineStore('cart', {
    state: () => {
        return {
            cart: []
        }
    },
    getters: {
        allproducts() {
            return this.cart
        },
        count() {
            return this.cart.length
        },
        totalAmont() {
            return this.cart.reduce((total, p) => {
                return total + p.price * p.quantity
            }, 0)
        }
    },
    actions: {
        clear() {
            this.cart = []
            updateLocalStorage(this.cart)
        },
        increment(id) {
            const item = this.cart.find((p) => p.id == id)
            if (item) {
                item.quantity++
            }
        },
        decrement(id) {
            const item = this.cart.find((p) => p.id == id)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                }
            }
            updateLocalStorage(this.cart)
        },
        remove(id) {
            this.cart = this.cart.filter((cart) => cart.id != id)
            Swall.fire({
                title: 'product deleted',
                icon: 'warning',
                showConfirmButton: 'false',
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            })
            updateLocalStorage(this.cart)
        },
        addToCart(product) {
            const item = this.cart.find((p) => p.id == product.id)
            if (!item) {
                this.cart.push({
                    ...product,
                    quantity: 1
                })
            } else {
                item.quantity++
            }
            Swall.fire({
                title: 'product Added',
                icon: 'success',
                showConfirmButton: 'false',
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            })
            updateLocalStorage(this.cart)
        }
    }
})