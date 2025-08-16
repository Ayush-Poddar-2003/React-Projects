import styled from 'styled-components'

export function RollDice({rollDice, currentDice}){




    return(
        <DiceContainer>
            <div className='dice' onClick={rollDice}>
                <img src={`images/dice_${currentDice}.png`} alt="" />
            </div>
            <p>
                Click on dice to roll
            </p>
        </DiceContainer>
    )
}

const DiceContainer = styled.div`
margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 24px;
    }
    .dice{
        cursor: pointer;
    }
`
