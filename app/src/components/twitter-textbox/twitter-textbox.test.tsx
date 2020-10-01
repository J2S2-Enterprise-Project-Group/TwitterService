/**
 * @author : Shiv Kumar Ganesh<shivkumar.ganesh@sjsu.edu>
 */
import React from 'react';
import { ReactWrapper, shallow } from 'enzyme';
import { TwitterTextbox } from './twitter-textbox';
import { act } from 'react-dom/test-utils';
import { TextareaAutosize } from '@material-ui/core';

const title = 'Twitter App';
const onBlur = jest.fn();
let wrapped = shallow(<TwitterTextbox onBlur={onBlur} />);
describe('Twitter TextBox', () => {
    it('Check if the component loaded', () => {
        expect(wrapped).toMatchSnapshot();
    });

    it('renders the TextBox', () => {
        expect(wrapped.find(TextareaAutosize)).toHaveLength(1);
    });

    it('twigger method onBlur when blurred', () => {
        const blurEvent = { event: { target: 'Hello World Tweet' } }
        act(() => {
            wrapped.find(TextareaAutosize).simulate('blur', blurEvent);
        });
        expect(onBlur).toBeCalledTimes(1)
        expect(onBlur).toBeCalledWith(blurEvent)
    })
});