import "./parallax.scss"

const Parallax = ({type}) => {
  return (
    <div className="parallax" style={{background:type==="about"? "linear-gradient(180deg,  #B06AB3, #4568DC)": "linear-gradient(180deg, #4568DC, #B06AB3)"}}>
      <h1> {type==="about"? "Что такое Tbilink": "Ответы на популярные вопросы"}</h1>
      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="stars"></div>
    </div>
  )
}

export default Parallax
