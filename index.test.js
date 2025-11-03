"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:56695868738033688258 LICENSE.md
// Indu Deva test file

const {expect} = require('chai')
const InduDeva = require('./index.js');

describe(InduDeva.me.name, () => {
  beforeEach(() => {
    return InduDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(InduDeva).to.be.an('object');
    expect(InduDeva).to.have.property('agent');
    expect(InduDeva).to.have.property('vars');
    expect(InduDeva).to.have.property('listeners');
    expect(InduDeva).to.have.property('methods');
    expect(InduDeva).to.have.property('modules');
  });
})
