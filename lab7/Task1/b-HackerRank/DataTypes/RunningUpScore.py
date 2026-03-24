if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    
    li = list(arr)
    
    for i in range(n - 1):
        for j in range(0, n - i - 1):
            if(li[j] > li[j + 1]):
                li[j], li[j + 1] = li[j + 1], li[j]  
                
    
    
    li.reverse()
    
    
    
    for i in range(n - 1):
        if(li[i] > li[i+1] and li[i] != li[i+1]):
            print(li[i+1])
            break