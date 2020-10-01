/**
 * @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.edu>
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { AppContainer } from './app-container';
import { Button, Typography } from '@material-ui/core';
import { Dashboard, Tweets } from '../../components/dashboard/dashboard';

const title = 'My Tweets';
const buttonText = 'Tweet';
let wrapped = shallow(<AppContainer />);
let wrapperMount = mount(<AppContainer />);
describe('App Container Component', () => {
	/**
	 * @author Jocelyn Baduria <jocelyn.baduria@sjsu.com>
	 */
	it('Check if the component loaded', () => {
		expect(wrapped).toMatchSnapshot();
	});

	/**
		* @author Shiv Kumar Ganesh <shivkumar.ganesh@sjsu.edu>
		*/
	it('renders the Titles children', () => {
		expect(wrapped.find(Typography).text()).toEqual(title);
	});

	/**
	 * @author Jagruti Mohanty <jagruti.mohanty@sjsu.edu> 
	 */
	it('renders the tweet button', () => {
		expect(wrapped.find(Button).text()).toEqual(buttonText);
		expect(wrapped.find(Button)).toHaveLength(1);
	});

	/**
	 * @author Jagruti Mohanty <jagruti.mohanty@sjsu.edu> 
	 */
	it('renders delete Tweet Icon', () => {
		expect(wrapped.find(Dashboard)).toHaveLength(1);
	});
});