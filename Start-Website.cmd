@echo off
cd /d "%~dp0"
echo.
echo Evolve by RS Group
echo Open http://localhost:4173 in your browser.
echo Keep this window open. Press Ctrl+C to stop the preview.
echo.
node server.cjs
pause
