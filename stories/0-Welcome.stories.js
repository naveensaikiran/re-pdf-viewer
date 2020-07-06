import React from 'react';
import MultiPagePdf from '../examples/MultiPagePdf';

export default {
  title: 'Welcome',
  component: MultiPagePdf,
};

export const ToStorybook = () => <MultiPagePdf />;

ToStorybook.story = {
  name: 'to Storybook',
};
