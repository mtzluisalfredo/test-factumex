import React from 'react'
import { useAuth } from '../contexts/auth';

function PublicPage() {
  const { stateAuth } = useAuth();
  console.log('%c [ stateAuth ]-6', 'font-size:13px; background:#06EE8D; color:#2f3656;', stateAuth)
  return (
    <div>PublicPage</div>
  )
}

export default PublicPage