package utils

import (
	"io/ioutil"
	"os"
	"strings"
)

func ReadFileIntoStringSlice(day string) []string {
	file, _ := os.Open("./inputs/" + day + "/input.txt")
	bytes, _ := ioutil.ReadAll(file)
	str := string(bytes)
	slice := strings.Split(str, "\n")
	return slice
}
