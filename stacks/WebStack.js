import { StaticSite, use } from '@serverless-stack/resources'
import { ApiStack } from './ApiStack'
import { AuthStack } from './AuthStack'
import { StorageStack } from './StorageStack'

export function WebStack({ stack, app }) {
  const { api } = use(ApiStack)
  const { auth } = use(AuthStack)
  const { bucket } = use(StorageStack)

  // Define our React app
  const site = new StaticSite(stack, 'react', {
    path: 'web',
    buildOutput: 'dist',
    buildCommand: 'npm run build',
    // Pass in our environment variables
    environment: {
      VITE_API_URL: api.customDomainUrl || api.url,
      VITE_REGION: app.region,
      VITE_BUCKET: bucket.bucketName,
      VITE_USER_POOL_ID: auth.userPoolId,
      VITE_IDENTITY_POOL_ID: auth.cognitoIdentityPoolId,
      VITE_USER_POOL_CLIENT_ID: auth.userPoolClientId,
    },
  })

  // Show the url in the output
  stack.addOutputs({
    SiteUrl: site.url,
  })
}
