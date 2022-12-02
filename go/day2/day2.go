package day2

import (
	"strconv"

	"github.com/ross-mc/Advent-of-Code-2022/go/utils"
)

var resultScoreMap = map[string]int{
	"win":  6,
	"draw": 3,
	"lose": 0,
}

var rpsMap = map[string]map[string]string{
	"X": {
		"A":     "draw",
		"B":     "lose",
		"C":     "win",
		"score": "1",
	},
	"Y": {
		"A":     "win",
		"B":     "draw",
		"C":     "lose",
		"score": "2",
	},
	"Z": {
		"A":     "lose",
		"B":     "win",
		"C":     "draw",
		"score": "3",
	},
}

var winLoseMap = map[string]map[string]int{
	"X": {
		"A":     3,
		"B":     1,
		"C":     2,
		"score": 0,
	},
	"Y": {
		"A":     1,
		"B":     2,
		"C":     3,
		"score": 3,
	},
	"Z": {
		"A":     2,
		"B":     3,
		"C":     1,
		"score": 6,
	},
}

type RPSResult struct {
	partOne int
	partTwo int
}

func CalculateRpsScore() RPSResult {
	lines := utils.ReadFileIntoStringSlice("02")
	currScorePartOne := 0
	currScorePartTwo := 0
	for _, line := range lines {
		elfPlay := line[0]
		myPlay := line[2]
		options := rpsMap[string(myPlay)]
		result := options[string(elfPlay)]
		num, _ := strconv.Atoi(options["score"])
		currScorePartOne += resultScoreMap[result] + num
		currScorePartTwo += winLoseMap[string(myPlay)][string(elfPlay)] + winLoseMap[string(myPlay)]["score"]
	}
	return RPSResult{
		partOne: currScorePartOne,
		partTwo: currScorePartTwo,
	}
}
