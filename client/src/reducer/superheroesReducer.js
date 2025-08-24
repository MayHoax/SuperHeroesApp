export const initialState = {
  superheroes: [],
  superhero: null,
  loading: false,
  error: null,
  page: 1,
  take: 5,
  total: 0,
  pages: 0,
};

export const superheroReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: null };

    case "FETCH_SUPERHEROES_SUCCESS":
      return {
        ...state,
        loading: false,
        superheroes: action.payload.superheroes,
        page: action.payload.page,
        take: action.payload.take,
        total: action.payload.total,
        pages: action.payload.pages,
        error: null,
      };

    case "FETCH_SUPERHERO_SUCCESS":
      return {
        ...state,
        loading: false,
        superhero: action.payload,
        error: null,
      };

    case "CREATE_SUPERHERO_SUCCESS":
      return {
        ...state,
        loading: false,
        superheroes: [action.payload, ...state.superheroes],
        error: null,
      };

    case "UPDATE_SUPERHERO_SUCCESS":
      return {
        ...state,
        loading: false,
        superheroes: state.superheroes.map((hero) =>
          hero.id === action.payload.id ? action.payload : hero
        ),
        error: null,
      };

    case "DELETE_SUPERHERO_SUCCESS":
      return {
        ...state,
        loading: false,
        superheroes: state.superheroes.filter(
          (hero) => hero.id !== action.payload
        ),
        error: null,
      };

    case "ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
