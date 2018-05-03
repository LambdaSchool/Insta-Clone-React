import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchBar from '../components/SearchBar/SearchBar';

Enzyme.configure({ adapter: new Adapter() });

describe('Search Bar', () => {
    it('should render an input tag', () => {
        const component = shallow(<SearchBar />);
        expect(component.find('input').length).toBe(1);
    });
});
