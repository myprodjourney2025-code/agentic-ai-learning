x = int(input("Enter a number: "))

if x > 0 and x < 10:
    print("The number is positive and single digit")
elif x < 0:
    print("The number is negative")
elif x == 0:
    print("The number is zero")
else:
    print("The number is double digit or more")


words = ['hello', 'WoRld']
loop = True

while(loop):
    user_input = str(input("Enter a word: "))
    if user_input == 'exit':
        loop = False
        break
    if user_input in words:
        print("The word is already in the list")
    else:
        words.append(user_input)

print("The words in the list are : ")

for word in words:
    print(word+" ")