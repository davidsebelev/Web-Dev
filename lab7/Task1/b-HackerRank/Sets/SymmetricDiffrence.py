if __name__ == '__main__':
    _ = input()

    set_a = set(map(int, input().split()))
    

    _ = input()

    set_b = set(map(int, input().split()))
    
    result = set_a.symmetric_difference(set_b)
    sort_res = sorted(result)
    for res in sort_res:print(res)