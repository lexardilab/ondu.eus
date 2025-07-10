import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Solo redirige si la URL es exactamente "/"
  if (pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = '/es'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

