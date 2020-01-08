import React                      from 'react';
import Enzyme, { shallow }        from 'enzyme';
import Adapter                    from 'enzyme-adapter-react-16';
import App                        from './App';

Enzyme.configure({adapter: new Adapter()});

describe('App component', () => {
  const wrapper = shallow(<App />);
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  })

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

});
