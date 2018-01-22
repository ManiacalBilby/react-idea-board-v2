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
        ideas: []
    }

async componentWillMount() {
    const response = await axios.get('/api/ideas')
    this.setState({ideas: response.data})
}

createIdea = async () => {
    const response = await axios.post('/api/ideas')
    const newIdea = response.data

    const newIdeas = [...this.state.ideas]
    newIdeas.unshift(newIdea)
    this.setState({ideas: newIdeas})
}

handleChange = (idea, event) => {
    const updatedIdeas = [...this.state.ideas]
    const ideaToUpdate = updatedIdeas.find((newIdea) => {
        return newIdea._id === idea._id
    })

    ideaToUpdate[event.target.name] = event.target.value
    this.setState({ideas: updatedIdeas})
}

    render() {
        return (
            <div>
                <div>
                    <HeaderDiv>
                    <h1>Idea Board</h1>
                    </HeaderDiv>
                    <button onClick={this.createIdea}>New Idea</button>
                </div>
                <IdeasDiv>
                    {this.state.ideas.map((idea) => {
                        return(
                            <IdeaDiv key={idea._id}>
                            <div>
                                <TitleInput onChange={(event) => {this.handleChange(idea, event)}} type="text" name="title" value={idea.title}/>
                                </div>
                                <div>
                                <DescriptionTextArea onChange={(event) => {this.handleChange(idea, event)}} name="description" value={idea.description}></DescriptionTextArea>
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