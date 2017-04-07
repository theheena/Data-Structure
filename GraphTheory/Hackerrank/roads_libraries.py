#!/bin/python

import sys
def dfs(graph, n, m, x, y):
    countList = []
    sum = 0
    
    for vertex in graph:
        if graph[vertex]['vis'] == 'w':
            countList.append(dfslist(graph, vertex, 0))

    for c in countList:
        sum = sum + (c-1)*y + x
        
    if sum > n*x:
        return n*x
    
    return sum


def dfslist(graph, vertex, count):
    
    graph[vertex]['vis'] = 'g'
    for adj in graph[vertex]['links']:
        if graph[adj]['vis'] == 'w':
            count = dfslist(graph, adj, count)  
            
    graph[vertex]['vis'] = 'b'
    return count+1

q = int(raw_input().strip())
for a0 in xrange(q):
    n,m,x,y = raw_input().strip().split(' ')
    n,m,x,y = [int(n),int(m),int(x),int(y)]
    graph = {}
    for i in range(0,n):
        graph[str(i + 1)] = {}
        graph[str(i + 1)]['vis'] = 'w'
        graph[str(i + 1)]['links'] = []
        
    for a1 in xrange(m):
        city_1,city_2 = raw_input().strip().split(' ')

        graph[city_1]['links'].append(city_2)
        graph[city_2]['links'].append(city_1)

    print dfs(graph, n, m, x, y)
    