import React, { Component } from 'react';
class Combo extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/api/capturas/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            });
    }
    handleChange =(event) =>{
        this.setState({
            value: event.target.value
        });
    }
    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Cargando...</div>;
        }
        return (
            <div classname="Combo">
                <select key="{item.id}">
                    <option selected disabled onchnge={this.handleChange}>Seleccionar captura</option>
                    {items.map(item => (
                    <option value={item.id}>{item.nombre_captura}</option>
                    ))}
                </select>
            </div>
        );
    }
}
export default Combo;