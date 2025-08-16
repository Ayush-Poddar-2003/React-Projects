import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SearchResult } from './assets/components/searchresults/SearchResult';

// Endpoint Variable
export const BASE_URL = "http://localhost:9000"

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


useEffect(() => {
    const fetchFoodData = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } 
    catch (error) {
      setError("Unable to fetch data")
    }
  };
  fetchFoodData();
},[]);
 
  if(error) return <div>{error}</div>
  if(loading) return <div>Loading....</div>

  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="./images/Logo.png" alt="" />
        </div>
        <div className="search">
          <input type="text" placeholder='Search Food'/>
        </div>
      </TopContainer>

      <FilterContainer>
        <Button>All</Button>
        <Button>BreakFast</Button>
        <Button>Lunch </Button>
        <Button>Dinner</Button>
      </FilterContainer>

      <SearchResult data = {data}/>

    </Container>
  )
}

export default App

const Container = styled.div`
  /* border: 5px solid yellow; */
  max-width: 1200px;
  margin: 0 auto;
`

const TopContainer = styled.div`
  /* border: 1px solid red;   */
  min-height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  background-color: black;

  .logo{
    padding-top: 10px;
    /* border: 2px solid white; */
  }

  .search{
    input{
      background-color: transparent;
      border: 4px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`

const FilterContainer = styled.section`
  /* border: 5px solid pink; */
  padding: 30px;
  display: flex;
  justify-content: center;
  gap: 12px;
`

const Button = styled.button`
  background-color: #ffa683;
  border-radius: 5px;
  padding: 6px 12px;
  border: 3px solid white;
  color: #000000;
  font-size: 20px;
  font-weight: bold;
`

