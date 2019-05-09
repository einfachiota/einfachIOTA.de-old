import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    post: {},
    page: {}
}

const mutations = {
    SAVE_POST(state, post) {
        state.post = post
    },
    SAVE_PAGE(state, page) {
        state.page = page
    }
}

const actions = {
    savePost({ commit }, post) {
        commit('SAVE_POST', post)
    }, savePage({ commit }, page) {
        commit('SAVE_PAGE', page)
    },
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})