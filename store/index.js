import axios from 'axios';
import moment from 'moment';

export const state = () => ({
	news: {}
});

export const mutations = {
	SET_NEWS (state, payload) {
		state.news = payload;
	}
};

export const actions = {
	async loadNews ({ commit }) {
		await axios
			.get('https://newsapi.org/v2/top-headlines?country=ng&apiKey=d9b8dc0310184d419e7df9c70e4b9a7f')
			.then(async (res) => {
				const news = res.data.articles;

				// format time for the post
				news.forEach((data) => {
					const timing = moment(data.publishedAt).startOf('hour').fromNow();
					return (data.publishedAt = timing);
				});

				commit('SET_NEWS', news);
			})
			.catch((err) => {
				return console.log(err);
			});
	}
};

export const getters = {
	newsData (state) {
		return state.news;
	}
};
