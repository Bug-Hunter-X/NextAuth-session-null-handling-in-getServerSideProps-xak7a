```javascript
// pages/aboutSolution.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);
  console.log(session);
  return {
    props: {
      session,
    },
  };
}

export default function About({ session }) {
  if (session && session.user) {
    return (
      <div>
        <h1>About Page</h1>
        <p>This is the about page. Logged in as: {session.user.email}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>About Page</h1>
        <p>This is the about page. Not logged in.</p>
      </div>
    );
  }
}
```