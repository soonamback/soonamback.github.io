import { createStore } from 'vuex';
import authModules from './modules/auth';

const store = createStore({
    modules: {
        auth: authModules
    }
})

export default store;