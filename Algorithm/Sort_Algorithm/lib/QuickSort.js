'use strict'

module.exports = (array) => {
	qSort(array, 0, array.length - 1)
}

function qSort(array, low, high) {
	let pivot
	if (low < high) {
		pivot = partition(array, low, high)
		qSort(array, low, pivot - 1)
		qSort(array, pivot + 1, high)
	}
}

function partition(array, low, high) {
	let pivotKey
	pivotKey = array[low]
	while (low < high) {
		while (low < high && array[high] >= pivotKey) {
			high--
		}
		swap(array, low, high)
		while (low < high && array[low] <= pivotKey) {
			low++
		}
		swap(array, low, high)
	}
	return low
}

function swap(array, i, j) {
	let temp = array[i]
	array[i] = array[j]
	array[j] = temp
}
