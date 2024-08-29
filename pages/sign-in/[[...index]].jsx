import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <>
    <div className="flex w-full justify-center h-screen align-middle items-center">
      <SignIn />
    </div>
  </>
}