import { redirect } from "next/navigation"

// Redirect to dashboard if authenticated, otherwise to login
export default function Home() {
  // This would check authentication in a real app
  const isAuthenticated = true

  if (isAuthenticated) {
    redirect("/dashboard")
  } else {
    redirect("/login")
  }
}

