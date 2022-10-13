import React from 'react'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseMemo from '../components/HookUseMemo'
import HookUseReducer from '../components/HookUseReducer'
import HookUseRef from '../components/HookUseRef'

const Home = () => {
  return (
    <div>
        <h2>Home</h2>
        <HookUseReducer />
        <HookUseRef />
        <HookUseMemo />
        <HookUseLayoutEffect />
        <HookUseImperativeHandle />
    </div>
  )
}

export default Home