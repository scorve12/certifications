def test(v):
	if type(v) == type(""):
		print( " v = type(str) : "+ v)
		return len(v)
	elif type(v) == type(100):
		print( " v = type(100) : "+ v)
		return 101
	else:
		return 20
a = "100.0"  
b = 100.0 
c = (100.0, 200.0)
print(test(a) + test(b) + test(c))