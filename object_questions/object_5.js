// Exercise 5: Write a function to print the path of each file in the directory tree.

const directoryTree = {
    name: "root",
    type: "directory",
    children: [
        {
            name: "dir1",
            type: "directory",
            children: [
                { name: "file1.txt", type: "file", content: "File 1 content" },
                { name: "file2.txt", type: "file", content: "File 2 content" }
            ]
        },
        {
            name: "dir2",
            type: "directory",
            children: [
                {
                    name: "subdir1",
                    type: "directory",
                    children: [
                        { name: "file3.txt", type: "file", content: "File 3 content" }
                    ]
                }
            ]
        }
    ]
};
