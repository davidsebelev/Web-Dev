if __name__ == '__main__':
    
    n = int(input())

    set_a = set()
    
    for i in range(n):
        str = input()
        set_a.add(str)
    print(len(set_a))
