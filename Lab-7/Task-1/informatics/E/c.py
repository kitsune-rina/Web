def xor(x, y):
    return 1 if (x or y) and not (x and y) else 0
x, y = map(int, input().split())
print(xor(x, y))

