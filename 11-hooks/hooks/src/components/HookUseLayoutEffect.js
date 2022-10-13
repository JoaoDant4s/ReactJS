import React, { useEffect, useLayoutEffect, useState } from 'react'

const HookUseLayoutEffect = () => {
    const [name, setName] = useState("Algum nome")

    useEffect(() => {
        console.log("2")
        setName("Mudou de novo!")
    }, [])

    useLayoutEffect(() => {
        console.log("1")
        setName("Outro nome")
    })

    console.log(name)
  return (
    <div>
        <hr />
        <h2>useLayoutEffect</h2>
    </div>
  )
}

export default HookUseLayoutEffect