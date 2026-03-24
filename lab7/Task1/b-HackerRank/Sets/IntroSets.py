def average(array):
    su = 0
    set_arr = set(array)
    for key in set_arr:
        su+=key
    return su / len(set_arr)
        

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    result = average(arr)
    print(result)