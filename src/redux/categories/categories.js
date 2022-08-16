const CHECKSTATUS = 'bookstore-react-app/categories/CHECKSTATUS';

const categoriesReducer = (state = [], action) => {
    switch (action.type) {
        case CHECKSTATUS:
            return action.text;
        default:
            return state;
    }
};
export const CheckStatus = () => {
    const status = {
        type: CHECKSTATUS,
        text: 'Under construction',
    };
    return status;
};

export default categoriesReducer;
