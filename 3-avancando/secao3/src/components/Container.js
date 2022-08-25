const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>Este é o titulo do container</h2>
        {children}
        <p>prop: {myValue}</p>
    </div>
  )
}

export default Container