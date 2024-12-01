
export default function Footer(props) {
  const {data, handleToggleModal} = props
  return (
    <footer>
      <div className='bgGradient'></div>
        <div>
            <h2>{data?.title}</h2>    
            <h1>APOD PROJECT</h1>
            <button onClick={handleToggleModal}>
              <i className='fa-solid fa-circle-info' />
            </button>
        </div>
        </footer>
  )
}
