import React, {Component} from 'react';
import './PrepareQuestionsPage.scss';
import arrow from './oplata.png';
import Item from './Item/Item.jsx';
import {  CSSTransition,  TransitionGroup} from 'react-transition-group';
import { NavLink, Redirect } from 'react-router-dom';

class PrepareQuestionsPage extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
			id: '',
			url: '',
			sendObj: {},
			mas: [
			{
				id: 1,
				text: 'Чи заперечували Ви свою вину на місці вчинення правопорушення?'
			},
			{
				id: 2,
				text: 'Чи був складений протокол?'
			},
			{
				id: 3,
				text: 'Чи ознайомив Вас співробітник поліції із Вашими правами та обов’язками?'
			},
			{
				id: 4,
				text: 'Чи запрошувались свідки під час складання протоколу?'
			},
			{
				id: 5,
				text: 'Чи зазначена в постанові назва приладу?'
			},
			{
				id: 6,
				text: 'Чи були представлені докази, що пристроєм будо заміряно швидкість саме Вашого авто?'
			},
			{
				id: 7,
				text: 'Чи були представлені докази щорічної перевірки та сертифікації приладу вимірювання швидкості?'
			}],
			form1Names:
			[
				'isCustomerDenied',
				'isProtocolCreated',
				'isCustomerAcknowledgedWithLaw',
				'isWitnessAttend',
				'isNameOfDeviceExists',
				'isEvidenceOfSpeedShownToCustomer',
				'isCertificatsOfDeviceShownToCustomer'
			],
			form1Obj:{
				isCustomerDenied: null,
				isProtocolCreated: null,
				isCustomerAcknowledgedWithLaw: null,
				isWitnessAttend: null,
				isNameOfDeviceExists: null,
				isEvidenceOfSpeedShownToCustomer: null,
				isCertificatsOfDeviceShownToCustomer: null
			},
			chosed: [{id:1, b:null}],
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
									id:7,
									apply:{
										id:6,
										apply: -1,
										deny: -1
									},
									deny: {
										id:6,
										apply: -1,
										deny: -1
									}
								},
								deny:{
									id:7,
									apply:{
										id:6,
										apply: -1,
										deny: -1
									},
									deny: {
										id:6,
										apply: -1,
										deny: -1
									}
								}
							},
							deny:{
								id:5,
								apply:{
									id:7,
									apply:{
										id:6,
										apply: -1,
										deny: -1
									},
									deny: {
										id:6,
										apply: -1,
										deny: -1
									}
								},
								deny:{
									id:7,
									apply:{
										id:6,
										apply: -1,
										deny: -1
									},
									deny: {
										id:6,
										apply: -1,
										deny: -1
									}
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
											id:7,
											apply:-1,
											deny:-1
										},
										deny:{
											id:7,
											apply:-1,
											deny:-1
										}
									},
								deny:{
										id:6,
										apply:{
											id:7,
											apply:-1,
											deny:-1
										},
										deny:{
											id:7,
											apply:-1,
											deny:-1
										}
									},
							},
							deny:{
								id:5,
								apply:{
										id:6,
										apply:{
											id:7,
											apply:-1,
											deny:-1
										},
										deny:{
											id:7,
											apply:-1,
											deny:-1
										}
									},
								deny:{
										id:6,
										apply:{
											id:7,
											apply:-1,
											deny:-1
										},
										deny:{
											id:7,
											apply:-1,
											deny:-1
										}
									},
							},
						}
					},
					deny:{
						id:3,
						apply:{
							id:5,
							apply:{
								id:6,
								apply:{
									id:7,
									apply:-1,
									deny:-1
								},
								deny:{
									id:7,
									apply:-1,
									deny:-1
								}
							},
							deny:{
								id:6,
								apply:{
									id:7,
									apply:-1,
									deny:-1
								},
								deny:{
									id:7,
									apply:-1,
									deny:-1
								}
							},
						},
						deny:{
							id:5,
							apply:{
								id:6,
								apply:{
									id:7,
									apply:-1,
									deny:-1
								},
								deny:{
									id:7,
									apply:-1,
									deny:-1
								}
							},
							deny:{
								id:6,
								apply:{
									id:7,
									apply:-1,
									deny:-1
								},
								deny:{
									id:7,
									apply:-1,
									deny:-1
								}
							},
						},
					}
				},
				deny:{
					id:3,
					apply:{
						id:5,
						apply:{
							id:6,
							apply:{
								id:7,
								apply:-1,
								deny:-1
							},
							deny:{
								id:7,
								apply:-1,
								deny:-1
							}
						},
						deny:{
							id:6,
							apply:{
								id:7,
								apply:-1,
								deny:-1
							},
							deny:{
								id:7,
								apply:-1,
								deny:-1
							}
						},
					},
					deny:{
						id:5,
						apply:{
							id:6,
							apply:{
								id:7,
								apply:-1,
								deny:-1
							},
							deny:{
								id:7,
								apply:-1,
								deny:-1
							}
						},
						deny:{
							id:6,
							apply:{
								id:7,
								apply:-1,
								deny:-1
							},
							deny:{
								id:7,
								apply:-1,
								deny:-1
							}
						},
					},
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
									id:7,
									apply:{
										id:6,
										apply: -1,
										deny: -1
									},
									deny: {
										id:6,
										apply: -1,
										deny: -1
									}
								},
								deny:{
									id:7,
									apply:{
										id:6,
										apply: -1,
										deny: -1
									},
									deny: {
										id:6,
										apply: -1,
										deny: -1
									}
								}
							},
							deny:{
								id:5,
								apply:{
									id:7,
									apply:{
										id:6,
										apply: -1,
										deny: -1
									},
									deny: {
										id:6,
										apply: -1,
										deny: -1
									}
								},
								deny:{
									id:7,
									apply:{
										id:6,
										apply: -1,
										deny: -1
									},
									deny: {
										id:6,
										apply: -1,
										deny: -1
									}
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
										id:7,
										apply:-1,
										deny:-1
									},
									deny:{
										id:7,
										apply:-1,
										deny:-1
									}
								},
								deny:{
									id:6,
									apply:{
										id:7,
										apply:-1,
										deny:-1
									},
									deny:{
										id:7,
										apply:-1,
										deny:-1
									}
								},
							},
							deny:{
								id:5,
								apply:{
									id:6,
									apply:{
										id:7,
										apply:-1,
										deny:-1
									},
									deny:{
										id:7,
										apply:-1,
										deny:-1
									}
								},
								deny:{
									id:6,
									apply:{
										id:7,
										apply:-1,
										deny:-1
									},
									deny:{
										id:7,
										apply:-1,
										deny:-1
									}
								},
							},
						}
					},
					deny:{
					id:3,
					apply:{
						id:5,
						apply:{
								id:6,
								apply:{
									id:7,
									apply:-1,
									deny:-1
								},
								deny:{
									id:7,
									apply:-1,
									deny:-1
								}
							},
						deny:{
								id:6,
								apply:{
									id:7,
									apply:-1,
									deny:-1
								},
								deny:{
									id:7,
									apply:-1,
									deny:-1
								}
							},
					},
					deny:{
						id:5,
						apply:{
								id:6,
								apply:{
									id:7,
									apply:-1,
									deny:-1
								},
								deny:{
									id:7,
									apply:-1,
									deny:-1
								}
							},
						deny:{
								id:6,
								apply:{
									id:7,
									apply:-1,
									deny:-1
								},
								deny:{
									id:7,
									apply:-1,
									deny:-1
								}
							},
					},
				}
				},
				deny:{
				id:3,
				apply:{
					id:5,
					apply:{
							id:6,
							apply:{
								id:7,
								apply:-1,
								deny:-1
							},
							deny:{
								id:7,
								apply:-1,
								deny:-1
							}
						},
					deny:{
							id:6,
							apply:{
								id:7,
								apply:-1,
								deny:-1
							},
							deny:{
								id:7,
								apply:-1,
								deny:-1
							}
						},
				},
				deny:{
					id:5,
					apply:{
							id:6,
							apply:{
								id:7,
								apply:-1,
								deny:-1
							},
							deny:{
								id:7,
								apply:-1,
								deny:-1
							}
						},
					deny:{
							id:6,
							apply:{
								id:7,
								apply:-1,
								deny:-1
							},
							deny:{
								id:7,
								apply:-1,
								deny:-1
							}
						},
				},
			}
			},
	  };
	}
	handleRem = (item, bool, previd) => {
		console.log(previd);
		console.log(item);
	}
	handleAdd = (item, bool, previd) => {
		let newA = this.state.chosed;
		if(!newA.find(it => {return it.id===item.id})){
			newA[newA.length-1].b = bool;
			if(typeof item == "object"){
				let newObj = this.state.form1Obj;
				newObj[this.state.form1Names[previd-1]] = bool;
				newA.push({id: item.id, b:null});
	        	this.setState({
	        		chosed: newA,
	        		curtree: item,
	        		form1Obj: newObj
	        	});
			}
			else{
				let newObj = this.state.form1Obj;
				newObj[this.state.form1Names[previd-1]] = bool;
				this.setState({
	        		chosed: newA,
	        		curtree: item,
	        		form1Obj: newObj
	        	});
				if(item===-1) {
					this.prepareToSend()
					this.setState({sorry: false})
				}
				if(item===-2) this.setState({sorry: true});
			}	
        }
	}
	reject = () =>{
		console.log('Sorry');
	}
	prepareToSend = () =>{
		let sendObj = {};
		this.state.form1Obj.isProtocolCreated === false ? sendObj.isProtocolCreated = true : sendObj.isProtocolCreated = false;
		this.state.form1Obj.isWitnessAttend === false ? sendObj.isWitnessAttend = true : sendObj.isWitnessAttend = false;
		this.state.form1Obj.isCustomerAcknowledgedWithLaw === false ? sendObj.isCustomerAcknowledgedWithLaw = true : sendObj.isCustomerAcknowledgedWithLaw = false;
		this.state.form1Obj.isNameOfDeviceExists === false ? sendObj.isNameOfDeviceExists = true : sendObj.isNameOfDeviceExists = false;
		this.state.form1Obj.isCertificatsOfDeviceShownToCustomer === false ? sendObj.isCertificatsOfDeviceShownToCustomer = true : sendObj.isCertificatsOfDeviceShownToCustomer = false;
		if(this.state.form1Obj.isEvidenceOfSpeedShownToCustomer === false) sendObj.isEvidenceOfSpeedShownToCustomer = false;
		else if(this.state.form1Obj.isEvidenceOfSpeedShownToCustomer === true) sendObj.isEvidenceOfSpeedShownToCustomer = true;
		else sendObj.isEvidenceOfSpeedShownToCustomer = null;
		console.log(sendObj);
		this.setState({sendObj}, localStorage.setItem('sendObj', JSON.stringify(sendObj)));
	}
	Show = (e) => {
		e.preventDefault();
		console.log(this.state.sendObj);
	}
	render(){
		return(
			<div className='PrepareQuestionsPage'>
				<h1>Cформувати позов</h1>
				<form onSubmit={this.Show}>
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
								<Item tree={this.state.curtree} item={this.state.mas[item.id-1]} chosed={this.state.chosed} rem={this.handleRem} id={item.id} add={this.handleAdd}/>
								</CSSTransition>				           	
							))
						}
					</TransitionGroup>
					{this.state.sorry 
						?	<NavLink to = '/sorrypage'>
								<button>Продовжити<img src={arrow} alt="oplataimg"/></button>
							</NavLink>
						: 	<NavLink to = '/declaration'>
								<button>Продовжити<img src={arrow} alt="oplataimg"/></button>
							</NavLink>
					}
					
				</form>
			</div>
		)
	}
}

export default PrepareQuestionsPage;