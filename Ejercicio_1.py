def prepareGifts(gifts: list):
    my_array = list(set(gifts))
    my_array.sort()
    return my_array

gifts = [34,45,32,10,5,7,34,10]
# [5, 7, 10, 32, 34, 45]
print(prepareGifts(gifts))