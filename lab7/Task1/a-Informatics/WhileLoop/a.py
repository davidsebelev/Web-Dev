n = int(input())

i = 1
num = 0
while num <= n:
    num = i**2
    if(num > n):break
    print(num)
    i+=1
