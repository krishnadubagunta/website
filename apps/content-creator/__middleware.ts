// import { getServerSession } from 'next-auth/next'
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// export async function middleware(request: NextRequest) {
//   console.log(request.cookies.get('next-auth.csrf-token'))
//   if (!request.cookies.get('next-auth.csrf-token')) {
//     return new NextResponse(
//       JSON.stringify({ success: false, message: 'authentication failed' }),
//       { status: 401, headers: { 'content-type': 'application/json' }
//     })
//   }
// }

// export const config = {
//   matcher: ['/api/medias/((?!general).*)', '/api/socials/((?!general).*)'],
// }