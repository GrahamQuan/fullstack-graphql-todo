import copyfiles from 'copyfiles'

copyfiles(['src/**/*.graphql', 'dist/'], { up: 1 }, () => {
  console.log('GraphQL files copied to dist directory.')
})
