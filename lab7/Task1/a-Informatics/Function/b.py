a,b = map(float,input().split())

def power(a,b):
    pow = 1.0
    for i in range(int(b)):
        pow*=a
    return pow

print(power(a,b))