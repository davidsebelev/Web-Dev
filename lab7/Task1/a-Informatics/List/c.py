n = int(input())

el = list(map(int, input().split()))

cnt = 0
for i in el:
    if i > 0:cnt+=1

print(cnt)