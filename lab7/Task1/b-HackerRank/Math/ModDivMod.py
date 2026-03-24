def divmod(numberm, div):
    num = numberm // div
    return num , numberm%div
    
first = int(input())
second = int(input())

print(first//second)
print(first%second)
print(divmod(first,second))
