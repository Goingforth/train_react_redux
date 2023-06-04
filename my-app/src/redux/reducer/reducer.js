const defState = {
  counter: 0,
};
// Пока что используем редюсер который
// только возвращает полученное состояние
export const rootReducer = (state = defState, action) => {
  // Редюсер различает экшены по значению свойства type

  switch (action.type) {
    case "counter/addValue": {
      return { ...state, counter: state.counter + 1 };
    }
    case "counter/decrValue": {
      return { ...state, counter: state.counter - 1 };
    }

    default:
      return state;
  }
};
export default rootReducer;
