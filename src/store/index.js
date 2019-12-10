import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import VuexPersistence from 'vuex-persist'
import router from '../router'

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// })
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    response: {
      type: '',
      message: ''
    },
    // token: ''
    token: localStorage.getItem("access_token") || null,
    stories: []
  },
  
  getters: {
    currentStatus: state => state.status,
    apiResponse: state => state.response,
    userToken: state => state.token,
    users(state) {
      return state.token !== null;
    },
    userStory: state => state.stories
  },
  mutations: {
    changeStatus: (state, payload) => {
      state.status = payload
    },
    newPost(state, story) {
      state.stories.unshift(story)
    },
    setResponse: (state, payload) => {
      state.response = {
        type: payload.type,
        message: payload.message
      }
    },
    saveToken: (state, payload) => {
      state.token = payload
    },
    setPost(state, story) {
      state.stories= story
    },
    storyItems(state, stories) {
      state.stories = stories;
    },

  },
  actions: {
    async signUp({ commit }, userData) {
      try {
        const response = await axios.post(
          "http://localhost:8001/users/signup",
          userData
        );
        console.log(response);
        let responseObject = {
          type: "success",
          message: response.data.message
        };
        commit("setResponse", responseObject);
        router.push("/login");
        console.log(responseObject);
      } catch (error) {
        let responseObject = {
          type:'failed',
          message:error.message.data.message
        };
        commit("setResponse", responseObject);
        console.log(error.response);
      }
    },
   
    async LoginAction({ commit }, userData) {
      try {
        const response = await axios.post(
          "http://localhost:8001/users/login",
          userData
        );
        console.log(response);
        let responseObject = {
          type: "success",
          message: response.data.message
        };
        const token = response.data.token;
        localStorage.setItem("access_token", token);
        commit("getToken", token);
        router.push("/stories");
        commit("setResponse", responseObject);
        console.log(token);
      } catch (error) {
        console.log(error.response);
      }
    },
    

    async sendPost({ commit }, userData) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        const response = await axios.post('http://localhost:8001/blogs', userData);
        commit('newPost', userData)
        router.push("/stories");
        console.log(response);
        

      } catch (error) {
       
        console.log(error.response)
      }
    },

    async fetchStories({ commit }) {
      try {
        const response = await axios.get('http://localhost:8001/blogs');
        commit('setPost', response.data.data)

      } catch (error) {
        console.log(error.response)
      }
    },

    async displayOne({ commit }, id) {
      try {
        const response = await axios.get(`http://localhost:8001/blogs/story/${id}`);
        console.log(response.data.data);

        commit('storyItems', response.data.data)

      } catch (error) {
        console.log(error.response)
      }
    },
  },
  // plugins: [vuexLocal.plugin]
})

