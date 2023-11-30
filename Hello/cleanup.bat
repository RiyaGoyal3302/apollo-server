@echo off
REM Clearing Module Cache

REM Removing node_modules Directory
IF EXIST "node_modules" rmdir /s /q "node_modules"

REM Using npm Commands for Cache Cleanup
npm cache clean --force

REM Package Manager Cleanup (npm)
npm cache verify

REM Package Manager Cleanup (Yarn)
yarn cache clean

echo Cleanup completed.