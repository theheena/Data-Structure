def dfs():
    countList = []
    
    for vertex in graph:
        if graph[vertex]['c'] == 'w':
            countList.append(dfslist(graph, vertex, 0))

    return countList


def dfslist(graph, vertex, count1):
    
    graph[vertex]['c'] = 'g'
    for adj in graph[vertex]['v']:
        if graph[str(adj)]['c'] == 'w':
            count1 = dfslist(graph, str(adj), count1)  
            
    graph[vertex]['c'] = 'b'
    return count1+1
    

# Enter your code here. Read input from STDIN. Print output to STDOUT
N,l = map(int,raw_input().split())
graph = {}

for i in xrange(N):
    graph[str(i)] = {}
    graph[str(i)]['v'] = []
    graph[str(i)]['c'] = 'w'
 
for i in xrange(l):
    a,b = map(int,raw_input().split())
    a = int(a)
    b = int(b)
    # Store a and b in an appropriate data structure
    graph[str(a)]['v'].append(b)
    graph[str(b)]['v'].append(a)
        
count = dfs()
result = 0
# Compute the final result using the inputs from above
for i in range(len(count)-1):
    for j in range(i+1,len(count)):
        result = result + count[i]*count[j]


print result
