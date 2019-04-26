import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import _ from 'lodash';

var handleVideoSearch = (q) => {
  return _.debounce(function(dispatch) {
    var options = {query: q, max: 5, key: YOUTUBE_API_KEY};

    searchYouTube(options, (results) => {
      dispatch(changeVideoList(results));
      dispatch(changeVideo(results[0]));
    })
    // props: handleSearchInputChange
  }, 200);
};

export default handleVideoSearch;
