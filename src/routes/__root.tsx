import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
    component: Homepage
})

function Homepage() {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>This is the main content of the homepage.</p>
    </div>
  );
}