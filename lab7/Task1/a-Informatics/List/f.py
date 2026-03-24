n = int(input())

elements = list(map(int,input().split()))


cnt = 0
for i in range(len(elements)):
    if i + 1 != len(elements) and i - 1 >= 0:
        if elements[i] > elements[i + 1] and elements[i - 1] < elements[i]:cnt+=1

print(cnt)