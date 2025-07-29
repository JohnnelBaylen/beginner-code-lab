stacks = ['A', 'B']

stacks.append('C')
stacks.append('D')
stacks.append('E')


print("Stack: ", stacks)

# Peek
topElement = stacks[-1]
print("Peek: ", topElement)

# Pop
poppedElement = stacks.pop()
print("Pop: ", poppedElement)

# Stack after Pop
print("Stack after Pop: ", stacks)

# isEmpty
isEmpty = not bool(stacks)
print("isEmpty: ", isEmpty)

# Size
print("Size: ",len(stacks))
