
import React from 'react';
import Index from '../index.ios.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Rectangle from '../js/charts/shapes/Rectangle';

it('renders correctly', () => {
  const tree = renderer.create(
      <Rectangle width={10} height={10} x={1} y={1} strokeWidth={1} stroke={"#000"} />
  );
});
