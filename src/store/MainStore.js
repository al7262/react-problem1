import createStore from 'unistore';
import axios from 'axios';

const initState = {
    topArticle: [],
    listArticle: [],
    topLoading: true,
    listLoading: true,
    search: '',
    data: '',
    category: 'general',
    username: '',
    password: '',
    name: '',
    email: '',
    image: '',
    status: '',
    loggedIn: false,
}

export const store = createStore(initState)

export const actions = store => ({
    handleInput: (state, event) => {
        store.setState({ [event.target.name]: event.target.value });
    },

    handleChange: (state, target, value) => {
        store.setState({[target]:value})
    },

    handleManyChanges: (state, dict) => {
        store.setState(dict)
    },

    handleGetApi: async (state, urlHeadLine) => {
        await axios
            .get(urlHeadLine)
            .then(async (response) => {
                await store.setState({data: response.data})
            })
            .catch((error) => {
                console.warn(error)
            })
    }
})