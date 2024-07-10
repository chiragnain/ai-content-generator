// pages/sign-in.js
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn path="/sign-in" routing="path" />
    </div>
  );
}
