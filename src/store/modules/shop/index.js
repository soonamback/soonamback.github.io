import axios from "axios";

const state = {
    products: [],
}

const mutations = {
    setProducts(state, payload) {
        state.products = payload;
    },
    addProduct(state, payload) {
        state.products.push(payload)
    },
}

const actions = {
    fetchProducts(context) {
        const token = context.rootState.auth.token;
        axios.get(`https://vue-3-shop-3237c-default-rtdb.asia-southeast1.firebasedatabase.app/products.json?auth=${token}`
        ).then((response) => {
            const productsDO = []
            for (const id in response.data) {
                productsDO.push({
                    ...response.data[id],
                })
            }
            context.commit("setProducts", productsDO)
        }).catch((error) => {
            console.log(error);
        })
    },
    storeProduct(context, payload) {
        console.log(context)
        const productItem = {
            title: payload.title,
            description: payload.description,
            price: payload.price
        };
        const token = context.rootState.auth.token;
        axios.post(`https://vue-3-shop-3237c-default-rtdb.asia-southeast1.firebasedatabase.app/products.json?auth=${token}`, productItem)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            throw new Error(error)
        })
    },
}
const getters = {
    products: (state) => state.products,
}

const shopModule = {
    state,
    mutations,
    actions,
    getters
}

export default shopModule;