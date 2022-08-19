/* eslint-disable no-undef */

import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  sum, subtract, mutiply, devide,
} from './operate';

import ButtonBox from './ButtonBox';
import About from './Pages/About';
import Quate from './Pages/Quate';
import CalcProvider from '../context/CalcContext';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 4 - 2 to equal 2', () => {
  expect(subtract(4, 2)).toBe(2);
});

test('adds 4 * 2 to equal 2', () => {
  expect(mutiply(4, 2)).toBe(8);
});

test('adds 4 / 2 to equal 2', () => {
  expect(devide(4, 2)).toBe(2);
});

describe('ButtonBox', () => {
  test('Renders ButtonBox component', () => {
    render(<ButtonBox />);
    screen.debug();
  });
});

describe('About', () => {
  test('Renders About component', () => {
    render(<About />);
    screen.debug();
  });
});

describe('Quate', () => {
  test('Renders Quate component', () => {
    render(<Quate />);
    screen.debug();
  });
});

describe('CalcProvider', () => {
  test('Renders CalcProvider component', () => {
    render(<CalcProvider />);
    screen.debug();
  });
});
