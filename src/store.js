import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    post: {}
}

const mutations = {
    SAVE_POST(state, post) {
        state.post = post
    }
}

const actions = {
    savePost({ commit }, post) {
        commit('SAVE_POST', post)
    },
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})