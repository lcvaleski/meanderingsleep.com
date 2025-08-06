#!/bin/bash

# Navigate to History Sleep directory
cd /Users/loganvaleski/git_projects/historysleep.com

# Update package.json
sed -i '' 's/"name": "meanderingsleep"/"name": "historysleep"/g' package.json

# Update all instances of Meandering Sleep to History Sleep in the main page
sed -i '' 's/Meandering Sleep/History Sleep/g' app/page.tsx
sed -i '' 's/meandering stories/history lectures/g' app/page.tsx
sed -i '' 's/Meandering Stories/History Lectures/g' app/page.tsx
sed -i '' 's/boring stories/boring history lectures/g' app/page.tsx

# Update metadata in layout.tsx
sed -i '' 's/Meandering Sleep/History Sleep/g' app/layout.tsx
sed -i '' 's/boring stories/boring history lectures/g' app/layout.tsx
sed -i '' 's/bedtime stories/history lectures/g' app/layout.tsx

# Create new Vercel project properly
echo "Now run these commands:"
echo "1. vercel --prod"
echo "   - When asked 'Link to existing project?' say NO"
echo "   - Project name: historysleep"
echo "   - This will create a new Vercel project"
echo ""
echo "2. Add your custom domain in Vercel dashboard"
echo "   - Go to Settings > Domains"
echo "   - Add historysleep.com"
echo ""
echo "3. Update DNS at Cloudflare to point to Vercel"

# Commit changes
git add -A
git commit -m "Convert to History Sleep branding"