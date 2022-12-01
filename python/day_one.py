import utils

def find_elf_with_most_calories():
    lines = utils.read_file("01")
    top_three = [0,0,0]
    curr_elf_calories = 0
    for line in lines:
        if line == "" or line == "\n":
            if curr_elf_calories > top_three[0]:
                top_three[0] = curr_elf_calories
            curr_elf_calories = 0
            top_three.sort()
        else:
            curr_elf_calories += int(line)
    return {
        "most_calories": top_three[2],
        "sum_of_top_three": sum(top_three) 
    }