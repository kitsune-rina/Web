import math
x=int(input())
num=0
for i in range(1, int(math.sqrt(x))+1):
    if x%i==0:
        num+=1 
        if i!=x // i:
            num+= 1
print(num)
