import React from 'react';
import {  CSSTransition,  TransitionGroup} from 'react-transition-group';
import './Content.css';


class Content extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	hover: true,
	  	mas: [1,2,3]
	  };
	  this.handleAdd = this.handleAdd.bind(this);
	}
	handleAdd() {
        let newItems = this.state.mas;
        newItems.push(Math.random());
        this.setState({ mas: newItems });
    }

	render(){
		const items = this.state.mas.map((item, i) => (
            <div key={i}>{item}</div>
        ));
		return(
			<CSSTransition
				in={this.state.hover}
    			appear={true}
    			timeout={600}
    			classNames='fade'
    		>
			<div >
			
				<h1>Оформити позов</h1>
				<button onClick={this.handleAdd}></button>
                    {
                    	this.state.mas.map((item, i) => (
                    		<TransitionGroup>
                    			<CSSTransition
									key={i}
									timeout={600}
									classNames='fade'
								>
				           		<p key={i}>{item}</p>
				           		</CSSTransition>
				           	</TransitionGroup>
				        ))
                    }

			</div>
			</CSSTransition>
		)
	}
}

export default Content;