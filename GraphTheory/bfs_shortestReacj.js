function processData(input) {
    
    //Enter your code here
    input = input.split("\n");
    var t = input.shift();
    
    for (var i = 0; i < t; i++) {
        
        var adj = [];
        var visited = [];
        var dis = [];
               
        var nm = input.shift();
        nm = nm.split(" ");
        var n = nm[0];
        var m = nm[1];
        var data = [];
        for (var j = 0; j < m; j++) {
            data.push(input.shift());
        }
        var s = input.shift();
   
        // build adjacency matrix for the graph
        for ( var u = 1; u <= n; u++) {
            var adj_temp = [];
            for (var v = 1; v <= n; v++) {
                adj_temp.push(0);
            }
            adj.push(adj_temp);
        }

        for( var j = 0; j < m; j++) {
            var d = data.shift();
            d = d.split(" ");
            var u = d[0] - 1;
            var v = d[1] - 1;
            adj[u][v] = 1;
            adj[v][u] = 1;
        }
        
        // build visited matrix
        for ( var u = 1; u <= n; u++) {
            visited.push(0);
        }
        
        // build distance array
        for ( var j = 0; j < n; j++) {
            dis.push(-1);
        }
        
        // BFS- Shortest Reach
        var queue = [];
        queue.push(s-1);
        visited[s-1] = 1;
     
        while(queue.length != 0) {
            var k = queue.shift();
            //console.log(k);
            for( var j = 0; j < n; j++) {
                if( adj[k][j] == 1 && visited[j]==0) {
                    dis[j] = dis[k] + 1;
                    queue.push(j);
                    visited[j] = 1;
                }
            }
        }
        
        var distance = "";
        for ( var j = 0; j < n; j++) {
            if (dis[j] != -1 && j!= s-1) {
                distance += 6 * (dis[j] + 1) + " ";
            } else if(dis[j] == -1 && j!= s-1) {
                distance += dis[j] + " ";
            }
        }
        console.log(distance);
        
    }
} 


input = `2
4 2
1 2
1 3
1
3 1
2 3
2`;

processData(input);