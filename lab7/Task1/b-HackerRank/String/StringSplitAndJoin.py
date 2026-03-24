

def split_and_join(line):
    new_line = "-".join(line.split(" "))
    return new_line

if __name__ == '__main__':
    line = input()
    result = split_and_join(line)
    print(result)