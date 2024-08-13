#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install

# Add setup.sh to .gitignore
echo "Adding setup.sh to .gitignore..."
echo "setup.sh" >> .gitignore
git add .gitignore
git commit -m "Ignore setup.sh"

# Push changes to the repository
#echo "Pushing changes to the repository..."
#git push origin main

echo "Setup complete"

