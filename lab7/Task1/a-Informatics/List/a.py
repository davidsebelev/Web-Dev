n = int(input())

elements = list(map(int, input().split()))


for i in range(0,len(elements),2):
    print(elements[i], end =" ")