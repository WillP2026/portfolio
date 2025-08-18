import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '@src/routeTree.gen'

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultStaleTime: 0,
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
