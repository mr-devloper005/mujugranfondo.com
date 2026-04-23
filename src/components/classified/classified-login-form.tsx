'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight, Loader2 } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function ClassifiedLoginForm() {
  const { login, isLoading } = useAuth()
  const { toast } = useToast()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !password) {
      toast({
        title: 'Missing details',
        description: 'Enter your email and password to continue.',
        variant: 'destructive',
      })
      return
    }
    try {
      await login(email.trim(), password)
      toast({
        title: 'Signed in',
        description: 'Your session was saved on this device.',
      })
      router.push('/')
      router.refresh()
    } catch {
      toast({
        title: 'Sign in failed',
        description: 'Please check your details and try again.',
        variant: 'destructive',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
      <div className="grid gap-2">
        <Label htmlFor="classified-email" className="text-sm font-medium text-[#0A1D37]">
          Email
        </Label>
        <Input
          id="classified-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="h-12 rounded-md border-[#e5e7eb] bg-white px-4 text-[#0A1D37] placeholder:text-[#666666]/70"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="classified-password" className="text-sm font-medium text-[#0A1D37]">
          Password
        </Label>
        <Input
          id="classified-password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="h-12 rounded-md border-[#e5e7eb] bg-white px-4 text-[#0A1D37] placeholder:text-[#666666]/70"
        />
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="h-12 rounded-md bg-[#C32121] text-sm font-semibold text-white hover:bg-[#a61b1b]"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing in…
          </>
        ) : (
          <>
            Sign in
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
      <p className="text-center text-xs text-[#666666]">
        New here?{' '}
        <Link href="/register" className="font-semibold text-[#C32121] hover:underline">
          Create an account
        </Link>
      </p>
    </form>
  )
}
