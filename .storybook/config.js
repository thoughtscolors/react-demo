import {configure} from '@storybook/react';

function loadStories() {
  require('../stories/index.js');
  //require stories here
}

configure(loadStories, module);
