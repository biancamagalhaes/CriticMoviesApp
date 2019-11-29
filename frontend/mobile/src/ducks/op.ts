import { hen, Hen } from "utility/createReducer";
import { createSelector } from "reselect";
import { RootState } from "ducks";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

export interface OPState {
  movies: Array<{
    date;
    title;
    subtitle;
    url;
    linkText;
    image: { height; width; src };
    summary;
  }>;
  loading: boolean;
}

export type InitialState = OPState;

const initialState: InitialState = {
  loading: false,
  movies: []
};

// Selectors
const mainSelector = (state: RootState) => state.dashboard;

export const getLoading = createSelector(mainSelector, state => {
  state.loading;
});

export const getOpList = createSelector(mainSelector, state => {
  return {
    movies: state.movies
  };
});

//Actions
class EditorReactions extends Hen<InitialState> {
  setLoading(a: boolean) {
    this.state.loading = a;
  }

  responseListMovies(a: Array<any>) {
    this.state.movies = a.map(results => ({
      date: results.publication_date,
      title: results.display_title,
      subtitle: results.headline,
      url: results.link.url,
      linkText: results.link.suggested_link_text,
      image: {
        height: results.multimedia.height,
        width: results.multimedia.width,
        src: results.multimedia.src
      },
      summary: results.summary_short
    }));
  }
}

//Reducers

export const [menuReducer, actions] = hen(new EditorReactions(initialState));
export default menuReducer;

export function fetchListMovies(): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async dispatch => {
    dispatch(actions.setLoading(true));
    return axios
      .get(
        `https://api.nytimes.com/svc/movies/v2/reviews/search.json/get?api-key=qkA9BG4KT2Wd2eoVZEVwyyhFammAgPMa`
      )
      .then(r => {
        dispatch(actions.setLoading(false));
        dispatch(actions.responseListMovies(r.data.results));
      })
      .catch(e => {
        console.log(e);
        dispatch(actions.setLoading(false));
      });
  };
}
