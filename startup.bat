@echo off
echo Initialising development environment...

start cmd /c http-server
sass --watch scss:css
