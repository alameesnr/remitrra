"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import DashboardNav from "@/components/dashboard-nav"
import DashboardHeader from "@/components/dashboard-header"
import WalletOverview from "@/components/wallet-overview"
import AjoOverview from "@/components/ajo-overview"
import { Card, CardContent } from "@/components/ui/card"

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const supabase = createClient()
        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser()

        if (authError || !user) {
          router.push("/auth/login")
          return
        }

        setUser(user)
      } catch (err) {
        console.error("Auth check error:", err)
        setError("Failed to load dashboard")
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card>
          <CardContent className="pt-6">Loading...</CardContent>
        </Card>
      </div>
    )
  }

  if (error || !user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card>
          <CardContent className="pt-6 text-center text-destructive">{error || "Authentication failed"}</CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav user={user} />
      <div className="container mx-auto px-4 py-8">
        <DashboardHeader user={user} />
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <WalletOverview userId={user.id} />
          <AjoOverview userId={user.id} />
        </div>
      </div>
    </div>
  )
}
