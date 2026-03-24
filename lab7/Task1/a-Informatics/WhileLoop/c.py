n = int(input())

i = 0
num = 0
while num < n:
    num = 2**i
    if(num > n):break
    print(num)
    i+=1