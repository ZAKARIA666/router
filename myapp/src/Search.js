const Search = ({search,setRate,newRate}) => {
  
    const onStarClick=(nextValue, prevValue, name)=> {
      setRate({nextValue});
    }
    return (
      <div>
      <input type="text" placeholder="search a movie" onChange={(e)=>search(e.target.value)} />
      <starratingcomponent
            name="rate1" 
            starCount={5}
            value={newRate}
            onStarClick={onStarClick}
          />
      </div>
    )
  }
  
  export default Search