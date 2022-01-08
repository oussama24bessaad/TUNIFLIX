import React from 'react'

const Description = ({ filterList, match, history }) => {
  const desc = filterList.filter((movie) => movie.id == match.params.id)
  console.log(desc, match.params.id, filterList);
  let show;
  let trailer;
  if (desc.length > 0) {
    show = `${desc[0].movieName}`
    trailer = <iframe title='creed' width="680" height="360" src={`${desc[0].trailer}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  } else {
    show = 'Movie not exist'
  }
  return (
    <div className='description' >
      <p> {show} </p>         
      {trailer}
    </div>
  )
}

export default Description
