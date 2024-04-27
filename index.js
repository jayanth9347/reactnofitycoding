const Notification = props => {
  const {classes, iconUrl, message} = props

  const containerClass = `notification ${classes}`

  return (
    <div className={containerClass}>
      <img className='png' src={iconUrl} />
      <p> {message} </p>
    </div>
  )
}

const element = (
  <div className='background'>
    <h1 className='heading'> Notification </h1>

    <Notification
      classes='blue'
      iconUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      message='Information Message'
    ></Notification>

    <Notification
      classes='yellow'
      iconUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      message='Information Message'
    ></Notification>

    <Notification
      classes='red'
      iconUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      message='text Message'
    ></Notification>

    <Notification
      classes='green'
      iconUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      message='Message'
    ></Notification>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))