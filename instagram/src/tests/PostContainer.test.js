import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PostContainer from '../components/PostContainer/PostContainer';
import postData from '../dummy-data';

Enzyme.configure({ adapter: new Adapter() });

describe('Post Container', () => {
    it('should render two image tags', () => {
        const component = shallow(<PostContainer key={'2'} postData={postData[0]} />);
        expect(component.find('img').length).toBe(2);
    });
});
