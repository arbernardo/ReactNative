/**
 * Created by ace on 2/28/17.
 */
import React from 'react';

import renderer from 'react-test-renderer';
import Rectangle from '../js/charts/shapes/Rectangle';


test("renders", () => {
   const tree = renderer.create(
       <Rectangle width={10} height={10} x={1} y={1} strokeWidth={1} stroke={"#000"} />
   ) .toJSON();
   expect(tree).toMatchSnapshot();
});