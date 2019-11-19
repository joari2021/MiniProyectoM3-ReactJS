import React, {Component} from 'react';

class TodoForm extends Component{
	constructor(){
		super();
		this.state = {
			title: '',
			responsible: '',
			description: '',
			priority: 'facil'
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput (e) {
		const {value, name} = e.target;
		this.setState({
			[name] : value
		})
	}

	handleSubmit (e) {
		e.preventDefault();
		this.props.onAddTodo(this.state);
	}

	render () {
		return (
			<div className="card">
				<form className="card-body" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input
							type="text"
							name="title"
							onChange={this.handleInput}
							className="form-control"
							placeholder="Titulo"
						/>
					</div>
						
					<div className="form-group">
						<input
							type="text"
							name="responsible"
							className="form-control"
							placeholder="Responsable"
							onChange={this.handleInput}
						/>
					</div>

					<div className="form-group">
						<input
							type="text"
							name="description"
							className="form-control"
							placeholder="Descripcion"
							onChange={this.handleInput}
						/>
					</div>

					<div className="form-group">
						<select
							name="priority"
							className="form-control"
							onChange={this.handleInput}>
							

							<option>Baja</option>
							<option>Media</option>
							<option>Alta</option>
						</select>
					</div>

					<button type="submit" className="btn-primary">Guardar</button>
				</form>
			</div>
		)
	}
}

export default TodoForm;