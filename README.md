# Distributable Auth SDK

## Overview
This repository contains code for a distributable authentication SDK. The code uses webpack to create
an embeddable JS bundle. This bundle is responsible for authenticating the user using Auth0 SDK.

# Getting started

## Step 1: Create a SPA client in Auth0
1. [Register for an account in Auth0](https://auth0.com/)
2. [Create a new Auth0 tenant](https://auth0.com/docs/get-started/auth0-overview/create-tenants)
3. [Create a new single page web application](https://auth0.com/docs/get-started/auth0-overview/create-applications)
4. Add `http://localhost:9000` in the application settings
   - Allowed Callback URLs
   - Allowed Logout URLs
   - Allowed Web Origins
   - Allowed Origins (CORS)

## Step 2: Set up environment variables
Create a `.env` file with the following values
```shell
AUTH0_DOMAIN=<your tenant domain>
AUTH0_CLIENT_ID=<your application client id>
```

## Step 3: Run the application
1. `npm install`
2. `npm run dev`

# Issues with this repository
Authentication mechanism does not work in the following browsers
- Safari
- Firefox
- Chrome Incognito
- Brave

Only Chrome browsers without Incognito mode works properly. This is due to string Cross Origin policies in the other browsers.
