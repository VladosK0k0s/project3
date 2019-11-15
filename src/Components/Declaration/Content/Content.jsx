import React from 'react';
import {  CSSTransition,  TransitionGroup} from 'react-transition-group';
import './Content.css';
import Item from './Item/Item.jsx';
import Form2 from './Form2/Form2.jsx';
import Form3 from './Form3/Form3.jsx';


class Content extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	hover: true,
	  	mas: [{
	  		id: 1,
	  		text: 'Чи заперечували ви свою вину на місці вчинення правопорушення?'
	  	},
	  	{
	  		id: 2,
	  		text: 'Чи був складений протокол?'
	  	},
	  	{
	  		id: 3,
	  		text: 'Чи ознайомив вас поліцейський з вашими правами та обов`язками?'
	  	},
	  	{
	  		id: 4,
	  		text: 'Чи запрошувались свідки під час складання протоколу?'
	  	},
	  	{
	  		id: 5,
	  		text: 'Чи зазначено у постанові назва приладу?'
	  	},
	  	{
	  		id: 6,
	  		text: 'Яка назва приладу, який зафіксовано?'
	  	},
	  	{
	  		id: 7,
	  		text: 'Чи були надані докази, що пристроєм було заміряно швидкість саме вашого автомобіля?'
	  	},
	  	{
	  		id: 8,
	  		text: 'Чи були надані докази, що пристрій пройшов щорsчну перевірку?'
	  	}],
	  	chosed: [{id:1, b:null}],
	  	chosed2: [],
	  	chosed3: [],
	  	tree:{
	  		id:1,
	  		apply:{
	  			id:2,
	  			apply:{
	  				id:4,
	  				apply:{
	  					id:3,
	  					apply:{
	  						id:5,
	  						apply:{
	  							id:6,
	  							apply:{
	  								id:8,
	  								apply:{
	  									id:7,
	  									apply:-2,
	  									deny:-1
	  								},
	  								deny:{
	  									id:7,
	  									apply:-1,
	  									deny:-1
	  								}
	  							},
	  							deny:-1
	  						},
	  						deny:{
	  							id:7,
	  							apply:-1,
	  							deny:-1

	  						}
	  					},
	  					deny:{
	  						id:5,
	  						apply:-1,
	  						deny:{
	  							id:7,
	  							apply:-1,
	  							deny:-1
	  						}
	  					}
	  				},
	  				deny:{
	  					id:3,
	  					apply:{
	  						id:5,
	  						apply:-1,
	  						deny:{
	  							id:7,
	  							apply:-1,
	  							deny:-1
	  						}
	  					},
	  					deny:{
	  						id:5,
	  						apply:-1,
	  						deny:-1
	  					}
	  				}
	  			},
	  			deny:{
	  				id:3,
	  				apply:{
	  					id:5,
  						apply:{
  							id:6,
  							apply:{
  								id:8,
  								apply:{
  									id:7,
  									apply:-2,
  									deny:-1
  								},
  								deny:{
  									id:7,
  									apply:-1,
  									deny:-1
  								}
  							},
  							deny:-1
  						},
  						deny:{
  							id:7,
  							apply:-1,
  							deny:-1

  						}
	  				},
	  				deny:{
	  					id:5,
	  					apply:{
	  						id:6,
  							apply:{
  								id:8,
  								apply:{
  									id:7,
  									apply:-2,
  									deny:-1
  								},
  								deny:{
  									id:7,
  									apply:-1,
  									deny:-1
  								}
  							},
  							deny:-1
	  					},
	  					deny:{
	  						id:7,
  							apply:-1,
  							deny:-1
	  					}
	  				}
	  			}
	  		},
	  		deny:{
	  			id:3,
	  			apply:{
	  				id:5,
	  				apply:-1,
	  				deny:{
	  					id:7,
	  					apply:-1,
	  					deny:-1
	  				}
	  			},
	  			deny:{
	  				id:5,
	  				apply:-1,
	  				deny:{
	  					id:7,
	  					apply:-1,
	  					deny:-1
	  				}
	  			}
	  		}
	  	},
	  	curtree:{
	  		id:1,
	  		apply:{
	  			id:2,
	  			apply:{
	  				id:4,
	  				apply:{
	  					id:3,
	  					apply:{
	  						id:5,
	  						apply:{
	  							id:6,
	  							apply:{
	  								id:8,
	  								apply:{
	  									id:7,
	  									apply:-2,
	  									deny:-1
	  								},
	  								deny:{
	  									id:7,
	  									apply:-1,
	  									deny:-1
	  								}
	  							},
	  							deny:-1
	  						},
	  						deny:{
	  							id:7,
	  							apply:-1,
	  							deny:-1

	  						}
	  					},
	  					deny:{
	  						id:5,
	  						apply:-1,
	  						deny:{
	  							id:7,
	  							apply:-1,
	  							deny:-1
	  						}
	  					}
	  				},
	  				deny:{
	  					id:3,
	  					apply:{
	  						id:5,
	  						apply:-1,
	  						deny:{
	  							id:7,
	  							apply:-1,
	  							deny:-1
	  						}
	  					},
	  					deny:{
	  						id:5,
	  						apply:-1,
	  						deny:-1
	  					}
	  				}
	  			},
	  			deny:{
	  				id:3,
	  				apply:{
	  					id:5,
  						apply:{
  							id:6,
  							apply:{
  								id:8,
  								apply:{
  									id:7,
  									apply:-2,
  									deny:-1
  								},
  								deny:{
  									id:7,
  									apply:-1,
  									deny:-1
  								}
  							},
  							deny:-1
  						},
  						deny:{
  							id:7,
  							apply:-1,
  							deny:-1

  						}
	  				},
	  				deny:{
	  					id:5,
	  					apply:{
	  						id:6,
  							apply:{
  								id:8,
  								apply:{
  									id:7,
  									apply:-2,
  									deny:-1
  								},
  								deny:{
  									id:7,
  									apply:-1,
  									deny:-1
  								}
  							},
  							deny:-1
	  					},
	  					deny:{
	  						id:7,
  							apply:-1,
  							deny:-1
	  					}
	  				}
	  			}
	  		},
	  		deny:{
	  			id:3,
	  			apply:{
	  				id:5,
	  				apply:-1,
	  				deny:{
	  					id:7,
	  					apply:-1,
	  					deny:-1
	  				}
	  			},
	  			deny:{
	  				id:5,
	  				apply:-1,
	  				deny:{
	  					id:7,
	  					apply:-1,
	  					deny:-1
	  				}
	  			}
	  		}
	  	}
	  };
	  this.handleAdd = this.handleAdd.bind(this);
	  this.handleSecondForm = this.handleSecondForm.bind(this);
	  this.handleThirdForm = this.handleThirdForm.bind(this);
	}
	handleAdd(item, bool) {
		let newA = this.state.chosed;
		if(!newA.find(it => {return it.id===item.id})){
			newA[newA.length-1].b = bool;
			if(typeof item == "object"){
				newA.push({id: item.id,b:null});
	        	this.setState({
	        		chosed: newA,
	        		curtree: item
	        	});
			}
			else{
				this.setState({
	        		chosed: newA,
	        		curtree: item
	        	});
				if(item===-1) {
					console.log('sending');
				}
				if(item===-2) console.log('No rul');
			}	
        }
    }
    handleSecondForm(chosed){
    	this.setState({
			chosed2: chosed
    	})
    }
    handleThirdForm(chosed){
    	this.setState({
			chosed3: chosed
    	})
    }
    Show(){
    	console.log(this.state.chosed, this.state.chosed2, this.state.chosed3);
    }
	render(){
		return(
			<div className='Content'>
				<h1>Оформити позов</h1>
				<TransitionGroup className='qa'>
                    {
                    	this.state.chosed.map((item, i) => (
                    		<CSSTransition 
                    			key={i}
                    			in={this.state.hover}
								appear={true}
								timeout={600}
								classNames='fade'
							>
                    		<Item tree={this.state.curtree} item={this.state.mas[item.id-1]} chosed={this.state.chosed} id={i+1} add={this.handleAdd}/>
                    		</CSSTransition>				           	
				        ))
                    }
                </TransitionGroup>
               <Form2 handleSecondForm={this.handleSecondForm}/>
               <Form3 handleThirdForm={this.handleThirdForm}/>
               <button onClick = {()=>this.Show()}>Send</button>	
			</div>
		)
	}
}

export default Content;