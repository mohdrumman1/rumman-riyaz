import './WhatIDo.css'

export default function WhatIDoCard({ icon, title, body }) {
  return (
    <div className="whatido-card">
      <div className="whatido-card-icon" aria-hidden="true">
        {icon}
      </div>
      <h3 className="whatido-card-title">{title}</h3>
      <p className="whatido-card-body">{body}</p>
    </div>
  )
}
