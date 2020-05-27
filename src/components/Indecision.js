import React, { Component } from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal'

class IndecisionApp extends Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(o => o !== option)
        }))
    }

    handlePick = () => {
        let random = Math.floor(Math.random() * this.state.options.length)
        let option = this.state.options[random]
        this.setState(() => ({ selectedOption: option }))
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}))
    } 

    handleAddOption = (option) => {
        if (!option) return 'Enter valid value to add item'
        if (this.state.options.indexOf(option) > -1) return 'This option already exists'
        this.setState(prevState => ({ options: [...prevState.options, option] }))
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) this.setState(() => ({ options }))
        } catch (e) {
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    componentWillUnmount() {
        console.log('cwun');
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer'
        const { options, selectedOption } = this.state
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={options.length > 0}
                    handlePick={this.handlePick} />
                <Options options={options}
                    handleDeleteOption={this.handleDeleteOption}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption} />
                <OptionModal selectedOption={selectedOption} 
                handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}
export default IndecisionApp