import '../styles/Tags.css'
function Tag(props) {
  return (
    <div className="container-tags">
      <p className="tag">{props.tagsNom}</p>
    </div>
  )
}

export default Tag
