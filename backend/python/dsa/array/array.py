# creating lists
a = []
b = [1, 2, 3, 4, 5]
c = [10, "John Doe", 3.14, False]


# list methods
x = [15, 10, 5, 25, 20]

x.append(30) # add
x.sort() # sort list ascending

print(x)
print()

# creating algorithms
number_array = [20, 60, 100, 80, 120, 40]
value = number_array[0]

for n in number_array:
    if n > value:
        value = n
print("Highest value : ", value)