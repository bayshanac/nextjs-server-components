import { PropsWithChildren } from 'react';

function AuthLayout({children}: PropsWithChildren<{}>) {
  return (
    <div className='bg-secondary'>{children}</div>
  )
}

export default AuthLayout