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
