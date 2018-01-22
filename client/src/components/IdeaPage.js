import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const IdeasDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const IdeaDiv = styled.div`
    background-color: #ffffa5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
`
const DescriptionTextArea = styled.textarea`
    background-color: #ffffa5;
    width: 200px;
    height: 200px;
`
const TitleInput = styled.input`
    background-color: #ffffa5;
    width: 200px;
    height: 25px;
`


class IdeaPage extends Component {

    state = {
        ideas: [
            {
                id: 1,
                title: 'hello',
                description: 'world'
            },
            {
                id: 2,
                title: 'hola',
                description: 'mundo'
            },
            {
                id: 3,
                title: 'goodnight',
                description: 'moon'
            },
            {
                id: 4,
                title: 'greetings',
                description: 'earthlings'
            }
        ]
    }
    render() {
        return (
            <div>
                <div>
                    <HeaderDiv>
                    <h1>Idea Board</h1>
                    </HeaderDiv>
                    <button>New Idea</button>
                </div>
                <IdeasDiv>
                    {this.state.ideas.map((idea) => {
                        return(
                            <IdeaDiv key={idea.title}>
                            <div>
                                <TitleInput type="text" name="Title"/>
                                </div>
                                <div>
                                <DescriptionTextArea name="description"></DescriptionTextArea>
                                </div>
                                <div>
                                <button>Delete Idea</button>
                                </div>
                            </IdeaDiv>
                        )
                    })}
                </IdeasDiv>
            </div>

        )
    }
}

export default IdeaPage