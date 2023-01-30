
const Pagination = ({postsPerPage, totalPosts,paginate}) => {
    const pageNumbers = []
    for (let i = 1; i <=Math.ceil(totalPosts/postsPerPage); i++) {
      pageNumbers.push(i)
        
    }
  return (
    <nav>
        <ul className="number-ul">
            {pageNumbers.map(number =>(
                <li key={number} onClick={()=>paginate(number)} className="number-button">
                    <span className="number-span">{number}</span>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination