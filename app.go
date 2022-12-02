package main

import (
	"fmt"

	"github.com/ross-mc/Advent-of-Code-2022/go/day1"
	"github.com/ross-mc/Advent-of-Code-2022/go/day2"
)

func main() {
	day1 := day1.CalculateElvesWithMostCalories()
	fmt.Printf("Day 1: %v\n", day1)
	day2 := day2.CalculateRpsScore()
	fmt.Printf("Day 2: %v\n", day2)
}
