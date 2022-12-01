package day1

import (
	"sort"
	"strconv"

	"github.com/ross-mc/Advent-of-Code-2022/go/utils"
)

type ElfCalorieCount struct {
	mostCalories    int
	totalOfTopThree int
}

func CalculateElvesWithMostCalories() ElfCalorieCount {
	input := utils.ReadFileIntoStringSlice("01")
	arr := make([]int, 3)
	currElfCalories := 0
	for _, line := range input {
		if line == "" {
			if currElfCalories > arr[0] {
				arr[0] = currElfCalories
			}
			currElfCalories = 0
			sort.Ints(arr)
		} else {
			num, _ := strconv.Atoi(line)
			currElfCalories += num
		}
	}
	totalOfTopThree := 0
	for _, num := range arr {
		totalOfTopThree += num
	}
	result := ElfCalorieCount{
		mostCalories:    arr[2],
		totalOfTopThree: totalOfTopThree,
	}
	return result
}
