// Problem: Amazon Delivery Route (Grid Obstacle Removal)

// An Amazon delivery robot navigates a city grid to deliver a package. The grid is represented as an m x n matrix where 0 represents a 
// clear road and 1 represents an obstacle (blocked road). The robot starts at the top-left cell (0, 0) and must reach the bottom-right cell 
// (m-1, n-1). The robot can move up, down, left, or right (no diagonals) to an adjacent cell.

// The robot has special permission to remove obstacles as it drives, but each removal costs effort. 
// Find the minimum number of obstacles that must be removed to guarantee the robot can reach the destination.

// Constraints
// 1 <= m, n <= 10^5
// 1 <= m * n <= 10^5
// grid[i][j] is either 0 or 1
// grid[0][0] == 0 and grid[m-1][n-1] == 0 (start and end are never obstacles themselves)
// Example 1
// Input: grid = [[0,0,0],
//                [1,1,0],
//                [0,0,0]]
// Output: 0
// Explanation: A path exists with zero obstacles: (0,0)→(0,1)→(0,2)→(1,2)→(2,2), 
// all cells along this path are 0.
// Example 2
// Input: grid = [[0,1,1],
//                [1,1,1],
//                [1,1,0]]
// Output: 2
// Explanation: You must remove at least 2 obstacles to connect start to end. 
// For example: (0,0)→(0,1)[remove]→(0,2)[remove]... or other paths — 
// minimum obstacles removed along the best path is 2.
// Example 3
// Input: grid = [[0,0],
//                [0,0]]
// Output: 0
// Explanation: No obstacles at all, trivially reachable.

//leet code  - hard (1368)