import "../../design/buttonSubmit.css"

const buttonSubmit = ({text, className, backgroundColor}) => {
    return (
      <button className={`btn-submit ${className}`} style={{background: backgroundColor}}>
          {text}
      </button>
    )
}

export default buttonSubmit;