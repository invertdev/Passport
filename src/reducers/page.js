const initialState = {
  page: 0,
}

const nextPage = () => ({
  type: 'NEXT_PAGE',
})

const prevPage = () => ({
  type: 'PREV_PAGE',
})

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NEXT_PAGE': {
      if (state.page<2){
        return {
          ...state,
          page: state.page + 1,
        }
      }
      else {
        return state
      }
    }
    case 'PREV_PAGE': {
      if (state.page>0){
        return {
          ...state,
          page: state.page - 1,
        }
      }
      else {
        return state
      }
    }
    default: {
      return state
    }
  }
}

export { 
  nextPage,
  prevPage,
}
export default reducer