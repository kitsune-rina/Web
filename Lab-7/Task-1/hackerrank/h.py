a=int(input())
if a % 2 == 1:
    print('Weird')
elif a in range(2, 6):
    print('Not Weird')
elif a in range(6, 21):
    print('Weird')
else:
    print('Not Weird')