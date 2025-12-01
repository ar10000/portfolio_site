# How to Redeploy on Vercel

## Option 1: Redeploy from Vercel Dashboard (Recommended)

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your **portfolio-site** project
3. Go to the **Deployments** tab
4. Find the most recent deployment (should be the latest commit)
5. Click the **three dots (⋯)** next to it
6. Select **"Redeploy"**
7. Wait 2-3 minutes for the deployment to complete

## Option 2: Cancel and Redeploy

If you see a deployment in progress:

1. Go to **Deployments** tab
2. Find the deployment that's building
3. Click the **three dots (⋯)**
4. Select **"Cancel"** (if available)
5. Then click **"Redeploy"** on the latest successful deployment

## Option 3: Trigger via Git (What we just did)

We just pushed a new commit which should trigger a deployment automatically.

## Option 4: Force Redeploy via Vercel CLI

If you have Vercel CLI installed:

```bash
vercel --prod --force
```

## Check Deployment Status

After redeploying:
1. Wait for the deployment to show **"Ready"** status
2. Click on the deployment to see build logs
3. Check for any errors in the logs
4. Visit your site and check if the 404 errors are gone

## Clear Browser Cache

After redeployment:
1. Hard refresh: **Cmd+Shift+R** (Mac) or **Ctrl+Shift+R** (Windows)
2. Or clear browser cache completely
3. Try incognito/private mode to test

## Why This Happens

The 404 errors for `/api/admin/projects/enhance` happen because:
- Old code (before revert) was trying to call this endpoint
- The endpoint doesn't exist anymore (we removed it)
- Vercel might be serving a cached/old deployment

A fresh deployment will use the latest code which doesn't call that endpoint.

