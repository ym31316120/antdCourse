import * as cardsService from '../service/list';

const delay = (millisecond) => {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecond);
    });
};
export default {
    namespace: 'cards',
    state: {
        cardsList: []
    },
    effects: {
        *queryList({ _ }, { call, put }) {
            const rsp = yield call(cardsService.queryList);
            console.log('queryList');
            console.log(rsp);
            yield put({ type: 'saveList', payload: { cardsList: rsp.result } });
        },
        *addOne({ payload }, { call, put }) {
            const rsp = yield call(cardsService.addOne, payload);
            yield put({ type: 'queryList' });
            return rsp;
        },
    },
    reducers: {
        saveList(state, { payload: { cardsList } }) {
            return {
                ...state,
                cardsList,
            }
        },
    }
};