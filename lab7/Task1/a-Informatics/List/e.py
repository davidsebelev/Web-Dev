n = int(input())

elements = list(map(int,input().split()))


fl = False
for i in range(len(elements)):
    if i + 1 != len(elements):
        if (elements[i + 1] > 0 and elements[i] > 0) or (elements[i + 1] < 0 and  elements[i] < 0):
            fl = True
            break

if(fl):print("YES")
else:print("NO")