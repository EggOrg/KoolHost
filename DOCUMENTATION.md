# Documentation
KoolHost is a file host that exists without need for a disk size or file cap. It operates via POST requests.
## Usage

### Making a new file

```JSON
{"mode":"write", "name":"dummy", "content":""}
```
### Reading a file
```JSON
{"mode":"read", "name":"dummy"}
```
### Removing a file
```JSON
{"mode":"remove", "name":"dummy"}
```

## Features

| Feature | KoolHost      | AnonFiles |
| ----------- | ----------- | ----------- |
| Unlimited, free file storage | ✔ | ❌ |
| POST-based API | ✔ | ✔ |
| Full open-source code | ✔ | ❌ |
| GUI | ❌ | ✔ |
| Unlimited bandwidth | ✔ | ✔ |
| Free use of code | ✔ | ❌ |
| Full control over every file | ✔ | ❌ |
| Simple API | ✔ | ❌ |
| Written in NodeJS | ✔ | ❔ |
| Short code | ✔ | ❔ |

## Why you should use it

As said by our features list, KoolHost offers a competitive advantage over other file hosting companies. 

## Hosting

Hosting KoolHost on your own computer is extremely dangerous, as a user could write, read or remove files from anywhere on your computer. Using a host such as ReplIT, though, is a much safer option.  
People can access files on your computer by using the "name" JSON object like so:  
```JSON
{"name":"C:\\some\\path"}
```
This can allow people to use operations on the directory "C:\some\path". Using ReplIT you can only access files that are present in the folder in which the files are stored. This can make a hosting environment extremely safe.
