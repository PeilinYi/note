'use strict'

const chai = require('chai')
const expect = chai.expect
const Sort = require('../../')
const _ = require('lodash')

describe('Sort Algorithm', () => {
	let count = 5000
	let origin_array = []
	let result = []

	let array = []

	before(done => {
		for (let i = 0; i < count; i++) {
			let num = _.random(0, count * 10)
			origin_array.push(num)
			result.push(num)
		}
		result.sort((a, b) => {
			return a - b
		})
		done()
	})

	beforeEach(done => {
		array = _.clone(origin_array)
		done()
	})

	it('BubbleSort', done => {
		Sort.BubbleSort(array)

		expect(array).eql(result)
		done()
	})

	it('InsertionSort', done => {
		Sort.InsertionSort(array)

		expect(array).eql(result)
		done()
	})

	it('SelectionSort', done => {
		Sort.SelectionSort(array)

		expect(array).eql(result)
		done()
	})

	it('ShellSort', done => {
		Sort.ShellSort(array)

		expect(array).eql(result)
		done()
	})

	it('HeapSort', done => {
		Sort.HeapSort(array)

		expect(array).eql(result)
		done()
	})

	it('MergeSort', done => {
		Sort.MergeSort(array)

		expect(array).eql(result)
		done()
	})

	it('QuickSort', done => {
		Sort.QuickSort(array)

		expect(array).eql(result)
		done()
	})
})
