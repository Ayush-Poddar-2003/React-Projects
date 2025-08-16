import styled from "styled-components"
import { BASE_URL } from "../../../App"

export function SearchResult({data}){
    return(
      <FoodCardContainer>
        <FoodCards>

            {
                data?.map((food)=>(
                    <FoodCard key={food.name}>
                        <div className="food_image">
                            <img src={BASE_URL + food.image} alt="" />
                        </div>
                    </FoodCard>
                ))
            }

        </FoodCards>
      </FoodCardContainer>
    )
}

const FoodCardContainer = styled.section`
  /* border: 2px solid green; */
  height: calc(100vh - 210px);
  background-image: url("./images/bg.png");
  background-size : cover;
`

const FoodCards = styled.div`
    color: white;
    border: 5px solid white;
`
const FoodCard = styled.div`

`