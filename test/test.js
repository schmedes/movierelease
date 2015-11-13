import jsdom from 'mocha-jsdom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import MovieModal from '../app/scripts/moviemodal.jsx';
import App from '../app/scripts/app.jsx';
import React, {Component} from 'react';


describe('MovieModal-Component', ()=> {
jsdom();
  it('input should be src bla', ()=> {
    const renderedMM = TestUtils.renderIntoDocument(<MovieModal open={true} data={{urlPoster: 'bla', title: 'test', genres: ['a', 'b'], runtime: [0], plot: 'test' }} toggleFunction={function x(){var x=bla} }/>);
    const divMM = TestUtils.findRenderedDOMComponentWithClass(renderedMM, 'modal-content');
    const inputMM = TestUtils.findRenderedDOMComponentWithTag(renderedMM, 'img');
    expect(inputMM.getAttribute('src')).toBe('bla');
  });
  it('should render App', ()=> {
    const renderedApp = TestUtils.renderIntoDocument(<App/>);
    const contentDiv = TestUtils.findRenderedDOMComponentWithClass(renderedApp, 'content');
  })
}
);
// stateless component tests dont seem to work
