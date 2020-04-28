/* global describe, it, expect, beforeEach, jest */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  const toggleCompletedFilterMock = jest.fn();
  let component;

  beforeEach(() => {
    component = shallow(
      <Header
        activeCount={0}
        hideCompleted={false}
        toggleCompletedFilter={toggleCompletedFilterMock}
      />,
    );
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have a single checkbox', () => {
    expect(component.find('.toggle-filter').length).toEqual(1);
  });

  it('Should call the toggleCompletedFilter function when toggle checkbox is changed', () => {
    component = mount(<Header
      activeCount={0}
      hideCompleted={false}
      toggleCompletedFilter={toggleCompletedFilterMock}
    />);

    const filterCheckbox = component.find('.toggle-filter');
    expect(toggleCompletedFilterMock.mock.calls.length).toEqual(0);
    filterCheckbox.props().onChange({});
    expect(toggleCompletedFilterMock.mock.calls.length).toEqual(1);
  });
});
