TestList = [1,2,3,4,5]
TestList = list(
    map(lambda num : num + 100, TestList)
        # Add 100 to each element
        #lambda num은 TestList의 각 요소를 의미
        
    )

 
print(TestList)