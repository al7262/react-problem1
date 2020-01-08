import createStore from 'unistore';

const initState = {
    topArticle: [],
    listArticle: [],
    topLoading: true,
    listLoading: true,
    search: '',
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
    }
})